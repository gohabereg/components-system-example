import { JSDOM } from 'jsdom';
// import Handlebars from 'handlebars';
// import fs from 'fs';

const { window } = new JSDOM('<div id="app"></div>', {
  url: 'http://localhost:3000'
});

global.window = window;
global.document = window.document;
global.DocumentFragment = window.DocumentFragment;

// require.extensions['.hbs'] = function (module, filename) {
//   const contents = fs.readFileSync(filename, 'utf-8');
//
//   module.exports = Handlebars.compile(contents);
// }
// require.extensions['.pcss'] = function () {
//   module.exports = () => ({});
// }
