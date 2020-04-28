const send = (response, message, data) => {
  response.status(200).json({ message, data })
}
module.exports = send
