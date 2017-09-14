"use strict";


module.exports = function(grunt) {
	
  require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		less: {
			style: {
				files: {
					"css/style.css": "less/style.less"
				}
			}
		},

		postcss: {
			options: {
				processors: [
				  require("autoprefixer")({
				  	browsers: ["last 2 versions"]
				  }),
				  require("css-mqpacker")({
				  	sort:true
				  })
				]
			},
			style: {src: "css/*.css"}
		},

		svgmin: {
			symbols: {
				files: [{
					expand: true,
					src: ["img/icons/*.svg"]
				}]
			}
		},

		svgstore: {
			options: {
				svg: {
					style: "display:none"
				},
				cleanup: [
				"fill"
				]
			},
			symbols: {
				files: {
					"img/symbols.svg": ["img/icons/*.svg"]
				}
			}
		},

		imagemin: {
			images: {
				options: {
					optimizationLevel: 3
				},
				files: [{
					expand: true,
					src: ["img/**/*.{png,jpg,gif}"]
				}]
			}
		},

		browserSync: {
			server: {
				bsFiles: {
					src: ["*.html", "css/*.css"]
				},
				options: {
					watchTask:true,
					server: "."
				}
			}
		},

		watch: {
      style: {
      	files: ["less/**/*.less"],
      	tasks: ["less"]
      }
		}
	});
  
	grunt.registerTask("serve", ["browserSync", "watch"]);
	grunt.registerTask("symbols", ["svgmin", "svgstore"]);

};