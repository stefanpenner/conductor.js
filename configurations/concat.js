// This is pretty terrible, but I don't know a good way to use `bower ls` here.
// There are two issues
//  1.  UUID doesn't have a bower.json so we have to know a-priori the path to
//      its main file
//  2.  `bower.commands.list` is async; I don't know a good way to get output
//      from async commands into a grunt config.
//      see https://github.com/gruntjs/grunt/issues/783
var vendorSources = require('grunt').file.readJSON('vendorSources.json');

module.exports = {
  amd: {
    src: ['tmp/amd/**/*.js'],
    dest: 'dist/<%= pkg.name %>-<%= pkg.version %>.amd.js'
  },

  browser: {
    src: vendorSources.concat([
      'dist/<%= pkg.name %>-<%= pkg.version %>.amd.js'
    ]),
    dest: 'tmp/browser/<%= pkg.name %>-<%= pkg.version %>.js',
    options: {
      footer: "self.Oasis = requireModule('oasis'); self.Conductor = requireModule('conductor'); requireModule('conductor/card'); self.oasis = new self.Oasis(); self.oasis.autoInitializeSandbox();"
    }
  },

  tests: {
    src: ['test/helpers/*', 'test/tests/**/*_test.js'],
    dest: 'tmp/public/conductor_tests.js'
  }
};
