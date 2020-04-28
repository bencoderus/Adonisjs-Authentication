'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Log = use('App/Models/ActivityLog')

class ActivityLog {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({
    request,
    response,
    ctx
  }, next) {
    await next()
    let data = {
      url: request.url(),
      payload: `${request.raw()}`,
      response: response.response.statusCode,
    }
    const save = await Log.create(data)
  }
}

module.exports = ActivityLog
