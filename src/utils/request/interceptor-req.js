function reqSuccess(config, apiKey) {
  console.info(config);
  return {
    ...config,
    url: `${config.url}?key=${apiKey}`, // add an api key to the url
  };
}

function reqError(error) {
  return Promise.reject(error);
}

export {
  reqSuccess,
  reqError,
};
