'use strict'

const User = use('App/Models/User')
const Hash = use('Hash');
const {
  validateAll
} = use('Validator')

class AuthController {

  async login({
    request,
    response,
    auth
  }) {
    const rules = {
      email: "required|email",
      password: "required|min:6|max:50"
    }

    const validation = await validateAll(request.all(), rules)
    if (validation.fails()) {
      let vmsg = validation.messages()
      return response.status(422).json({
        'message': "Validation failed",
        user: {},
        errors: vmsg
      })
    }

    let data = await request.only(['email', 'password']);
    let user = await User.query().where('email', data.email).first()
    if (user) {
      let verify = await Hash.verify(data.password, user.password)
      let token = await auth.generate(user)
      if (verify) {
        response.status(200).json({
          'message': "Login successful",
          user,
          token: token
        })
      } else {
        response.status(400).json({
          'message': "Invalid crendentials",
          user: {}
        })

      }
    } else {
      response.status(400).json({
        'message': "User not found",
        user: {}
      })
    }


  }

  async register({
    request,
    response,
    auth
  }) {
    const rules = {
      username: "required|min:3|unique:users",
      email: "required|email|unique:users",
      password: "required|min:8|max:50"
    }

    const validation = await validateAll(request.all(), rules)
    if (validation.fails()) {
      let vmsg = validation.messages()
      return response.status(422).json({
        'message': "Validation failed",
        user: {},
        errors: vmsg
      })
    }

    let data = request.only(['username', 'email', 'password']);
    try {
      let newuser = await User.create(data);
      let token = await auth.generate(newuser)
      response.status(200).json({
        message: "User registered successfully",
        user: newuser,
        token
      })
    } catch (err) {
      response.status(400).json({
        message: err.sqlMessage,
        user: {}
      })
    }
  }


  async profile({
    request,
    response,
    auth
  }) {
    try {
      let user = await auth.getUser()
      if (user) {
        response.status(200).json({
          message: "Verified",
          user
        })
      }
    } catch (error) {
      response.status(400).json({
        message: "Token is not defined",
        user: {}
      })
    }
  }
}

module.exports = AuthController
