function getPreparedFormData(formConfiguration) {
  return (
    formConfiguration.reduce((acc, next) => ({
      fields: [
        ...acc.fields,
        next,
      ],
      model: {
        ...acc.model,
        [next.model]: '',
      },
    }), { fields: [], model: {} })
  );
}

export {
  getPreparedFormData,
};
