function Replacer(baseUrl) {
  this.baseUrl = baseUrl
}

Replacer.prototype.prefix = function(arg) {
  console.log(arg)
  return arg
}

module.exports = {
  create: function(baseUrl) {
    return new Replacer(baseUrl)
  }
}