/* global require, module */

var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
    constructor: function() {
        'use strict';

        // super constructor
        yeoman.generators.Base.apply(this, arguments);

        // options
        // this.option('jasmine');     // do we want to set up tests (NOT YET IMPLEMENTED)
        this.option('grid-system');     // includes responsive.css
    }
});
