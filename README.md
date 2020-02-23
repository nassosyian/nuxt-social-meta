# Nuxt social meta

Nuxt.js module generate meta-tags for social network - facebook and twitter.

## Install

```sh
npm i --save https://github.com/nassosyian/nuxt-social-meta.git
```

or 
```sh
yarn add https://github.com/nassosyian/nuxt-social-meta.git
```

## Usage

Add module to nuxt.config.js

```js
  modules: [
    ...
    ['nuxt-social-meta', {
      url: 'Site url',
      title: 'Title site',
      description: 'Description site',
      img: 'Link to image in static folder',
      locale: 'ru_RU',
      twitter: '@UserName',
      themeColor: '#ThemeColor'
    }]
  ]
```

or inside nuxt.config.js

```js
  'social-meta': {
      url: 'Site url',
      title: 'Title site',
      description: 'Description site',
      img: 'Link to image in static folder',
      locale: 'ru_RU',
      twitter: '@UserName',
      themeColor: '#ThemeColor'
  },
```

and/or in your layouts
(note: this overrides values in the nuxt.config.js)

```js
    created()
    {
        // How to add per-layout, or even per-page different SEO meta-tags
        this.$socialMeta({
            url: 'Site url',
            title: 'Title site',
            description: 'Description site',
            img: 'Link to image in static folder',
            locale: 'ru_RU',
            twitter: '@UserName',
            themeColor: '#ThemeColor'
        })
    }
```

and/or inside the asyncData() function, per page
(note: this overrides values in the nuxt.config.js)

```js
    asyncData(ctx) 
    {
        ctx.socialMeta({
            url: 'Site url',
            title: 'Title site',
            description: 'Description site',
            img: 'Link to image in static folder',
            locale: 'ru_RU',
            twitter: '@UserName',
            themeColor: '#ThemeColor'
        })
    }
```