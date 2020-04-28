const send = (response, message, data) => {
  response.status(500).json({ message, data })
}
module.exports = send
