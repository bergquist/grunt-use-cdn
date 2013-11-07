var _ = require('underscore')

function Replacer(baseUrl) {
  this.baseUrl = baseUrl
}

Replacer.prototype.prefix = function(arg) {
  _.forEach(arg, function(file, index) {
    if (file.indexOf('/') !== 0) {
      arg[index] = this.baseUrl + '/' + file
    } else {
      arg[index] = this.baseUrl + file
    }
  }, this)

  return arg
}

module.exports = {
  create: function(baseUrl) {
    return new Replacer(baseUrl)
  }
}