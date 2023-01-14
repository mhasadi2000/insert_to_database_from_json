const { default: fastify } = require("fastify");
const {
  verifyOTP, insertCities,
} = require("../controllers/users");

const {
  verifyOTPDataSchema,
  requestOTPDataSchema,
  nationalCodeParamSchema,

  verifyOTPResponse,
  requestOTPResponse,
  requestOTPDevelopResponse,
  userUpdateStatusResponse,
  userDataResponse,
  updateProfileDataSchema,
} = require("../schemas/users");

const verifyOTPOpts = (fastify) => {
  return {
    schema: {
      body: verifyOTPDataSchema,
      response: {
        200: verifyOTPResponse,
      },
    },
    handler: verifyOTP(fastify),
  };
};

const insertCitiesOpts = (fastify) => {
  return {
    handler: insertCities(fastify),
  };
};

function userRoutes(fastify, options, done) {

  // verify otp
  fastify.post("/users", verifyOTPOpts(fastify));
  fastify.post("/cities", insertCitiesOpts(fastify));

  done();
}

module.exports = userRoutes;
