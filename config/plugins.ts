export default () => ({
  transformer: {
    enabled: true,
    responseTransforms: {
      removeDataKey: true,
      removeAttributesKey: true,
    },
  },
});
