'use strict';

module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var config = {};

    grunt.initConfig(config);

    var tasks = [];

    grunt.registerTask('build', tasks);
};
