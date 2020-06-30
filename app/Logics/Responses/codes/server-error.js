const respond = require('../respond')

const send = (response, message, data) => {
  respond(response, 500, message, data)
}
module.exports = send
