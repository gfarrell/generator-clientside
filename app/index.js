/* global require, module */

var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
    constructor: function() {
        // super constructor
        yeoman.generators.Base.apply(this, arguments);

        // options
        // this.option('jasmine');     // do we want to set up tests (NOT YET IMPLEMENTED)
    },

    createDirectoryStructure: function() {
        var dirs = ['dist', 'less', 'js'];
        var that = this;

        dirs.forEach(function(d) {
            that.mkdir(d);
        });
    },

    copyFiles: function() {
        // Bower configuration file
        this.copy('.bowerrc.template', '.bowerrc');

        // main stylesheet
        this.copy('styles.less.template', 'less/styles.less');

        // main javascript entrypoint
        this.copy('main.js.template', 'js/main.js');

        // package.json and bower.json
        this.copy('bower.json.template', 'bower.json');
        this.copy('package.json.template', 'package.json');

        // write the gruntfile
        this.copy('Gruntfile.js.template', 'Gruntfile.js');
    },

    installDependencies: function() {
        var npm = [
            'bower',
            'clean-css',
            'grunt',
            'grunt-autoprefixer',
            'grunt-cli',
            'grunt-contrib-less',
            'grunt-contrib-requirejs',
            'grunt-contrib-watch',
            'load-grunt-tasks',
            'uglify-js'
        ];
        var bower = [
            'lodash',
            'jquery',
            'requirejs'
        ];
        
        this.npmInstall(npm, {save: true});
        this.bowerInstall(bower, {save: true});
    }
});
