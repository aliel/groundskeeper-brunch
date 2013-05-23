groundskeeper = require('groundskeeper')

module.exports = class CleanJs
  brunchPlugin: yes
  type: 'javascript'
  extension: 'js'

  constructor: (@config) ->
    @options = @config?.plugins?.groundskeeper ? {
      debugger: true,
      pragmas: ['validation', 'development']
    }
    return

  optimize: (data, path, callback) =>
    cleaner = groundskeeper @options
    cleaner.write data
    callback null, cleaner.toString()