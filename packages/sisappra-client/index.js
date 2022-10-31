"use strict";

const got = require("got");
const fp = require("fastify-plugin");

module.exports = fp(async function(fastify, opts) {
  const { masterdataBaseUrl } = opts;

  const _logRetry = (error, retryCount) => {
    console.error(`Retrying after error ${error.code}, retry #: ${retryCount}`);
  };

  fastify.decorate("rest", {
    masterdata: () => got.extend({
      prefixUrl: masterdataBaseUrl,
      headers: {
        Authorization: undefined,
      },
      retry: {
        limit: 5,
        errorCodes: [
          'ETIMEDOUT'
        ],
      },
      hooks: {
        beforeRetry: [
          _logRetry,
        ],
      },
    })
  });
});