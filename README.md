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

If you choose to disable fields for a piece or page you can do so by setting `openGraph: false` on the module. `apostrophe-files`, 'apostrophe-global', `apostrophe-groups`, `apostrophe-images`, `apostrophe-users` have `openGraph: false` configured by default.

```js
module.exports = {
  name: 'person',
  label: 'Person',
  pluralLabel: 'People',
  openGraph: false
};
```

Add the following to `layout.html` that all of your pages extend, or to `outerLayout.html` if you have one in `apostrophe-templates/views/`.

```nunjucks
{% if data.piece %}
  {% set openGraphUrl = data.piece._url %}
  {% if data.piece.openGraphTitle %}
    {% set openGraphTitle = data.piece.openGraphTitle %}
  {% endif %}
  {% if data.piece.openGraphDescription %}
    {% set openGraphDescription = data.piece.openGraphDescription %}
  {% endif %}
  {% if data.piece.openGraphType %}
    {% set openGraphType = data.piece.openGraphType %}
  {% endif %}
  {% if data.piece.openGraphImage %}
    {% if apos.images.first(data.piece.openGraphImage) %}
      {% set openGraphImageObj = apos.images.first(data.piece.openGraphImage) %}
      {% set openGraphImagePath = apos.attachments.url(openGraphImageObj, { size: 'full' })  %}
    {% endif %}
  {% endif %}
{% else %}
  {% set openGraphUrl = data.page._url %}
  {% if data.page.openGraphTitle %}
    {% set openGraphTitle = data.page.openGraphTitle %}
  {% endif %}
  {% if data.page.openGraphDescription %}
    {% set openGraphDescription = data.page.openGraphDescription %}
  {% endif %}
  {% if data.page.openGraphType %}
    {% set openGraphType = data.page.openGraphType %}
  {% endif %}
  {% if data.page.openGraphImage %}
    {% if apos.images.first(data.page.openGraphImage) %}
      {% set openGraphImageObj = apos.images.first(data.page.openGraphImage) %}
      {% set openGraphImagePath = apos.attachments.url(openGraphImageObj, { size: 'full' })  %}
    {% endif %}
  {% endif %}
{% endif %}
<meta property="og:url" content="{{ data.baseUrl }}{{ openGraphUrl }}" />
<meta property="og:type" content="{{ openGraphType }}" />
<meta property="og:title" content="{{ openGraphTitle }}" />
<meta property="og:description" content="{{ openGraphDescription }}" />
<meta property="og:image" content="{{ data.baseUrl }}{{ openGraphImagePath }}" />
```
