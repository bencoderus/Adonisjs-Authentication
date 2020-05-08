const respond = require('../respond')

const send = (response, message, data) => {
  respond(response, 400, message, data)
}
module.exports = send
