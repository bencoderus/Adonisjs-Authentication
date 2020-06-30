const respond = require('../respond')

const send = (response, message, data) => {
  respond(response, 201, message, data)
}
module.exports = send
