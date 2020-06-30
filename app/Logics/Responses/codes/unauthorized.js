const respond = require('../respond')

const send = (response, message, data) => {
  respond(response, 401, message, data)
}
module.exports = send
