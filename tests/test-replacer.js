'use strict';
var assert = require('assert')
var replacer = require('../libs/replacer').create('//static.com')

describe('replacer', function() {
  before(function() {
    this.summary = {
      '/static/image.png': '/static/image.2awfa3.png',
      'script.js': 'script.fqwert.js'
    }
    this.result = replacer.prefix(this.summary)
  })

  it('image.png should have cdn', function() {
    assert.equal(this.result['/static/image.png'], '//static.com/static/image.2awfa3.png')
  })

  it('script.js should have cdn', function() {
    assert.equal(this.result['/static/image.png'], '//static.com/static/image.2awfa3.png')
  })
})