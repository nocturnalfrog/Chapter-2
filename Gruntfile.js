'use strict';

module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var config = {};

    config['watch'] = {
        options: {
//            nospawn: true
        },
        compass: {
            files: ['src/styles/{,*/}*.{scss,sass}'],
            tasks: ['compass:server']
        },
        jade: {
            files: ['src/templates/{,*/}*.jade'],
            tasks: ['jade:server']
        }
    };

    config['compass'] = {
        options: {
            sassDir: 'src/styles/sass',
            cssDir: 'src/styles',
            importPath: 'src/bower_components',
            relativeAssets: false
        },
        dist: {},
        server: {}
    };

    config['jade'] = {
        dist: {
            files: {
                'src/index.html':
                    'src/templates/index.jade',
                'src/golden-dragon.html':
                    'src/templates/golden-dragon.jade',
                'src/little-pizzeria.html':
                    'src/templates/little-pizzeria.jade'
            }
        },
        server: {
            options: {
                data: {
                    debug: false
                }
            },
            files: {
                'src/index.html':
                    'src/templates/index.jade',
                'src/golden-dragon.html':
                    'src/templates/golden-dragon.jade',
                'src/little-pizzeria.html':
                    'src/templates/little-pizzeria.jade'
            }
        }
    };

    grunt.initConfig(config);

    var tasks = [
        'watch'
    ];

    grunt.registerTask('build', tasks);
};
