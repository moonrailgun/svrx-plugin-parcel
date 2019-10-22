const Parcel = require('parcel-bundler');
const serveStatic = require('koa-static');
const { createMiddleware } = require('koa-parcel-middleware');

module.exports = {
  configSchema: {
    entry: {
      description: 'entry of your project',
      default: 'index.html',
      anyOf: [
        {
          type: 'string',
        },
        {
          type: 'object',
        },
      ],
    },
    target: {
      type: 'string',
      default: 'browser',
      description: 'target of build. allow: browser, node, electron',
    },
    watch: {
      type: 'boolean',
      default: true,
      description:
        'Whether watch file change to trigger rebuild',
    },
    minify: {
      type: 'boolean',
      default: process.env.NODE_ENV === 'production',
      description: 'Whether minify outfile',
    },
    outDir: {
      type: 'string',
      default: './dist',
      description: 'out dir of parcel',
    },
    outFile: {
      type: 'string',
      default: './dist/index.html',
      description: 'out file of parcel',
    },
  },
  hooks: {
    async onCreate({
      middleware, config, logger,
    }) {
      const {
        entry, target, watch, minify, outDir, outFile,
      } = config.get();
      logger.info(`[Parcel] entry: ${entry}`);

      const bundler = new Parcel(entry, {
        target, watch, minify, outDir, outFile,
      });
      bundler.bundle();

      const staticMiddleware = serveStatic(outDir);

      // https://github.com/parcel-bundler/parcel/issues/422
      const parcelMiddleware = createMiddleware({
        bundler,
        staticMiddleware,
      });

      middleware.add('parcel', {
        onCreate: () => (ctx, next) => parcelMiddleware(ctx, next),
      });
    },
  },
};
