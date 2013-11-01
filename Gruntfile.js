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
    },
    responsive_images: {
      dev: {
        options: {},
        files: [{
          expand: true,
          src: ['assets/img/**/*.{jpg,gif,png}'],
          cwd: 'public/src/',
          dest: 'public/dist/'
        }]
      }
    },
    copy: {
      dev: {
        files: [{
          expand: true,
          src: ['**/*', '!public/src/img/**/*.*'],
          cwd: 'public/src',
          dest: 'public/dist/'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['copy', 'responsive_images', 'sass:dev']);
}