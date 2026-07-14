/* global module */

module.exports = new Proxy({}, {
    get: (target, prop) => prop
});