'use strict';

module.exports = function(grunt) {
  grunt.registerTask('use-cdn', 'Some kind of description.', function() {
    if ((!grunt.filerev || !grunt.filerev.summary)) {
      grunt.log.error('missing grunt.filerev.summary. Make sure you run grunt-filerev before this')
      return;
    }
  });
}