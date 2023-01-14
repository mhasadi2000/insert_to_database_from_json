const { insertcity } = require('../services/cities');
const { verify } = require('../services/users');

const verifyOTP = (fastify) => {
  return (req, reply) => {
    return verify(fastify.jwt, fastify.pg, req.body);
  };
};

const insertCities = (fastify) => {
  return (req, reply) => {
    return insertcity( fastify.pg);
  };
};

module.exports = {
  verifyOTP,
  insertCities
};
