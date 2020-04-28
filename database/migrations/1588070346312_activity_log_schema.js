'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActivityLogSchema extends Schema {
  up() {
    this.create('activity_logs', (table) => {
      table.increments()
      table.string('url')
      table.text('payload')
      table.string('response')
      table.timestamps()
    })
  }

  down() {
    this.drop('activity_logs')
  }
}

module.exports = ActivityLogSchema
