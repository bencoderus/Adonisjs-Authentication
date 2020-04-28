const send = (response, message, data) => {
  response.status(403).json({ message, data })
}
module.exports = send
