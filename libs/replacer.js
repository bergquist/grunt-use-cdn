var _ = require('underscore')

module.exports = {
  prefix: function(options, arg) {
    _.forEach(arg, function(file, index) {
      _.forEach(options, function(opt) {
        addCdn(file, opt, arg, index)
      })
    }, this)

    return arg
  }
}

function addCdn(file, opt, arg, index) {
  if (isValidFile(file, opt)) {
    if (file.indexOf('/') !== 0) {
      arg[index] = opt.url + '/' + file
    } else {
      arg[index] = opt.url + file
    }
  }
}

function isValidFile(file, options) {
  return file.match(options.pattern)
}