const Config = use('Config');

module.exports = {
  authenticator: 'jwt',
  jwt: {
    serializer: 'Lucid',
    model: 'App/Models/User',
    scheme: 'jwt',
    uid: 'email',
    password: 'password',
    options: {
      secret: Config.get('app.appKey'),
      // For additional options, see the table below...
    }
  }
}
