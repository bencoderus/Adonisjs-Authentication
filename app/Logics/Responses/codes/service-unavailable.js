const send = (response, message, data) => {
  response.status(503).json({ message, data })
}
module.exports = send
