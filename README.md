# apostrophe-open-graph

[Open Graph](https://ogp.me/) for [ApostropheCMS](https://apostrophecms.com).

## Installation

```bash
npm install apostrophe-open-graph --save
```

## Use

Configure `apostrophe-open-graph` in `app.js`.

```js
const apos = require('apostrophe')({
  shortName: 'project',
  modules: {
    'apostrophe-open-graph': {}
  }
});
```

**Set the `baseUrl` value.** Open Graph images *will not be set* with absolute URLs if the `baseUrl` is not set. This should either be [on the core server object](https://docs.apostrophecms.org/reference/core-server.html#options) or, more likely, in environment configuration, [such as in `data/local.js`](https://docs.apostrophecms.org/core-concepts/global-settings/settings.html#hardcoded-settings). Some social media platforms consider an aboslute URL to be a requirement and *will not accept the image URL without it*.

If you choose to disable fields for a piece or page you can do so by setting `openGraph: false` on the module. `apostrophe-files`, `apostrophe-global`, `apostrophe-groups`, `apostrophe-images`, `apostrophe-users` have `openGraph: false` configured by default.

```js
module.exports = {
  name: 'person',
  label: 'Person',
  pluralLabel: 'People',
  openGraph: false
};
```

Add the following include to your `<head></head>` in `layout.html` that all of your pages extend, or to `outerLayout.html` if you have one in `apostrophe-templates/views/`. This will output the meta tags needed for Open Graph.

```nunjucks
{% block extraHead %}
  {% include "apostrophe-open-graph:view.html" %}
{% endblock %}
```


## ChangeLog

### 1.1.6 - 2020-06-03
- Removes the regression where the site domain would be present twice in the
`og:image` tag if `baseUrl` is set on the application. There is also a dev
warning should `baseUrl` not be set.
- Removes Facebook-specific language, as Open Graph is used more widely.