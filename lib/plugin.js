const Vue = require('vue')
// const debug = require('debug')
// const deb = debug('nuxt:seo:debug')

const moduleOptions = <%= serialize(options) %>

export default function (ctx, inject) {
	function create (options = {}) {
		options = {
			...moduleOptions,
			...options
		}

		if ( !!options.title )
		ctx.app.head.title = options.title

		// All meta tags
		const metaTags = [
			// Global
			{ name: 'author', content: options.author || options.url },
			{ name: 'publisher', content: options.publisher || options.url },
			{ name: 'apple-mobile-web-app-title', content: options.title },
			{ name: 'theme-color', content: options.themeColor },
			// Fb
			{ name: 'og:title', content: options.title },
			{ name: 'og:description', content: options.description },
			{ name: 'og:type', content: options.type || 'website' },
			{ name: 'og:url', content: options.url },
			{ name: 'og:image', content: options.img },
			{ name: 'og:locale', content: options.locale },
			// Twitter
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:site', content: options.twitter },
			{ name: 'twitter:creator', content: options.creator || options.twitter },
			{ name: 'twitter:title', content: options.title },
			{ name: 'twitter:description', content: options.description },
			{ name: 'twitter:image', content: options.img }
		]

		metaTags.forEach( tag =>
		{
			if ( !!tag.content )
			{
				ctx.app.head.meta.push({
					...tag,
					hid: tag.name,
				})
			}
		});

		if (Vue.prototype && Vue.prototype.$meta) {
			if (Vue.prototype.$nuxt && Vue.prototype.$nuxt.$options && Vue.prototype.$nuxt.$options.head) {
				Vue.prototype.$nuxt.$options.head = ctx.app.head
			}
		}
	}
	ctx.socialMeta = create
	inject('socialMeta', create)
}