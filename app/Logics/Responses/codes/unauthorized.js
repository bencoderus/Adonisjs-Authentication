const send = (response, message, data) => {
  response.status(401).json({ message, data })
}
module.exports = send
