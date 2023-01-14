const userDataProperties = {
  id: { type: "integer" },
  mobile: { type: "string", maxLength: 11 },
  first_name: { type: "string" },
  last_name: { type: "string" },
  shops: {
    type: "array",
    items: {
      type: "object",
      properties: {
        shop_id: { type: "integer" },
        role: { type: "string" },
        shop_name: { type: "string" },
        mobile: { type: "string" },
        address: { type: "string" },
        category: { type: "string" },
      },
    },
  },
};

const national_code = {
  type: "string",
  minLength: 10,
  maxLength: 10,
};
const userDataResponse = {
  type: "object",
  properties: {
    data: {
      national_code,
      ...userDataProperties,
    },
  },
};

const userDataSchema = {
  type: "object",
  properties: userDataProperties,
};

const nationalCodeParamSchema = {
  type: "object",
  properties: {
    national_code,
  },
};

const userIdParamSchema = {
  type: "object",
  properties: {
    userId: {
      type: "integer",
    },
  },
};

const verifyOTPDataSchema = {
  type: "object",
  properties: {
    national_code,
    otp: {
      type: "string",
    },
  },
};

const requestOTPDataSchema = {
  type: "object",
  properties: {
    national_code,
    mobile: userDataProperties.mobile,
  },
};

const updateProfileDataSchema = {
  type: "object",
  properties: {
    first_name: userDataProperties.first_name,
    last_name: userDataProperties.last_name,
  },
};

// responses

const verifyOTPResponse = {
  type: "object",
  properties: {
    data: {
      success: true,
      access_token: {
        type: "string",
      },
    },
  },
};

const requestOTPResponse = {
  type: "object",
  properties: {
    data: {
      type: "object",
      properties: {
        ok: {
          type: "boolean",
        },
      },
    },
  },
};

const requestOTPDevelopResponse = {
  type: "object",
  properties: {
    data: {
      type: "object",
      properties: {
        otp: {
          type: "string",
        },
      },
    },
  },
};

const getMeResponse = {
  type: "object",
  properties: {
    data: userDataSchema,
  },
};

const successfulResponse = {
  successful: {
    type: "boolean",
    default: true,
  },
};

const userUpdateStatusResponse = {
  type: "object",
  properties: successfulResponse,
};

module.exports = {
  userDataSchema,
  nationalCodeParamSchema,
  userIdParamSchema,
  verifyOTPDataSchema,
  requestOTPDataSchema,

  verifyOTPResponse,
  requestOTPResponse,
  getMeResponse,
  requestOTPDevelopResponse,
  userUpdateStatusResponse,
  userDataResponse,
  updateProfileDataSchema,
};
