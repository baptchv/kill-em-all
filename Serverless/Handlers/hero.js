const update = async () => {

  return {
    status: 200,
    body: JSON.stringify('OK')
  };
};

const get = async () => {

  return {
    status: 200,
    body: JSON.stringify('OK')
  };
};

module.exports = {
  getH: get,
  updateH: update
};
