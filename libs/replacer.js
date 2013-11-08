var _ = require('underscore')

function Replacer(options) {
  this.options = options
}

Replacer.prototype.prefix = function(options, arg) {
  _.forEach(arg, function(file, index) {
    _.forEach(options, function(opt) {
      if (file.match(opt.pattern)) {
        if (file.indexOf('/') !== 0) {
          arg[index] = opt.url + '/' + file
        } else {
          arg[index] = opt.url + file
        }
      }
    })
  }, this)

  return arg
}

module.exports = {
  create: function() {
    return new Replacer()
  }
}