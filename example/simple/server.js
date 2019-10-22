const svrx = require('@svrx/svrx');

svrx({
  port: 8088,
  open: false,
  logger: {
    level: 'info'
  },
  plugins: [
    {
      name: 'parcel',
      options: {
        // you can pass string or object
        // watch: false
        // minify: true
      },
    },
  ],
}).start();
