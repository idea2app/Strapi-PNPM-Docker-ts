export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        credentials: {
          accessKeyId: env('CLOUDFLARE_ACCESS_KEY_ID'),
          secretAccessKey: env('CLOUDFLARE_ACCESS_SECRET'),
        },
        region: 'auto',
        endpoint: env('CLOUDFLARE_ENDPOINT'),
        params: {
          Bucket: env('CLOUDFLARE_BUCKET'),
        },
      },
    },
  },
  'address-selection': { enabled: true },
});
