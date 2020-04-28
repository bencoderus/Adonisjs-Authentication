const send = (response, message, data) => {
  response.status(402).json({ message, data })
}
module.exports = send
