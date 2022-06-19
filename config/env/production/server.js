module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://colleges-backend.herokuapp.com/'),
    app: {
      keys: env.array('APP_KEYS')
    },
  })