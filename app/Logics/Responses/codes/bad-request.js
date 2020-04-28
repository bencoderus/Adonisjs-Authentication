const send = (response, message, data) => {
  response.status(400).json({ message, data })
}
module.exports = send
