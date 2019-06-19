# Intl Bug Reproduction

This is a minimal reproduction of an error that is occurring when `yarn build`/`next build` is run. The error occurs when the `intl` polyfill is loaded via a dynamic import.

My terminal output when I run `yarn build` is as follows:

```bash
~/projects/intl-debugging
❯ yarn build
yarn run v1.16.0
warning package.json: No license field
$ next build
Creating an optimized production build ...

(node:79018) UnhandledPromiseRejectionWarning: TypeError [ERR_INVALID_ARG_TYPE]: The "data" argument must be one of type string, TypedArray, or DataView. Received type number
    at Hash.update (internal/crypto/hash.js:58:11)
    at ids.forEach.id (/Users/jamesmulholland/projects/intl-debugging/node_modules/next/dist/build/webpack/plugins/hashed-chunk-ids-plugin.js:24:41)
    at Array.forEach (<anonymous>)
    at compilation.hooks.beforeChunkIds.tap.chunks (/Users/jamesmulholland/projects/intl-debugging/node_modules/next/dist/build/webpack/plugins/hashed-chunk-ids-plugin.js:24:25)
    at SyncHook.eval [as call] (eval at create (/Users/jamesmulholland/projects/intl-debugging/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)
    at SyncHook.lazyCompileHook (/Users/jamesmulholland/projects/intl-debugging/node_modules/tapable/lib/Hook.js:154:20)
    at hooks.optimizeTree.callAsync.err (/Users/jamesmulholland/projects/intl-debugging/node_modules/webpack/lib/Compilation.js:1275:30)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/jamesmulholland/projects/intl-debugging/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook (/Users/jamesmulholland/projects/intl-debugging/node_modules/tapable/lib/Hook.js:154:20)
    at Compilation.seal (/Users/jamesmulholland/projects/intl-debugging/node_modules/webpack/lib/Compilation.js:1244:27)
(node:79018) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:79018) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
✨  Done in 2.83s.

```


----

This project was bootstrapped with [Create Next App](https://github.com/segmentio/create-next-app).
