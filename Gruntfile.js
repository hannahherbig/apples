"use strict";

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      dist: {
        files: {
          "dist/app.js": ["src/app.js", "src/socket.js", "src/cards.js"],
        },
      },
    },
    uglify: { dist: { files: { "dist/app.min.js": ["dist/app.js"] } } },
    jshint: {
      options: { jshintrc: ".jshintrc" },
      all: [
        "Gruntfile.js",
        "app.js",
        "game.js",
        "src/app.js",
        "src/socket.js",
        "src/cards.js",
      ],
    },
  });

  grunt.registerTask("dist", ["concat:dist", "uglify:dist"]);
  grunt.registerTask("default", ["jshint", "concat", "uglify"]);

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-jshint");
};
