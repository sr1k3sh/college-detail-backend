module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','1g8jW/TqztzEVEGfMHBlZA'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','v99qSzZRgSl2ZE2YQIq64w'),
  },
});
