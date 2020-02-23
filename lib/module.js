const path = require('path')

module.exports = function (moduleOptions) {

	this.nuxt.hook('build:before', () => {

		const options = {
			...moduleOptions,
			...(this.options['social-meta'] || {}),
		}

		this.addPlugin({
			src: path.resolve(__dirname, 'plugin.js'),
			fileName: 'nuxt-social-meta.js',
			options: options
		})
	})
}

module.exports.meta = require('../package.json')
