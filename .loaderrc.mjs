import Handlebars from 'handlebars';

const hbsLoader = {
  resolve: (specifier, options) => {
    const { href, pathname } = new URL(specifier, options.parentURL)

    if (pathname.endsWith('.hbs')) {
      return {
        format: 'module',
        url: href,
      }
    }
  },

  format: (url, options) => {
    const { pathname } = new URL(url, options.parentURL)

    if (pathname.endsWith('.hbs')) {
      return {
        format: 'module'
      }
    }
  },
  transform: (source, options) => {
    const { url } = options;
    const { pathname } = new URL(url)

    if (!pathname.endsWith('.hbs')) {
      return;
    }

    const result = `
      import Handlebars from 'handlebars/runtime.js';

      export default Handlebars.template(${Handlebars.precompile(String(source))});
    `;

    return { source: result };
  }
}

export default {
  loaders: [
    hbsLoader,
    'esm-loader-typescript',
    'esm-loader-css'
  ],
};
