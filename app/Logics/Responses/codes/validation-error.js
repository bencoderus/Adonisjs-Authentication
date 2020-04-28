const send = (response, message, data) => {
  response.status(422).json({ message, data })
}
module.exports = send
