const send = (response, message, data) => {
  response.status(201).json({ message, data })
}
module.exports = send
