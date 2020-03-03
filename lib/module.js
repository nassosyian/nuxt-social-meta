const path = require('path')

module.exports = function (moduleOptions) {

	this.nuxt.hook('build:before', () => {

		const options = {
			...moduleOptions,
			...(this.options['social-meta'] || {}),
		}
		
		if (!this.options['social-meta'] || !Object.keys(this.options['social-meta']).length)
		{
			console.log('error: social-meta found no configuration')
		}

		this.addPlugin({
			src: path.resolve(__dirname, 'plugin.js'),
			fileName: 'nuxt-social-meta.js',
			options: options
		})
	})
}

module.exports.meta = require('../package.json')
