var _ = require('underscore')

function Replacer(baseUrl) {
  this.baseUrl = baseUrl
}

Replacer.prototype.prefix = function(arg) {
  _.forEach(arg, function(file, index) {
    arg[index] = this.baseUrl + file
  }, this)

  return arg
}

module.exports = {
  create: function(baseUrl) {
    return new Replacer(baseUrl)
  }
}