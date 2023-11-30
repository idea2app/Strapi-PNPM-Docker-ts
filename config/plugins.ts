export default ({ env }) => ({
  transformer: {
    enabled: true,
    responseTransforms: {
      removeDataKey: true,
      removeAttributesKey: true,
    },
  },
  'react-icons': true,
  'location-plugin': {
    enabled: env('DATABASE_CLIENT') === 'postgres',
  },
});
