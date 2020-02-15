module.exports = function(grunt) {

	var utf8encode = (function () {
		function pad(s, len) {
			if (s.length < len) {
				s = ('0000000000' + s.toString()).slice(-len);
			}
			return s;
		}

		return function (str) {
			return str.replace(/./g, function (c) {
				if (c.charCodeAt(0) > 255) {
					return "\\u" + (pad(c.charCodeAt(0).toString(16), 4));
				} else {
					return c;
				}
			});
		};

	})();

	grunt.initConfig({
		less: {
			main: {
				options: {
					sourceMap : true,
					sourceMapFilename : './css/less.css.map',
					sourceMapBasepath : 'css/',
					sourceMapRootpath : '/',
					sourceMapURL : '/css/less.css.map'
				},
				files: {
					"./css/less.css": "./less/main.less"
				}
			}
		},
		concat : {
			templates : {
				src: ['jstemplate/*.tpl'],
				dest: 'js/templates.js',
				options: {
					banner: 'var TemplateJS = {',
					footer: '};',
					separator : ',\r\n',
					process: function(src, filepath) {
						var name = filepath.substr(filepath.lastIndexOf('/')+1).replace('.tpl','');
						return name+': "'+src.replace(/"/g,'\\"').replace(/\r|\n|\t/g,"")+'"';
					}
				}
			}
		},
		watch: {
			less: {
				files: "./less/*.less",
				tasks: ["less"]
			},
			templates: {
				files: "./jstemplate/*.tpl",
				tasks: ["concat:templates"]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ["less", "concat"]);
	grunt.registerTask('l', ["less"]);
};
