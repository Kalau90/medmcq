const { env } = require('./vars');

// TODO: Tilføj if prod/dev
let keys;
if (env === 'production') {
  keys = require('./prod');
} else if (env === 'travis') {
  keys = require('./prod');
} else {
  keys = require('./dev');
} else {
  keys = require('./prod');
}

module.exports = { ...keys };
