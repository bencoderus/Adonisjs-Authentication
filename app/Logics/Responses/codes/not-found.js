const respond = require('../respond')

const send = (response, message, data) => {
  respond(response, 404, message, data)
}
module.exports = send
