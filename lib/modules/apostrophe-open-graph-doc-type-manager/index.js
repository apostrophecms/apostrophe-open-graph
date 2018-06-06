module.exports = {
  improve: 'apostrophe-doc-type-manager',
  beforeConstruct: (self, options) => {
    var existingArrange = options.arrangeFields || [];

    if (options.openGraph !== false) {
      options.addFields = [
        {
          name: 'openGraphTitle',
          label: 'Open Graph Title',
          type: 'string',
          help: 'The title of your content without any branding such as your site name.'
        },
        {
          name: 'openGraphDescription',
          label: 'Open Graph Description',
          type: 'string',
          textarea: true,
          help: 'A brief description of the content, usually between 2 and 4 sentences. This will displayed below the title of the post on Facebook.'
        },
        {
          name: 'openGraphType',
          label: 'Open Graph Type',
          type: 'string',
          help: 'The type of media of your content. See https://developers.facebook.com/docs/reference/opengraph#object-type.'
        },
        {
          name: 'openGraphImage',
          label: 'Open Graph Image',
          type: 'singleton',
          widgetType: 'apostrophe-images',
          help: 'The image that appears when someone shares the content on Facebook.',
          options: {
            aspectRatio: [ 1.91, 1 ],
            minSize: [ 1200, 630 ],
            limit: [ 1 ]
          }
        }
      ].concat(options.addFields || []);

      options.arrangeFields = existingArrange.concat([
        {
          name: 'openGraph',
          label: 'Facebook Open Graph',
          fields: [
            'openGraphTitle',
            'openGraphDescription',
            'openGraphType',
            'openGraphImage'
          ]
        }
      ]);
    }
  }
};
