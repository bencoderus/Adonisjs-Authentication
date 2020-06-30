const respond = require('../respond')

const send = (response, message, data) => {
  respond(response, 402, message, data)
}
module.exports = send
