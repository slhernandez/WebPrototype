module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      files: ['sass/*.scss', 'index.html'],
      tasks: 'sass:dev'
    },

    sass: {
      dev: {
        files: {
          'public/style.css': 'sass/_helpers.scss',
          'public/style.css': 'sass/_typography.scss',
          'public/style.css': 'sass/_grids.scss',
          'public/style.css': 'sass/_header.scss',
          'public/style.css': 'sass/_footer.scss',
          'public/style.css': 'sass/_base-layout.scss',
          'public/style.css': 'sass/global.scss'
        }
      }
    }
  });
  grunt.registerTask('default', 'sass:dev');

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
}