'use strict'

const myres = use('App/Logics/Responses')

class HomeController {
  async index ({ request, response }) {
    let data = {
      user: {}
    }
    return myres.success(response, 'hello', data)
  }
}

module.exports = HomeController
