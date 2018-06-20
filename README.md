# apostrophe-open-graph

Facebook's Open Graph for [ApostropheCMS](http://apostrophecms.org/).

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

If you choose to disable fields for a piece or page you can do so by setting `openGraph: false` on the module. `apostrophe-files`, `apostrophe-global`, `apostrophe-groups`, `apostrophe-images`, `apostrophe-users` have `openGraph: false` configured by default.

```js
module.exports = {
  name: 'person',
  label: 'Person',
  pluralLabel: 'People',
  openGraph: false
};
```

Add the following include to your `<head></head>` in `layout.html` that all of your pages extend, or to `outerLayout.html` if you have one in `apostrophe-templates/views/`. This will output the meta tags needed for Facebook Open Graph.

```nunjucks
{% block extraHead %}
  {% include "apostrophe-open-graph:view.html" %}
{% endblock %}
```
