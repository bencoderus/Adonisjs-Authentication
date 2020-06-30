const respond = (response, status, message, data) => {
  response.status(status).json({ message, data })
}

module.exports = respond
