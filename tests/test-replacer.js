'use strict';
var assert = require('assert')
var replacer = require('../libs/replacer').create()

describe('replacer', function() {
  var summary = null,
    result = null,
    options = null

  beforeEach(function() {
    summary = {
      '/static/image.png': '/static/image.2awfa3.png',
      'static/script.js': 'static/script.fqwert.js'
    }
    options = [{ pattern: /.*/gi, url: '//static.com' }]
  })

  describe('with relative paths', function() {
    beforeEach(function() {
      result = replacer.prefix(options, summary)
    })

    it('image.png should have cdn', function() {
      assert.equal(result['/static/image.png'], '//static.com/static/image.2awfa3.png')
    })
  })

  describe('with static paths', function() {
    beforeEach(function() {
      result = replacer.prefix(options, summary)
    })

    it('script.js should have cdn', function() {
      assert.equal(result['static/script.js'], '//static.com/static/script.fqwert.js')
    })
  })

  describe('with two options', function() {
    beforeEach(function() {
      options = [
        { pattern: /\.png/gi, url: '//image.cdn.com' },
        { pattern: /\.js/gi, url: '//script.cdn.com' }
      ]
      result = replacer.prefix(options, summary)
    })

    it('', function() {
      assert.equal(result['/static/image.png'], '//image.cdn.com/static/image.2awfa3.png')
    })

    it('', function() {
      assert.equal(result['static/script.js'], '//script.cdn.com/static/script.fqwert.js')
    })
  })
})