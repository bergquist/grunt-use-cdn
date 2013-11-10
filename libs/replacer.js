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
  if (_.isArray(options.pattern)) {
    result = false
    options.pattern.forEach(function(p) {
      if (!result && file.match(p)) {
        result = true;
      }
    })

    return result;
  } else {
    return file.match(options.pattern)
  }
}