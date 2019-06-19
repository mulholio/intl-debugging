async function loadPolyfills() {
  // load Intl polyfill if it doesn't already exist in the
  // browser
  const Intl = await !global.Intl
    ? import('intl')
    : new Promise(resolve => resolve(global.Intl));
  global.Intl = Intl
}

/*
The following also fails in the same way:

function loadPolyfills() {
  return new Promise(resolve => {
    if (!global.Intl) {
      require.ensure([
        'intl',
        'intl/locale-data/jsonp/en.js'
      ], function (require) {
        require('intl');
        require('intl/locale-data/jsonp/en.js');
        resolve();
      });
    } else {
      resolve();
    }
  })
}
*/

export default loadPolyfills;
