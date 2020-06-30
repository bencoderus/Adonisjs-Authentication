const respond = require('../respond')

const send = (response, message, data) => {
  respond(response, 200, message, data)
}
module.exports = send
