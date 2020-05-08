const respond = require('../respond')

const send = (response, message, data) => {
  respond(response, 503, message, data)
}
module.exports = send
