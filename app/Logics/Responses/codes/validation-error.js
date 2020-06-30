const respond = require('../respond')

const send = (response, message, data) => {
  respond(response, 422, message, data)
}
module.exports = send
