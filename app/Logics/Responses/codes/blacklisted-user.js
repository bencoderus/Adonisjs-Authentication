const respond = require('../respond')

const send = (response, message, data) => {
  respond(response, 403, message, data)
}
module.exports = send
