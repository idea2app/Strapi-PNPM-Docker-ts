export default ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'script-src': [
            "'self'",
            'unsafe-inline',
            'https://*.basemaps.cartocdn.com',
            'https://cdn.ckeditor.com',
          ],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'your_id.r2.cloudflarestorage.com',
            'https://tile.openstreetmap.org',
            'https://*.tile.openstreetmap.org',
            'https://*.basemaps.cartocdn.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'https://*.tile.openstreetmap.org',
            'https://unpkg.com/leaflet@1.9.4/dist/images/',
            'https://*.basemaps.cartocdn.com',
            new URL(env('STORAGE_URL'), 'http://localhost:1337').origin,
          ],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
