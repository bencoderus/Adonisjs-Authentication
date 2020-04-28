const send = (response, message, data) => {
  response.status(404).json({ message, data })
}
module.exports = send
