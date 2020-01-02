<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->

# Firestarter: a Gatsby's blog starter for fireblog 🔥 with AMP & PWA support

Fireblog is a new headless CMS dedicated to blogging, you can try it here for free : https://fireblogcms.com/

We believe JAMstack is today one of the best way to manage a professionnal blog, so this is a Gatbsy open source starter to get you started quickly with fireblog. There is still room for improvments but we are working on it !

This started has been forked from [here](https://github.com/gatsbyjs/gatsby-starter-blog) and here [here](https://github.com/tomoyukikashiro/gatsby-starter-blog-amp-to-pwa) , thanks guys for your awesome work !

## AMP to PWA

This starter has AMP to PWA Strategy (a.k.a. AMP as entry point into your PWA). Please check [original blog](https://www.ampproject.org/docs/integration/pwa-amp#amp-as-entry-point-into-your-pwa) for more detail.

## Features

- Pagination
- PWA (Progessive Web App)
- AMP support
- Images optimization with gatsby-image when possible
- Social metatags for twitter, facebook, linkedin etc

## Getting started

### Requirements

node.js >= 10.13 is required. You might be interested in using "nvm" to install node and switch easily between different node versions.

### Installation

1. Download and execute Gatsby to create our blog:

```bash
$ npx gatsby new fireblog https://github.com/fireblogcms/gatsby-starter-fireblog-firestarter
$ cd fireblog
```

2. Create a `.env` file and fill all the variables from `.env.template` file.

Running the dev server:

```bash
$ npm run develop
```

Build and serve the production files:

```bash
$ npm run build && npm run serve
```

You can check articles in following URLs.

- Non-AMP：http://localhost:8000
- AMP：http://localhost:8000/amp/

## 💫 Deploy

We love to use Netlify at fireblogcms.com because it is super easy to use and comes with great addons to makes your JAMstack site more spicy (lambdas function, forms etc).

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/fireblogcms/gatsby-starter-fireblog-firestarter)
