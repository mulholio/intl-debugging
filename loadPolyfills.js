async function loadPolyfills() {
  // load Intl polyfill if it doesn't already exist in the
  // browser
  const Intl = await !global.Intl
    ? import('intl')
    : new Promise(resolve => resolve(global.Intl));
  global.Intl = Intl
}

export default loadPolyfills;
