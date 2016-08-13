"use strict";

var _request = require("request");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("babel-polyfill");

// promise returning function
function get(url) {
  return new Promise(function (resolve, reject) {
    (0, _request2.default)({
      method: 'GET',
      url: url,
      json: true,
      headers: {
        'User-Agent': 'request'
      }
    }, function (err, resp, body) {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
}

// create a new "async" function so we can use the "await" keyword
function printPublicGists() {
  var gists;
  return regeneratorRuntime.async(function printPublicGists$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          console.log("Before1");
          console.log("Before2");
          console.log("Before3");
          console.log("Before4");
          console.log("Before5");
          console.log("Before6");
          console.log("Before7");
          console.log("Before8");
          _context.next = 11;
          return regeneratorRuntime.awrap(get('http://www.mocky.io/v2/5185415ba171ea3a00704eed'));

        case 11:
          gists = _context.sent;

          console.log("After1");
          console.log("After2");
          console.log("After3");
          console.log("After4");
          console.log(gists.hello);
          console.log("After5");
          console.log("After6");
          console.log("After7");
          console.log("After8");
          console.log("After9");
          console.log("After10");
          _context.next = 27;
          break;

        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](0);

        case 27:
        case "end":
          return _context.stop();
      }
    }
  }, null, this, [[0, 25]]);
}

console.log("Starting..");
printPublicGists();
console.log("Ending1..");
console.log("Ending2..");
console.log("Ending3..");
console.log("Ending4..");
console.log("Ending5..");
