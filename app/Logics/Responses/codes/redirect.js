const respond = require('../respond')

const send = (response, message, data) => {
  respond(response, 307, message, data)
}
module.exports = send
