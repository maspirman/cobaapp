// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/mood/imagery/w-brokenClouds-day-autumn-1.jpg":[function(require,module,exports) {
module.exports = "/w-brokenClouds-day-autumn-1.a186d6e9.jpg";
},{}],"assets/mood/imagery/w-brokenClouds-day-summer-1.jpg":[function(require,module,exports) {
module.exports = "/w-brokenClouds-day-summer-1.4f7a7c18.jpg";
},{}],"assets/mood/imagery/w-brokenClouds-night-summer-1.jpg":[function(require,module,exports) {
module.exports = "/w-brokenClouds-night-summer-1.b258b34d.jpg";
},{}],"assets/mood/imagery/w-clearSky-day-autumn-1.jpg":[function(require,module,exports) {
module.exports = "/w-clearSky-day-autumn-1.3834316e.jpg";
},{}],"assets/mood/imagery/w-clearSky-day-summer-1.jpg":[function(require,module,exports) {
module.exports = "/w-clearSky-day-summer-1.785f0e51.jpg";
},{}],"assets/mood/imagery/w-clearSky-day-winter-1.jpg":[function(require,module,exports) {
module.exports = "/w-clearSky-day-winter-1.f307171c.jpg";
},{}],"assets/mood/imagery/w-clearSky-night-autumn-1.jpg":[function(require,module,exports) {
module.exports = "/w-clearSky-night-autumn-1.62c84ccf.jpg";
},{}],"assets/mood/imagery/w-clearSky-night-summer-1.jpg":[function(require,module,exports) {
module.exports = "/w-clearSky-night-summer-1.1d1a687b.jpg";
},{}],"assets/mood/imagery/w-clearSky-night-winter-1.jpg":[function(require,module,exports) {
module.exports = "/w-clearSky-night-winter-1.425f4958.jpg";
},{}],"assets/mood/imagery/w-mist-day-autumn-1.jpg":[function(require,module,exports) {
module.exports = "/w-mist-day-autumn-1.5d82ba98.jpg";
},{}],"assets/mood/imagery/w-mist-day-winter-1.jpg":[function(require,module,exports) {
module.exports = "/w-mist-day-winter-1.8655b94e.jpg";
},{}],"assets/mood/imagery/w-mist-night-summer-1.jpg":[function(require,module,exports) {
module.exports = "/w-mist-night-summer-1.f782e898.jpg";
},{}],"assets/mood/imagery/w-mist-night-winter-1.jpg":[function(require,module,exports) {
module.exports = "/w-mist-night-winter-1.ecd4bd26.jpg";
},{}],"assets/mood/imagery/w-rain-day-autumn-1.jpg":[function(require,module,exports) {
module.exports = "/w-rain-day-autumn-1.74e286b9.jpg";
},{}],"assets/mood/imagery/w-rain-day-spring-1.jpg":[function(require,module,exports) {
module.exports = "/w-rain-day-spring-1.756abd9e.jpg";
},{}],"assets/mood/imagery/w-rain-day-summer-1.jpg":[function(require,module,exports) {
module.exports = "/w-rain-day-summer-1.bf9f2920.jpg";
},{}],"assets/mood/imagery/w-rain-day-winter-1.jpg":[function(require,module,exports) {
module.exports = "/w-rain-day-winter-1.8ba2c736.jpg";
},{}],"assets/mood/imagery/w-rain-night-summer-1.jpg":[function(require,module,exports) {
module.exports = "/w-rain-night-summer-1.0121e6b2.jpg";
},{}],"assets/mood/imagery/w-scatteredClouds-day-summer-1.jpg":[function(require,module,exports) {
module.exports = "/w-scatteredClouds-day-summer-1.2b362cd5.jpg";
},{}],"assets/mood/imagery/w-scatteredClouds-day-winter-1.jpg":[function(require,module,exports) {
module.exports = "/w-scatteredClouds-day-winter-1.539558a0.jpg";
},{}],"assets/mood/imagery/w-snow-day-autumn-1.jpg":[function(require,module,exports) {
module.exports = "/w-snow-day-autumn-1.7631fb12.jpg";
},{}],"assets/mood/imagery/w-snow-day-winter-1.jpg":[function(require,module,exports) {
module.exports = "/w-snow-day-winter-1.4a92ee7b.jpg";
},{}],"assets/mood/imagery/w-snow-night-winter-1.jpg":[function(require,module,exports) {
module.exports = "/w-snow-night-winter-1.fa861202.jpg";
},{}],"assets/mood/imagery/w-thunderstorm-day-summer-1.jpg":[function(require,module,exports) {
module.exports = "/w-thunderstorm-day-summer-1.bac461fb.jpg";
},{}],"assets/mood/imagery/w-thunderstorm-day-winter-1.jpg":[function(require,module,exports) {
module.exports = "/w-thunderstorm-day-winter-1.41a57f74.jpg";
},{}],"assets/mood/imagery/w-thunderstorm-night-summer-1.jpg":[function(require,module,exports) {
module.exports = "/w-thunderstorm-night-summer-1.677e7142.jpg";
},{}],"assets/mood/imagery/season-autumn.jpg":[function(require,module,exports) {
module.exports = "/season-autumn.4d26baad.jpg";
},{}],"assets/mood/imagery/season-spring.jpg":[function(require,module,exports) {
module.exports = "/season-spring.d70823f5.jpg";
},{}],"assets/mood/imagery/season-summer.jpg":[function(require,module,exports) {
module.exports = "/season-summer.4914c6cf.jpg";
},{}],"assets/mood/imagery/season-winter.jpeg":[function(require,module,exports) {
module.exports = "/season-winter.2027f9a6.jpeg";
},{}],"assets/mood/imagery/moodimagery.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moodImagery = void 0;

var _wBrokenCloudsDayAutumn = _interopRequireDefault(require("./w-brokenClouds-day-autumn-1.jpg"));

var _wBrokenCloudsDaySummer = _interopRequireDefault(require("./w-brokenClouds-day-summer-1.jpg"));

var _wBrokenCloudsNightSummer = _interopRequireDefault(require("./w-brokenClouds-night-summer-1.jpg"));

var _wClearSkyDayAutumn = _interopRequireDefault(require("./w-clearSky-day-autumn-1.jpg"));

var _wClearSkyDaySummer = _interopRequireDefault(require("./w-clearSky-day-summer-1.jpg"));

var _wClearSkyDayWinter = _interopRequireDefault(require("./w-clearSky-day-winter-1.jpg"));

var _wClearSkyNightAutumn = _interopRequireDefault(require("./w-clearSky-night-autumn-1.jpg"));

var _wClearSkyNightSummer = _interopRequireDefault(require("./w-clearSky-night-summer-1.jpg"));

var _wClearSkyNightWinter = _interopRequireDefault(require("./w-clearSky-night-winter-1.jpg"));

var _wMistDayAutumn = _interopRequireDefault(require("./w-mist-day-autumn-1.jpg"));

var _wMistDayWinter = _interopRequireDefault(require("./w-mist-day-winter-1.jpg"));

var _wMistNightSummer = _interopRequireDefault(require("./w-mist-night-summer-1.jpg"));

var _wMistNightWinter = _interopRequireDefault(require("./w-mist-night-winter-1.jpg"));

var _wRainDayAutumn = _interopRequireDefault(require("./w-rain-day-autumn-1.jpg"));

var _wRainDaySpring = _interopRequireDefault(require("./w-rain-day-spring-1.jpg"));

var _wRainDaySummer = _interopRequireDefault(require("./w-rain-day-summer-1.jpg"));

var _wRainDayWinter = _interopRequireDefault(require("./w-rain-day-winter-1.jpg"));

var _wRainNightSummer = _interopRequireDefault(require("./w-rain-night-summer-1.jpg"));

var _wScatteredCloudsDaySummer = _interopRequireDefault(require("./w-scatteredClouds-day-summer-1.jpg"));

var _wScatteredCloudsDayWinter = _interopRequireDefault(require("./w-scatteredClouds-day-winter-1.jpg"));

var _wSnowDayAutumn = _interopRequireDefault(require("./w-snow-day-autumn-1.jpg"));

var _wSnowDayWinter = _interopRequireDefault(require("./w-snow-day-winter-1.jpg"));

var _wSnowNightWinter = _interopRequireDefault(require("./w-snow-night-winter-1.jpg"));

var _wThunderstormDaySummer = _interopRequireDefault(require("./w-thunderstorm-day-summer-1.jpg"));

var _wThunderstormDayWinter = _interopRequireDefault(require("./w-thunderstorm-day-winter-1.jpg"));

var _wThunderstormNightSummer = _interopRequireDefault(require("./w-thunderstorm-night-summer-1.jpg"));

var _seasonAutumn = _interopRequireDefault(require("./season-autumn.jpg"));

var _seasonSpring = _interopRequireDefault(require("./season-spring.jpg"));

var _seasonSummer = _interopRequireDefault(require("./season-summer.jpg"));

var _seasonWinter = _interopRequireDefault(require("./season-winter.jpeg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var moodImagery = {
  wBCdA1: _wBrokenCloudsDayAutumn.default,
  wBCdS1: _wBrokenCloudsDaySummer.default,
  wBCnS1: _wBrokenCloudsNightSummer.default,
  wCSdA1: _wClearSkyDayAutumn.default,
  wCSdS1: _wClearSkyDaySummer.default,
  wCSdW1: _wClearSkyDayWinter.default,
  wCSnA1: _wClearSkyNightAutumn.default,
  wCSnS1: _wClearSkyNightSummer.default,
  wCSnW1: _wClearSkyNightWinter.default,
  wMdA1: _wMistDayAutumn.default,
  wMdW1: _wMistDayWinter.default,
  wMnS1: _wMistNightSummer.default,
  wMnW1: _wMistNightWinter.default,
  wRdA1: _wRainDayAutumn.default,
  wRdSG1: _wRainDaySpring.default,
  wRdS1: _wRainDaySummer.default,
  wRdW1: _wRainDayWinter.default,
  wRnS1: _wRainNightSummer.default,
  wSCdS1: _wScatteredCloudsDaySummer.default,
  wSCdW1: _wScatteredCloudsDayWinter.default,
  wSRdS1: _wRainNightSummer.default,
  wSdA1: _wSnowDayAutumn.default,
  wSdW1: _wSnowDayWinter.default,
  wSnW1: _wSnowNightWinter.default,
  wTSdS1: _wThunderstormDaySummer.default,
  wTSdW1: _wThunderstormDayWinter.default,
  wTSnS1: _wThunderstormNightSummer.default,
  sAT: _seasonAutumn.default,
  sSG: _seasonSpring.default,
  sSU: _seasonSummer.default,
  sWT: _seasonWinter.default
};
exports.moodImagery = moodImagery;
},{"./w-brokenClouds-day-autumn-1.jpg":"assets/mood/imagery/w-brokenClouds-day-autumn-1.jpg","./w-brokenClouds-day-summer-1.jpg":"assets/mood/imagery/w-brokenClouds-day-summer-1.jpg","./w-brokenClouds-night-summer-1.jpg":"assets/mood/imagery/w-brokenClouds-night-summer-1.jpg","./w-clearSky-day-autumn-1.jpg":"assets/mood/imagery/w-clearSky-day-autumn-1.jpg","./w-clearSky-day-summer-1.jpg":"assets/mood/imagery/w-clearSky-day-summer-1.jpg","./w-clearSky-day-winter-1.jpg":"assets/mood/imagery/w-clearSky-day-winter-1.jpg","./w-clearSky-night-autumn-1.jpg":"assets/mood/imagery/w-clearSky-night-autumn-1.jpg","./w-clearSky-night-summer-1.jpg":"assets/mood/imagery/w-clearSky-night-summer-1.jpg","./w-clearSky-night-winter-1.jpg":"assets/mood/imagery/w-clearSky-night-winter-1.jpg","./w-mist-day-autumn-1.jpg":"assets/mood/imagery/w-mist-day-autumn-1.jpg","./w-mist-day-winter-1.jpg":"assets/mood/imagery/w-mist-day-winter-1.jpg","./w-mist-night-summer-1.jpg":"assets/mood/imagery/w-mist-night-summer-1.jpg","./w-mist-night-winter-1.jpg":"assets/mood/imagery/w-mist-night-winter-1.jpg","./w-rain-day-autumn-1.jpg":"assets/mood/imagery/w-rain-day-autumn-1.jpg","./w-rain-day-spring-1.jpg":"assets/mood/imagery/w-rain-day-spring-1.jpg","./w-rain-day-summer-1.jpg":"assets/mood/imagery/w-rain-day-summer-1.jpg","./w-rain-day-winter-1.jpg":"assets/mood/imagery/w-rain-day-winter-1.jpg","./w-rain-night-summer-1.jpg":"assets/mood/imagery/w-rain-night-summer-1.jpg","./w-scatteredClouds-day-summer-1.jpg":"assets/mood/imagery/w-scatteredClouds-day-summer-1.jpg","./w-scatteredClouds-day-winter-1.jpg":"assets/mood/imagery/w-scatteredClouds-day-winter-1.jpg","./w-snow-day-autumn-1.jpg":"assets/mood/imagery/w-snow-day-autumn-1.jpg","./w-snow-day-winter-1.jpg":"assets/mood/imagery/w-snow-day-winter-1.jpg","./w-snow-night-winter-1.jpg":"assets/mood/imagery/w-snow-night-winter-1.jpg","./w-thunderstorm-day-summer-1.jpg":"assets/mood/imagery/w-thunderstorm-day-summer-1.jpg","./w-thunderstorm-day-winter-1.jpg":"assets/mood/imagery/w-thunderstorm-day-winter-1.jpg","./w-thunderstorm-night-summer-1.jpg":"assets/mood/imagery/w-thunderstorm-night-summer-1.jpg","./season-autumn.jpg":"assets/mood/imagery/season-autumn.jpg","./season-spring.jpg":"assets/mood/imagery/season-spring.jpg","./season-summer.jpg":"assets/mood/imagery/season-summer.jpg","./season-winter.jpeg":"assets/mood/imagery/season-winter.jpeg"}],"js/assets.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "moodImagery", {
  enumerable: true,
  get: function () {
    return _moodimagery.moodImagery;
  }
});

var _moodimagery = require("../assets/mood/imagery/moodimagery.js");
},{"../assets/mood/imagery/moodimagery.js":"assets/mood/imagery/moodimagery.js"}],"js/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appConfig = void 0;

var _assets = require("./assets.js");

// import citylist from './../assets/city.list.json';

/**
 * App configuration
 * @type {Object}
 */
var appConfig = {
  // next iteration
  config: {
    baseUrl: window.location.protocol + "//" + window.location.host + window.location.pathname.split('/').slice(0, -1).join('/') + '/',
    cityList: 'assets/city.list.json',
    // 'assets/city.list.json', | citylist from import
    historyInitialSet: [{
      name: 'BOJONEGORO,ID',
      nameUC: 'BOJONEGORO,ID',
      lastQueried: +new Date()
    }, {
      name: 'BAURENO,ID',
      nameUC: 'BAURENO,ID',
      lastQueried: +new Date()
    }, {
      name: 'KEPOHBARU,ID',
      nameUC: 'KEPOHBARU,ID',
      lastQueried: +new Date()
    }, {
      name: 'JOMBANG,ID',
      nameUC: 'JOMBANG,ID',
      lastQueried: +new Date()
    }],
    api: {
      apiUrl: 'https://api.openweathermap.org/data/2.5/',
      apiEndpoint: {
        current: {
          cityname: {
            path: 'weather',
            params: ['q']
          },
          // ?q={city name},{country code}
          latlon: {
            path: 'weather',
            params: ['lat', 'lon']
          } //?lat={lat}&lon={lon}

        },
        forecast5: {
          cityname: {
            path: 'forecast',
            params: ['q']
          },
          // ?q={city name},{country code}
          latlon: {
            path: 'weather',
            params: ['lat', 'lon']
          } //?lat={lat}&lon={lon}

        }
      },
      apiKey: 'abc4376c0c3836d72cde39fae90720fc',
      apiParamName: 'APPID',
      iconUrl: 'https://openweathermap.org/img/w/',
      iconExt: '.png'
    },
    storage: {
      dbName: 'weatherapp-rdnk',
      dbVersion: 1,
      store: [// [0]: upgrade to v.1
      [{
        storeName: 'settings',
        storeOptions: {
          keyPath: 'option'
        },
        fields: ['option', 'value'] // option = {Units|...}; Units={metric|imperial}

      }, {
        storeName: 'cities',
        storeOptions: {
          keyPath: 'id'
        },
        fields: ['id', 'name', 'nameUC'],
        // city name, city name uppercase
        index: [['nameUC']] // indices; when single literal then index name == index key name

      }, {
        storeName: 'favcity',
        storeOptions: {
          keyPath: 'name'
        },
        fields: ['name', 'nameUC'],
        // city name, city name uppercase
        index: [['nameUC']]
      }, {
        storeName: 'cityhistory',
        storeOptions: {
          keyPath: 'name'
        },
        fields: ['name', 'nameUC', 'lastQueried'],
        // city name, city name uppercase, last queried
        index: [['nameUC']]
      }] // [1]: upgrade to v.2

      /* [
        {
          storeName: 'weather',
        },
      ], */
      ] // store

    },
    // storage
    icons: {
      day: {
        brokenClouds: 'wi-day-cloudy',
        clearSky: 'wi-day-sunny',
        fewClouds: 'wi-day-cloudy',
        mist: 'wi-day-fog',
        rain: 'wi-day-rain',
        scatteredClouds: 'wi-day-cloudy-high',
        showerRain: 'wi-day-showers',
        snow: 'wi-day-snow-wind',
        thunderStorm: 'wi-day-thunderstorm',
        alien: 'wi-alien'
      },
      night: {
        brokenClouds: 'wi-night-cloudy',
        clearSky: 'wi-night-clear',
        fewClouds: 'wi-night-cloudy',
        mist: 'wi-night-fog',
        rain: 'wi-night-alt-rain',
        scatteredClouds: 'wi-night-alt-cloudy-high',
        showerRain: 'wi-night-alt-showers',
        snow: 'wi-night-alt-snow-wind',
        thunderStorm: 'wi-night-alt-thunderstorm',
        alien: 'wi-alien'
      }
    },
    mood: {
      seasons: {
        spring: _assets.moodImagery.sSG,
        summer: _assets.moodImagery.sSU,
        autumn: _assets.moodImagery.sAT,
        winter: _assets.moodImagery.sWT
      },
      imagery: {
        brokenClouds: {
          day: {
            autumn: _assets.moodImagery.wBCdA1,
            spring: _assets.moodImagery.wBCdS1,
            // subst
            summer: _assets.moodImagery.wBCdS1,
            winter: _assets.moodImagery.wBCdA1 // subst

          },
          night: {
            autumn: _assets.moodImagery.wBCnS1,
            // subst
            spring: _assets.moodImagery.wBCnS1,
            // subst
            summer: _assets.moodImagery.wBCnS1,
            winter: _assets.moodImagery.wBCnS1 // subst

          }
        },
        clearSky: {
          day: {
            autumn: _assets.moodImagery.wCSdA1,
            spring: _assets.moodImagery.wCSdS1,
            // subst
            summer: _assets.moodImagery.wCSdS1,
            winter: _assets.moodImagery.wCSdW1
          },
          night: {
            autumn: _assets.moodImagery.wCSnA1,
            spring: _assets.moodImagery.wCSnS1,
            // subst
            summer: _assets.moodImagery.wCSnS1,
            winter: _assets.moodImagery.wCSnW1
          }
        },
        mist: {
          day: {
            autumn: _assets.moodImagery.wMdA1,
            spring: _assets.moodImagery.wMdA1,
            // subst
            summer: _assets.moodImagery.wMdA1,
            // subst
            winter: _assets.moodImagery.wMdW1
          },
          night: {
            autumn: _assets.moodImagery.wMnS1,
            // subst
            spring: _assets.moodImagery.wMnS1,
            // subst
            summer: _assets.moodImagery.wMnS1,
            winter: _assets.moodImagery.wMnW1
          }
        },
        rain: {
          day: {
            autumn: _assets.moodImagery.wRdA1,
            spring: _assets.moodImagery.wRdSG1,
            summer: _assets.moodImagery.wRdS1,
            winter: _assets.moodImagery.wRdW1
          },
          night: {
            autumn: _assets.moodImagery.wRnS1,
            // subst
            spring: _assets.moodImagery.wRnS1,
            // subst
            summer: _assets.moodImagery.wRnS1,
            winter: _assets.moodImagery.wRnS1 // subst

          }
        },
        fewClouds: {
          day: {
            autumn: _assets.moodImagery.wSCdS1,
            // subst
            spring: _assets.moodImagery.wSCdS1,
            // subst
            summer: _assets.moodImagery.wSCdS1,
            // subst
            winter: _assets.moodImagery.wSCdW1 // subst

          },
          night: {
            autumn: _assets.moodImagery.wBCnS1,
            // subst
            spring: _assets.moodImagery.wBCnS1,
            // subst
            summer: _assets.moodImagery.wBCnS1,
            // subst
            winter: _assets.moodImagery.wBCnS1 // subst

          }
        },
        scatteredClouds: {
          day: {
            autumn: _assets.moodImagery.wSCdS1,
            // subst
            spring: _assets.moodImagery.wSCdS1,
            // subst
            summer: _assets.moodImagery.wSCdS1,
            winter: _assets.moodImagery.wSCdW1
          },
          night: {
            autumn: _assets.moodImagery.wBCnS1,
            // subst
            spring: _assets.moodImagery.wBCnS1,
            // subst
            summer: _assets.moodImagery.wBCnS1,
            // subst
            winter: _assets.moodImagery.wBCnS1 // subst

          }
        },
        showerRain: {
          day: {
            autumn: _assets.moodImagery.wSRdS1,
            // subst
            spring: _assets.moodImagery.wSRdS1,
            // subst
            summer: _assets.moodImagery.wSRdS1,
            winter: _assets.moodImagery.wRdW1
          },
          night: {
            autumn: _assets.moodImagery.wRnS1,
            // subst
            spring: _assets.moodImagery.wRnS1,
            // subst
            summer: _assets.moodImagery.wRnS1,
            // subst
            winter: _assets.moodImagery.wRnS1 // subst

          }
        },
        snow: {
          day: {
            autumn: _assets.moodImagery.wSdA1,
            spring: _assets.moodImagery.wSdA1,
            // subst
            summer: _assets.moodImagery.wSdA1,
            // subst
            winter: _assets.moodImagery.wSdW1
          },
          night: {
            autumn: _assets.moodImagery.wSnW1,
            // subst
            spring: _assets.moodImagery.wSnW1,
            // subst
            summer: _assets.moodImagery.wSnW1,
            // subst
            winter: _assets.moodImagery.wSnW1
          }
        },
        thunderStorm: {
          day: {
            autumn: _assets.moodImagery.wTSdS1,
            // subst
            spring: _assets.moodImagery.wTSdS1,
            // subst
            summer: _assets.moodImagery.wTSdS1,
            winter: _assets.moodImagery.wTSdW1
          },
          night: {
            autumn: _assets.moodImagery.wTSnS1,
            // subst
            spring: _assets.moodImagery.wTSnS1,
            // subst
            summer: _assets.moodImagery.wTSnS1,
            winter: _assets.moodImagery.wTSnS1 // subst

          }
        }
      } // imagery

    },
    // mood
    guide: {
      playOrder: ['userInput', 'unitSwitch', 'manageFavourite'],
      tipOptions: {
        placement: 'bottom',
        // arrowTransform: 'scale(2.0)',
        animation: 'shift-toward',
        inertia: true,
        duration: 300,
        arrow: true,
        delay: [200, 1000],
        size: 'large',
        theme: 'outstanding',
        createPopperInstanceOnInit: true
      },
      onloadDelay: 1500,
      exposureDuration: 2500
    }
  },
  uiElements: {
    UnitSwitchController: {
      container: 'unit-switch'
    },
    ProgressController: {
      container: 'progress-notification',
      action: 'progress-action',
      count: 'progress-count',
      countUnit: 'progress-count-unit',
      ofConjunction: 'progress-of',
      total: 'progress-total',
      totalUnit: 'progress-total-unit'
    },
    CityInputController: {
      container: 'search-bar',
      gps: 'gps',
      favNo: 'favourite-no',
      favYes: 'favourite-yes',
      favDropDown: 'favourite-dropdown',
      textInput: 'search-input',
      searchAction: 'search-action'
    },
    SearchHistoryController: {
      container: 'history-container',
      textInput: 'search-input'
    },
    WeatherController: {
      container: 'weather-container',
      todayMain: 'weather-today-main',
      todayDebug: 'weather-today-debug',
      todayError: 'weather-today-error',
      todaySpinner: 'weather-today-spinner',
      forecastMain: 'weather-forecast-main',
      forecastDebug: 'weather-forecast-debug',
      forecastError: 'weather-forecast-error',
      forecastSpinner: 'weather-forecast-spinner'
    },
    MoodController: {
      container: 'body'
    },
    GuideController: {
      userInput: 'search-input',
      unitSwitch: 'unit-switch',
      manageFavourite: 'favourite-no'
    },
    FavCityController: {
      addFavCity: 'favourite-no',
      removeFavCity: 'favourite-yes',
      cityFullName: 'wt-cityFull'
    }
  }
};
exports.appConfig = appConfig;
},{"./assets.js":"js/assets.js"}],"js/framework/appcomponent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Class representing application component with default properties.
 * Extended by AppServiceComponent class and AppControllerComponent class.
 */
var AppComponent = /*#__PURE__*/function () {
  /**
   * AppComponent constructor
   * @constructor
   */
  function AppComponent() {
    _classCallCheck(this, AppComponent);

    this.config = {// configTopLevelKey: 'configTopLevelKey' <= global config.config{}
    };
    this.dependencies = {
      // ComponentName: 'ComponentName'
      Services: {},
      Controllers: {},
      UiControllers: {}
    }; // this.debugThisClassName('constructor');
  }
  /* === Public methods === */

  /**
   * Component initial activities after boostrapping (abstract method, to be overloaded)
   * Root activities, e.g. creating database or pick initial data, before other components get activated
   */


  _createClass(AppComponent, [{
    key: "runRoot",
    value: function runRoot() {// this.debugThisClassName('RUN-ROOT');
    }
    /**
     * Component initial activities after boostrapping (abstract method, to be overloaded)
     */

  }, {
    key: "run",
    value: function run() {// this.debugThisClassName('RUN');
    }
    /* === Private methods : SECONDARY === */

    /**
     * Returns component config
     * @returns {Object}
     */

  }, {
    key: "getConfig",
    value: function getConfig() {
      return this.config;
    }
    /**
     * Sets component config
     * @param config
     */

  }, {
    key: "setConfig",
    value: function setConfig(config) {
      this.config = config;
    }
    /**
     * Returns component dependencies container
     * @returns {Object}
     */

  }, {
    key: "getDependencies",
    value: function getDependencies() {
      return this.dependencies;
    }
    /**
     * Sets component dependencies container
     * @param dependencies
     */

  }, {
    key: "setDependencies",
    value: function setDependencies(dependencies) {
      this.dependencies = dependencies;
    }
    /**
     * Logs class name adding a comment
     * @param comment
     */

  }, {
    key: "debugThisClassName",
    value: function debugThisClassName(comment) {
      console.log(this.__proto__.constructor.name + '::' + comment);
    }
  }]);

  return AppComponent;
}();

exports.default = AppComponent;
},{}],"js/framework/appcontrollercomponent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _appcomponent = _interopRequireDefault(require("./appcomponent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Class representing application controller component.
 * Extended by App Controllers and AppUiController class.
 */
var AppControllerComponent = /*#__PURE__*/function (_AppComponent) {
  _inherits(AppControllerComponent, _AppComponent);

  var _super = _createSuper(AppControllerComponent);

  /**
   * AppControllerComponent constructor
   * @constructor
   */
  function AppControllerComponent() {
    _classCallCheck(this, AppControllerComponent);

    return _super.call(this);
  }

  return AppControllerComponent;
}(_appcomponent.default);

exports.default = AppControllerComponent;
},{"./appcomponent.js":"js/framework/appcomponent.js"}],"js/helper.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.traverseObjectAndChange = exports.setCaretPosition = exports.getCaretPosition = exports.sanitizeWhitespaces = exports.objectKeysToHtmlElements = exports.elementIdsToHtmlElements = exports.attachOnClickEvent = exports.isPlainObject = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*  Function to test if an object is a plain object, i.e. is constructed
**  by the built-in Object constructor and inherits directly from Object.prototype
**  or null. Some built-in objects pass the test, e.g. Math which is a plain object
**  and some host or exotic objects may pass also.
**
**  @param {} obj - value to test
**  @returns {Boolean} true if passes tests, false otherwise
**  Source: https://stackoverflow.com/questions/5876332/how-can-i-differentiate-between-an-object-literal-other-javascript-objects
*/
var isPlainObject = function isPlainObject(obj) {
  // Basic check for Type object that's not null
  if (_typeof(obj) === 'object' && obj !== null) {
    // If Object.getPrototypeOf supported, use it
    if (typeof Object.getPrototypeOf === 'function') {
      var proto = Object.getPrototypeOf(obj);
      return proto === Object.prototype || proto === null;
    } // Otherwise, use internal class
    // This should be reliable as if getPrototypeOf not supported, is pre-ES5


    return Object.prototype.toString.call(obj) === '[object Object]';
  } // Not an object


  return false;
};
/**
 * @callback EventCallback
 * @param {event} e - event data
 */

/**
 * Attach mouse-click and touch event handlers to an HTML Element.
 * @param {Element} htmlElement - The HTML Element to attach event handler to
 * @param {EventCallback} eventHandler - The callback that handles the response
 * @param {object} scope - scope to bind the callback to
 */


exports.isPlainObject = isPlainObject;

var attachOnClickEvent = function attachOnClickEvent(htmlElement, eventHandler, scope) {
  htmlElement.onclick = eventHandler.bind(scope);
  htmlElement.ontouchstart = eventHandler.bind(scope);
};
/**
 *
 * @param {object} idSet - A set of keyval pairs <key: HtmlElementId>
 * @param {string[]=} properties - An optional list of properties to include into resulting set
 * @returns {object} - A set of keyval pairs <key: HtmlElement>
 */


exports.attachOnClickEvent = attachOnClickEvent;

var elementIdsToHtmlElements = function elementIdsToHtmlElements(idSet, properties) {
  if (!properties) {
    properties = Object.keys(idSet);
  }

  return properties.reduce(function (accumulator, key) {
    accumulator[key] = document.getElementById(idSet[key]);
    return accumulator;
  }, {});
};
/**
 * Builds associative object where keys refer to HTML Elements.
 * @param {object} srcObject - Keys are HTML elements major part of element id
 * @param {string=} idPrefix - An optional prefix added to element key to get complete element id
 * @param {string[]=} keys - An optional list of properties to include into resulting set
 * @returns {object} - A set of keyval pairs <key: HtmlElement>
 */


exports.elementIdsToHtmlElements = elementIdsToHtmlElements;

var objectKeysToHtmlElements = function objectKeysToHtmlElements(srcObject) {
  var idPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (!keys) {
    keys = Object.keys(srcObject);
  }

  return keys.reduce(function (accumulator, key) {
    var elRef = document.getElementById(idPrefix + key);
    if (elRef) accumulator[key] = elRef;
    return accumulator;
  }, {});
};
/**
 * Removes leading, trailing and double whitespaces
 * @param {string} str - String to sanitize
 * @param {boolean=} [trimTails] - Will trim trailing whitespaces if true
 * @returns {string} - Sanitized string
 */


exports.objectKeysToHtmlElements = objectKeysToHtmlElements;

var sanitizeWhitespaces = function sanitizeWhitespaces(str, trimTails) {
  // DEBUG: console.log('>' + str.length + ':"' + str.replace(/\s/g,'*') + '"');
  str = str.replace(/\s\s+/g, ' ');
  str = str.replace(/^\s/, '');
  if (trimTails) str = str.replace(/\s$/, ''); // DEBUG: console.log('<' + str.length + ':"' + str.replace(/\s/g,'*') + '"');

  return str;
};
/**
 * Detect caret position
 * Source: https://stackoverflow.com/questions/2897155/get-cursor-position-in-characters-within-a-text-input-field
 * @param {Element} htmlElement - Input text HTML element
 * @returns {number} - caret position
 */


exports.sanitizeWhitespaces = sanitizeWhitespaces;

var getCaretPosition = function getCaretPosition(htmlElement) {
  // Initialize
  var iCaretPos = 0; // IE Support

  if (document.selection) {
    // Set focus on the element
    oField.focus(); // To get cursor position, get empty selection range

    var oSel = document.selection.createRange(); // Move selection start to 0 position

    oSel.moveStart('character', -oField.value.length); // The caret position is selection length

    iCaretPos = oSel.text.length;
  } // Firefox support
  else if (htmlElement.selectionStart || htmlElement.selectionStart == '0') iCaretPos = htmlElement.selectionDirection === 'backward' ? htmlElement.selectionStart : htmlElement.selectionEnd; // Return results


  return iCaretPos;
};
/**
 * Sets caret position
 * source: https://stackoverflow.com/questions/512528/set-keyboard-caret-position-in-html-textbox
 * @param {Element} htmlElement - Input text HTML element
 * @param {number} caretPos - Position to place caret at
 */


exports.getCaretPosition = getCaretPosition;

var setCaretPosition = function setCaretPosition(htmlElement, caretPos) {
  if (htmlElement) {
    if (htmlElement.createTextRange) {
      var range = htmlElement.createTextRange();
      range.move('character', caretPos);
      range.select();
    } else {
      if (htmlElement.selectionStart) {
        htmlElement.focus();
        htmlElement.setSelectionRange(caretPos, caretPos);
      } else htmlElement.focus();
    }
  }
};
/**
 * Takes an object, traverses it, applies a callback to each non-plain-object value.
 * Nested plain objects also get traversed.
 * @param {Object} source
 * @param {Function} callback(primitiveValue, key)
 * @returns {Object} amended source
 */


exports.setCaretPosition = setCaretPosition;

var traverseObjectAndChange = function traverseObjectAndChange(source, callback) {
  var dest = {};
  Object.keys(source).forEach(function (key, idx) {
    if (isPlainObject(source[key])) {
      dest[key] = traverseObjectAndChange(source[key], callback);
    } else {
      dest[key] = callback(source[key], key);
    }
  });
  return dest;
};

exports.traverseObjectAndChange = traverseObjectAndChange;
},{}],"js/framework/appuicontrollercomponent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _appcontrollercomponent = _interopRequireDefault(require("./appcontrollercomponent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Class representing application UI controller component.
 * Adds default UI elements collection.
 * Extended by App UI Controllers.
 */
var AppUiControllerComponent = /*#__PURE__*/function (_AppControllerCompone) {
  _inherits(AppUiControllerComponent, _AppControllerCompone);

  var _super = _createSuper(AppUiControllerComponent);

  /**
   * AppUiControllerComponent constructor
   * @constructor
   */
  function AppUiControllerComponent() {
    var _this;

    _classCallCheck(this, AppUiControllerComponent);

    _this = _super.call(this);
    _this.uiElements = {}; // populated by AppController from global config.uiElements.<ComponentName> referring to HTMLElements

    return _this;
  }
  /* === Private methods : SECONDARY === */

  /**
   * Returns references to HTMLElements
   * @returns {object}
   */


  _createClass(AppUiControllerComponent, [{
    key: "getUiElements",
    value: function getUiElements() {
      return this.uiElements;
    }
    /**
     * Sets references to HTMLElements
     * @returns {object}
     */

  }, {
    key: "setUiElements",
    value: function setUiElements(uiElements) {
      this.uiElements = uiElements;
    }
    /**
     * Attaches touch and mouse click handler to an element
     * @param {HTMLElement} htmlElement
     * @param {callback} eventHandler
     */

  }, {
    key: "attachOnClickHandler",
    value: function attachOnClickHandler(htmlElement, eventHandler) {
      htmlElement.addEventListener('click', eventHandler.bind(this));
      htmlElement.addEventListener('touchstart', eventHandler.bind(this));
    }
  }]);

  return AppUiControllerComponent;
}(_appcontrollercomponent.default);

exports.default = AppUiControllerComponent;
},{"./appcontrollercomponent.js":"js/framework/appcontrollercomponent.js"}],"js/framework/appservicecomponent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _appcomponent = _interopRequireDefault(require("./appcomponent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Class representing application service component.
 * Extended by App Services.
 */
var AppServiceComponent = /*#__PURE__*/function (_AppComponent) {
  _inherits(AppServiceComponent, _AppComponent);

  var _super = _createSuper(AppServiceComponent);

  /**
   * AppServiceComponent constructor
   * @constructor
   */
  function AppServiceComponent() {
    _classCallCheck(this, AppServiceComponent);

    return _super.call(this);
  }

  return AppServiceComponent;
}(_appcomponent.default);

exports.default = AppServiceComponent;
},{"./appcomponent.js":"js/framework/appcomponent.js"}],"../node_modules/idb/lib/idb.js":[function(require,module,exports) {
'use strict';

(function() {
  function toArray(arr) {
    return Array.prototype.slice.call(arr);
  }

  function promisifyRequest(request) {
    return new Promise(function(resolve, reject) {
      request.onsuccess = function() {
        resolve(request.result);
      };

      request.onerror = function() {
        reject(request.error);
      };
    });
  }

  function promisifyRequestCall(obj, method, args) {
    var request;
    var p = new Promise(function(resolve, reject) {
      request = obj[method].apply(obj, args);
      promisifyRequest(request).then(resolve, reject);
    });

    p.request = request;
    return p;
  }

  function promisifyCursorRequestCall(obj, method, args) {
    var p = promisifyRequestCall(obj, method, args);
    return p.then(function(value) {
      if (!value) return;
      return new Cursor(value, p.request);
    });
  }

  function proxyProperties(ProxyClass, targetProp, properties) {
    properties.forEach(function(prop) {
      Object.defineProperty(ProxyClass.prototype, prop, {
        get: function() {
          return this[targetProp][prop];
        },
        set: function(val) {
          this[targetProp][prop] = val;
        }
      });
    });
  }

  function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return this[targetProp][prop].apply(this[targetProp], arguments);
      };
    });
  }

  function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyCursorRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function Index(index) {
    this._index = index;
  }

  proxyProperties(Index, '_index', [
    'name',
    'keyPath',
    'multiEntry',
    'unique'
  ]);

  proxyRequestMethods(Index, '_index', IDBIndex, [
    'get',
    'getKey',
    'getAll',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(Index, '_index', IDBIndex, [
    'openCursor',
    'openKeyCursor'
  ]);

  function Cursor(cursor, request) {
    this._cursor = cursor;
    this._request = request;
  }

  proxyProperties(Cursor, '_cursor', [
    'direction',
    'key',
    'primaryKey',
    'value'
  ]);

  proxyRequestMethods(Cursor, '_cursor', IDBCursor, [
    'update',
    'delete'
  ]);

  // proxy 'next' methods
  ['advance', 'continue', 'continuePrimaryKey'].forEach(function(methodName) {
    if (!(methodName in IDBCursor.prototype)) return;
    Cursor.prototype[methodName] = function() {
      var cursor = this;
      var args = arguments;
      return Promise.resolve().then(function() {
        cursor._cursor[methodName].apply(cursor._cursor, args);
        return promisifyRequest(cursor._request).then(function(value) {
          if (!value) return;
          return new Cursor(value, cursor._request);
        });
      });
    };
  });

  function ObjectStore(store) {
    this._store = store;
  }

  ObjectStore.prototype.createIndex = function() {
    return new Index(this._store.createIndex.apply(this._store, arguments));
  };

  ObjectStore.prototype.index = function() {
    return new Index(this._store.index.apply(this._store, arguments));
  };

  proxyProperties(ObjectStore, '_store', [
    'name',
    'keyPath',
    'indexNames',
    'autoIncrement'
  ]);

  proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'put',
    'add',
    'delete',
    'clear',
    'get',
    'getAll',
    'getKey',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'openCursor',
    'openKeyCursor'
  ]);

  proxyMethods(ObjectStore, '_store', IDBObjectStore, [
    'deleteIndex'
  ]);

  function Transaction(idbTransaction) {
    this._tx = idbTransaction;
    this.complete = new Promise(function(resolve, reject) {
      idbTransaction.oncomplete = function() {
        resolve();
      };
      idbTransaction.onerror = function() {
        reject(idbTransaction.error);
      };
      idbTransaction.onabort = function() {
        reject(idbTransaction.error);
      };
    });
  }

  Transaction.prototype.objectStore = function() {
    return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
  };

  proxyProperties(Transaction, '_tx', [
    'objectStoreNames',
    'mode'
  ]);

  proxyMethods(Transaction, '_tx', IDBTransaction, [
    'abort'
  ]);

  function UpgradeDB(db, oldVersion, transaction) {
    this._db = db;
    this.oldVersion = oldVersion;
    this.transaction = new Transaction(transaction);
  }

  UpgradeDB.prototype.createObjectStore = function() {
    return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
  };

  proxyProperties(UpgradeDB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(UpgradeDB, '_db', IDBDatabase, [
    'deleteObjectStore',
    'close'
  ]);

  function DB(db) {
    this._db = db;
  }

  DB.prototype.transaction = function() {
    return new Transaction(this._db.transaction.apply(this._db, arguments));
  };

  proxyProperties(DB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(DB, '_db', IDBDatabase, [
    'close'
  ]);

  // Add cursor iterators
  // TODO: remove this once browsers do the right thing with promises
  ['openCursor', 'openKeyCursor'].forEach(function(funcName) {
    [ObjectStore, Index].forEach(function(Constructor) {
      // Don't create iterateKeyCursor if openKeyCursor doesn't exist.
      if (!(funcName in Constructor.prototype)) return;

      Constructor.prototype[funcName.replace('open', 'iterate')] = function() {
        var args = toArray(arguments);
        var callback = args[args.length - 1];
        var nativeObject = this._store || this._index;
        var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
        request.onsuccess = function() {
          callback(request.result);
        };
      };
    });
  });

  // polyfill getAll
  [Index, ObjectStore].forEach(function(Constructor) {
    if (Constructor.prototype.getAll) return;
    Constructor.prototype.getAll = function(query, count) {
      var instance = this;
      var items = [];

      return new Promise(function(resolve) {
        instance.iterateCursor(query, function(cursor) {
          if (!cursor) {
            resolve(items);
            return;
          }
          items.push(cursor.value);

          if (count !== undefined && items.length == count) {
            resolve(items);
            return;
          }
          cursor.continue();
        });
      });
    };
  });

  var exp = {
    open: function(name, version, upgradeCallback) {
      var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
      var request = p.request;

      if (request) {
        request.onupgradeneeded = function(event) {
          if (upgradeCallback) {
            upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
          }
        };
      }

      return p.then(function(db) {
        return new DB(db);
      });
    },
    delete: function(name) {
      return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
    }
  };

  if (typeof module !== 'undefined') {
    module.exports = exp;
    module.exports.default = module.exports;
  }
  else {
    self.idb = exp;
  }
}());

},{}],"../node_modules/idb/lib/node.js":[function(require,module,exports) {
if (typeof indexedDB != 'undefined') {
  module.exports = require('./idb.js');
}
else {
  module.exports = {
    open: function () {
      return Promise.reject('IDB requires a browser environment');
    },
    delete: function () {
      return Promise.reject('IDB requires a browser environment');
    }
  };
}

},{"./idb.js":"../node_modules/idb/lib/idb.js"}],"js/controller/progresscontroller.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _appuicontrollercomponent = _interopRequireDefault(require("../framework/appuicontrollercomponent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Class representing progress feedback controller. */
var ProgressController = /*#__PURE__*/function (_AppUiControllerCompo) {
  _inherits(ProgressController, _AppUiControllerCompo);

  var _super = _createSuper(ProgressController);

  /**
   * Create progress feedback controller.
   * @constructor
   */
  function ProgressController() {
    var _this;

    _classCallCheck(this, ProgressController);

    _this = _super.call(this);
    _this.config = {};
    _this.dependencies = {};
    _this._count = 0;
    _this._total = 0;
    return _this;
  }
  /* === Public methods === */

  /**
   * Show container with initial message
   * @param {string} action
   * @param {string} unit - measuring unit, e.g. '%', ' pcs', ''
   * @param {number} total - max value; if ==0 then not shown
   */


  _createClass(ProgressController, [{
    key: "show",
    value: function show(action, unit, total) {
      action && (this.uiElements.action.innerText = action + ': ');
      this._count = 0;
      this.uiElements.count.innerText = '0';
      this.uiElements.countUnit.innerText = unit;
      this._total = total;
      total && (this.uiElements.ofConjunction.innerText = ' of ') && (this.uiElements.total.innerText = total) && (this.uiElements.totalUnit.innerText = unit);
      this.uiElements.container.classList.add('display-block');
    }
    /**
     * Hide container
     * @param {number} delay ms
     */

  }, {
    key: "hide",
    value: function hide(delay) {
      var _this2 = this;

      setTimeout(function () {
        _this2.uiElements.container.classList.remove('display-block');
      }, delay);
    }
    /* === Private methods : SECONDARY === */

    /**
     * Set counter
     * @param {number} count - new value for counter; must be in [0..total], otherwise assigned with total
     */

  }, {
    key: "setCount",
    value: function setCount(count) {
      this._count = count < 0 || count > this._total ? this._total : count;
      this.uiElements.count.innerText = this._count;
    }
    /**
     * Increase counter
     * @param {number} increment
     */

  }, {
    key: "addCount",
    value: function addCount(increment) {
      this._count += increment;
      if (this._total && this._count > this._total) this._count = this._total;
      this.uiElements.count.innerText = this._count;
    }
  }]);

  return ProgressController;
}(_appuicontrollercomponent.default);

exports.default = ProgressController;
},{"../framework/appuicontrollercomponent.js":"js/framework/appuicontrollercomponent.js"}],"js/service/storageservice.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var idb = _interopRequireWildcard(require("../../../node_modules/idb/lib/node.js"));

var _appservicecomponent = _interopRequireDefault(require("../framework/appservicecomponent.js"));

var _progresscontroller = _interopRequireDefault(require("../controller/progresscontroller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// causes non-critical error when built

/** Class representing storage service.
 * Uses https://github.com/jakearchibald/idb -- https://www.npmjs.com/package/idb
 */
var StorageService = /*#__PURE__*/function (_AppServiceComponent) {
  _inherits(StorageService, _AppServiceComponent);

  var _super = _createSuper(StorageService);

  /**
   * Create storage service.
   * @constructor
   */
  function StorageService() {
    var _this;

    _classCallCheck(this, StorageService);

    _this = _super.call(this);
    _this.config = {
      storage: 'storage'
    };
    _this.dependencies = {
      UiControllers: {
        ProgressController: 'ProgressController'
      }
    };
    return _this;
  }
  /* === Public methods === */


  _createClass(StorageService, [{
    key: "runRoot",
    value: function runRoot() {
      _get(_getPrototypeOf(StorageService.prototype), "runRoot", this).call(this);

      this._dbPromise = this.dbOpen(this.config.storage.dbVersion);
      this.logSummary();
    }
    /**
     * Insert/update store
     * @param {string} storeName
     * @param {array|object} recordSet - is either an object to store or array of objects to store
     */

  }, {
    key: "put",
    value: function put(storeName, recordSet) {
      var _this2 = this;

      // put single object into an array
      if (!Array.isArray(recordSet)) {
        recordSet = [recordSet];
      }

      var recordSetLength = recordSet.length;
      var showProgress = recordSetLength > 20;
      var increment = recordSetLength <= 100 ? 10 : recordSetLength <= 1000 ? 20 : 100;
      if (showProgress) this.dependencies.UiControllers.ProgressController.show('Adding records to ' + storeName, '', recordSetLength);
      return this._dbPromise.then(function (db) {
        var tx = db.transaction(storeName, 'readwrite');
        var store = tx.objectStore(storeName);
        return Promise.all(recordSet.map(function (item, index) {
          if (!(index % increment)) {
            _this2.dependencies.UiControllers.ProgressController.addCount(increment); // console.log('Adding another ' + increment);

          }

          return store.put(item);
        }) // map
        ).catch(function (e) {
          _this2.dependencies.UiControllers.ProgressController.hide(100);

          tx.abort();
          console.log(e);
        }).then(function () {
          _this2.dependencies.UiControllers.ProgressController.setCount(recordSetLength);

          _this2.dependencies.UiControllers.ProgressController.hide(2500); // console.log('Added ' + recordSet.length + ' items to ' + storeName);

        });
      });
    }
    /**
     * Delete from store
     * @param {string} storeName
     * @param {string} keyValue - is either an object to store or array of objects to store
     */

  }, {
    key: "delete",
    value: function _delete(storeName, keyValue) {
      return this._dbPromise.then(function (db) {
        var tx = db.transaction(storeName, 'readwrite');
        var store = tx.objectStore(storeName);
        return store.delete(keyValue);
      });
    }
    /**
     * Get all records from store or optionally from store index optionally filtering by index key field value
     * @param {string} storeName
     * @param {string} indexName
     * @param {string|number} keyValue
     * @returns {Promise<T>}
     */

  }, {
    key: "getAll",
    value: function getAll(storeName, indexName, keyValue) {
      return this._dbPromise.then(function (db) {
        var tx = db.transaction(storeName, 'readonly');
        var store = tx.objectStore(storeName);
        var queryTarget = store;

        if (indexName) {
          queryTarget = store.index(indexName);
        }

        return queryTarget.getAll(keyValue);
      });
    }
    /**
     * Get all records from store or optionally from store index optionally filtering by index key field value
     * @param {string} storeName
     * @param {string} indexName
     * @param {string|number} keyValue
     * @returns {Promise<T>}
     */

  }, {
    key: "get",
    value: function get(storeName, indexName, keyValue) {
      return this._dbPromise.then(function (db) {
        var tx = db.transaction(storeName, 'readonly');
        var store = tx.objectStore(storeName);
        var queryTarget = store;

        if (indexName) {
          queryTarget = store.index(indexName);
        }

        return queryTarget.get(keyValue);
      });
    }
    /* === Private methods : SECONDARY === */

    /**
     * Create IDB open promise that creates required stores as per dbVersion
     * @param {number} dbVersion - current db version
     * @returns {Promise<Cache>|IDBOpenDBRequest}
     */

  }, {
    key: "dbOpen",
    value: function dbOpen(dbVersion) {
      var _this3 = this;

      return idb.open(this.config.storage.dbName, dbVersion, function (upgradeDb) {
        var storeVersionedList = _this3.config.storage.store; // store list

        for (var i = 0; i <= upgradeDb.oldVersion; i++) {
          storeVersionedList[i].forEach(function (storeEntry) {
            var store = upgradeDb.createObjectStore(storeEntry.storeName, storeEntry.storeOptions);

            if (!!storeEntry.index) {
              // any indices? .index = [ indexSpec,... ]; indexSpec = [indexName, indexKeyName_optional]
              storeEntry.index.forEach(function (index) {
                store.createIndex(index[0], index[index.length - 1]);
              });
            }
          });
        }
      });
    }
    /**
     * Returns number of objects in a store
     * @param {string} storeName
     * @returns {Promise<T>}
     */

  }, {
    key: "storeCount",
    value: function storeCount(storeName) {
      return this._dbPromise.then(function (db) {
        var tx = db.transaction(storeName, 'readonly');
        var store = tx.objectStore(storeName);
        return store.count();
      }).catch(function (e) {
        return e;
      });
    }
    /**
     * Logs database summary
     */

  }, {
    key: "logSummary",
    value: function logSummary() {
      var _this4 = this;

      var storeList = [].concat.apply([], this.config.storage.store).map(function (e) {
        return e.storeName;
      });
      storeList.forEach(function (storeName) {
        _this4.storeCount(storeName).then(function (v) {
          console.log(storeName + '.length == ' + v);
        }).catch(function (e) {
          console.log(e);
        });
      });
    }
  }]);

  return StorageService;
}(_appservicecomponent.default);

exports.default = StorageService;
},{"../../../node_modules/idb/lib/node.js":"../node_modules/idb/lib/node.js","../framework/appservicecomponent.js":"js/framework/appservicecomponent.js","../controller/progresscontroller.js":"js/controller/progresscontroller.js"}],"js/service/settingsservice.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _appservicecomponent = _interopRequireDefault(require("../framework/appservicecomponent.js"));

var _storageservice = _interopRequireDefault(require("./storageservice.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Class representing user settings service. */
var SettingsService = /*#__PURE__*/function (_AppServiceComponent) {
  _inherits(SettingsService, _AppServiceComponent);

  var _super = _createSuper(SettingsService);

  /**
   * Create settings service.
   * @constructor
   */
  function SettingsService() {
    var _this;

    _classCallCheck(this, SettingsService);

    _this = _super.call(this);
    _this.dependencies = {
      Services: {
        StorageService: 'StorageService'
      }
    };
    _this._storeName = 'settings';
    _this._settings = {
      Units: 'imperial'
    };
    _this._units = {
      windSpeed: {
        metric: 'm/s',
        imperial: 'mph'
      }
    };
    return _this;
  }
  /* === Public methods === */

  /**
   * Component initial activities
   */


  _createClass(SettingsService, [{
    key: "run",
    value: function run() {
      _get(_getPrototypeOf(SettingsService.prototype), "run", this).call(this); // this.debugThisClassName('run');


      this.settingsPromise = this.loadSettings();
    }
  }, {
    key: "units",
    get: function get() {
      return this._settings.Units;
    }
  }, {
    key: "setImperial",
    value: function setImperial() {
      this._settings.Units = 'imperial';
    }
  }, {
    key: "setMetric",
    value: function setMetric() {
      this._settings.Units = 'metric';
    }
  }, {
    key: "windSpeedUnits",
    get: function get() {
      return this._units.windSpeed[this._settings.Units];
    }
    /**
     * Switches between units
     */

  }, {
    key: "switchUnits",
    value: function switchUnits() {
      this._settings.Units = this._settings.Units === 'metric' ? 'imperial' : 'metric';
      this.updateStorage();
    }
    /* === Private methods : SECONDARY === */

    /**
     * Update settings in storage
     */

  }, {
    key: "updateStorage",
    value: function updateStorage() {
      var data = {
        option: 'Units',
        value: this._settings.Units
      };
      this.dependencies.Services.StorageService.put(this._storeName, data).then(function () {
        console.log('Settings store updated');
      });
    }
    /**
     * Load settings from store
     */

  }, {
    key: "loadSettings",
    value: function loadSettings() {
      var _this2 = this;

      this.dependencies.Services.StorageService.storeCount(this._storeName).then(function (count) {
        if (!count) {
          _this2.updateStorage();
        }
      });
      return this.dependencies.Services.StorageService.getAll(this._storeName).then(function (items) {
        items.forEach(function (e) {
          return _this2._settings[e.option] = e.value;
        });
        return new Promise(function (resolve, reject) {
          return resolve(_this2._settings);
        });
      });
    }
  }]);

  return SettingsService;
}(_appservicecomponent.default);

exports.default = SettingsService;
},{"../framework/appservicecomponent.js":"js/framework/appservicecomponent.js","./storageservice.js":"js/service/storageservice.js"}],"js/controller/unitswitchcontroller.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _appuicontrollercomponent = _interopRequireDefault(require("./../framework/appuicontrollercomponent.js"));

var _settingsservice = _interopRequireDefault(require("./../service/settingsservice.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Class representing unit switch controller. */
var UnitSwitchController = /*#__PURE__*/function (_AppUiControllerCompo) {
  _inherits(UnitSwitchController, _AppUiControllerCompo);

  var _super = _createSuper(UnitSwitchController);

  /**
   * Create unit switch controller.
   * @constructor
   */
  function UnitSwitchController() {
    var _this;

    _classCallCheck(this, UnitSwitchController);

    _this = _super.call(this);
    _this.config = {};
    _this.dependencies = {
      Services: {
        SettingsService: 'SettingsService'
      },
      UiControllers: {
        CityInputController: 'CityInputController'
      }
    };
    return _this;
  }
  /* === Public methods === */

  /**
   * Component initial activities
   */


  _createClass(UnitSwitchController, [{
    key: "run",
    value: function run() {
      _get(_getPrototypeOf(UnitSwitchController.prototype), "run", this).call(this); // this.debugThisClassName('run');


      this.attachOnClickHandler(this.uiElements.container, this.onClick);
      this.render();
    }
    /* === Private methods : MAIN JOBS === */

    /**
     * click handler
     * @param {object} e - click event
     */

  }, {
    key: "onClick",
    value: function onClick(e) {
      this.dependencies.Services.SettingsService.switchUnits();
      var unitElementsList = this.uiElements.container.children;

      var _iterator = _createForOfIteratorHelper(unitElementsList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var el = _step.value;
          el.classList.toggle('unit-active');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.dependencies.UiControllers.CityInputController.actionSearch();
      this.dependencies.UiControllers.CityInputController.focus();
    }
    /**
     * Render UI
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.dependencies.Services.SettingsService.settingsPromise.then(function (value) {
        var unit = _this2.dependencies.Services.SettingsService.units;
        var unitElementsList = _this2.uiElements.container.children;
        var unit0 = unitElementsList[0],
            unit1 = unitElementsList[1];

        if (unit === 'imperial') {
          var _ref = [unit0, unit1];
          unit1 = _ref[0];
          unit0 = _ref[1];
        }

        unit0.classList.add('unit-active');
        unit1.classList.remove('unit-active');
      });
    }
    /* === Private methods : SECONDARY === */

  }]);

  return UnitSwitchController;
}(_appuicontrollercomponent.default);

exports.default = UnitSwitchController;
},{"./../framework/appuicontrollercomponent.js":"js/framework/appuicontrollercomponent.js","./../service/settingsservice.js":"js/service/settingsservice.js"}],"js/service/cityhistoryservice.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _appservicecomponent = _interopRequireDefault(require("../framework/appservicecomponent.js"));

var _storageservice = _interopRequireDefault(require("./storageservice.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Class representing city browse history service. */
var CityHistoryService = /*#__PURE__*/function (_AppServiceComponent) {
  _inherits(CityHistoryService, _AppServiceComponent);

  var _super = _createSuper(CityHistoryService);

  /**
   * Create city browse history service.
   * @constructor
   */
  function CityHistoryService() {
    var _this;

    _classCallCheck(this, CityHistoryService);

    _this = _super.call(this);
    _this.config = {
      historyInitialSet: 'historyInitialSet'
    };
    _this.dependencies = {
      Services: {
        StorageService: 'StorageService'
      }
    };
    _this._storeName = 'cityhistory';
    return _this;
  }
  /* === Public methods === */

  /**
   * Run, Forrest, run!
   */


  _createClass(CityHistoryService, [{
    key: "run",
    value: function run() {
      _get(_getPrototypeOf(CityHistoryService.prototype), "run", this).call(this); // this.debugThisClassName('run');


      this.updateStorage();
    }
    /**
     * Add search item to the storage
     * @param {Object} item {name:cityname}
     */

  }, {
    key: "addEntry",
    value: function addEntry(item) {
      // update item content
      item.lastQueried = +new Date();
      item.nameUC = item.name.toUpperCase(); // store item

      this.dependencies.Services.StorageService.put(this._storeName, item);
      /*.then(() => {
      console.log('Search item added. {' + item.name + ', ' + item.lastQueried + '}');
      }); */
    }
    /**
     * Get {limit} last history items
     * @param {number} limit=20 - Search limit
     * @returns {Promise} Ordered list of citynames
     */

  }, {
    key: "getItems",
    value: function getItems() {
      var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
      return this.dependencies.Services.StorageService.getAll(this._storeName).then(function (items) {
        items.sort(function (a, b) {
          return b.lastQueried - a.lastQueried;
        });
        items = items.slice(0, limit).map(function (item) {
          return item.name;
        });
        items.sort();
        return items;
      });
    }
    /* === Private methods : SECONDARY === */

    /**
     * Update storage if required
     */

  }, {
    key: "updateStorage",
    value: function updateStorage() {
      var _this2 = this;

      this.dependencies.Services.StorageService.storeCount(this._storeName).then(function (count) {
        if (!count) {
          _this2.dependencies.Services.StorageService.put(_this2._storeName, _this2.config.historyInitialSet);
          /*.then(()=>{
          console.log('History initialized.');
          }); */

        } // console.log('CityListService.updateStorage(cities).count==' + count);

      });
    }
  }]);

  return CityHistoryService;
}(_appservicecomponent.default);

exports.default = CityHistoryService;
},{"../framework/appservicecomponent.js":"js/framework/appservicecomponent.js","./storageservice.js":"js/service/storageservice.js"}],"js/service/favcityservice.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _appservicecomponent = _interopRequireDefault(require("../framework/appservicecomponent.js"));

var _storageservice = _interopRequireDefault(require("./storageservice.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Class representing favourite cities service. */
var FavCityService = /*#__PURE__*/function (_AppServiceComponent) {
  _inherits(FavCityService, _AppServiceComponent);

  var _super = _createSuper(FavCityService);

  /**
   * Create favourite cities service.
   * @constructor
   */
  function FavCityService() {
    var _this;

    _classCallCheck(this, FavCityService);

    _this = _super.call(this);
    _this.dependencies = {
      Services: {
        StorageService: 'StorageService'
      }
    };
    _this._storeName = 'favcity';
    return _this;
  }
  /* === Public methods === */

  /**
   * Component initial activities
   */


  _createClass(FavCityService, [{
    key: "run",
    value: function run() {
      _get(_getPrototypeOf(FavCityService.prototype), "run", this).call(this);
    }
    /* === Private methods : SECONDARY === */

    /**
     * Add favourite city item to the storage
     * @param {Object} item {name:cityname}
     */

  }, {
    key: "addEntry",
    value: function addEntry(item) {
      // update item content
      item.nameUC = item.name.toUpperCase(); // store item

      return this.dependencies.Services.StorageService.put(this._storeName, item);
    }
    /**
     * Remove favourite city item from the storage
     * @param {string} cityNameFull
     */

  }, {
    key: "deleteEntry",
    value: function deleteEntry(cityNameFull) {
      return this.dependencies.Services.StorageService.delete(this._storeName, cityNameFull);
    }
    /**
     * Get {limit} favourite cities items
     * @param {number} limit=20 - Search limit
     * @returns {Promise} Ordered list of citynames
     */

  }, {
    key: "getItems",
    value: function getItems() {
      var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
      return this.dependencies.Services.StorageService.getAll(this._storeName).then(function (items) {
        items.sort(function (a, b) {
          return b.nameUC > a.nameUC;
        });
        items = items.slice(0, limit).map(function (item) {
          return item.name;
        });
        items.sort();
        return items;
      });
    }
    /**
     * Get (find) favourite cities items
     * @param {string} keyValue - Search value
     * @returns {Promise} result if found
     */

  }, {
    key: "getItem",
    value: function getItem(keyValue) {
      return this.dependencies.Services.StorageService.get(this._storeName, '', keyValue);
    }
  }]);

  return FavCityService;
}(_appservicecomponent.default);

exports.default = FavCityService;
},{"../framework/appservicecomponent.js":"js/framework/appservicecomponent.js","./storageservice.js":"js/service/storageservice.js"}],"js/controller/searchhistorycontroller.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _appuicontrollercomponent = _interopRequireDefault(require("../framework/appuicontrollercomponent.js"));

var _cityhistoryservice = _interopRequireDefault(require("../service/cityhistoryservice.js"));

var _cityinputcontroller = _interopRequireDefault(require("./cityinputcontroller.js"));

var _favcityservice = _interopRequireDefault(require("../service/favcityservice.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Class representing search history service. */
var SearchHistoryController = /*#__PURE__*/function (_AppUiControllerCompo) {
  _inherits(SearchHistoryController, _AppUiControllerCompo);

  var _super = _createSuper(SearchHistoryController);

  /**
   * Create city browse history controller.
   * @constructor
   */
  function SearchHistoryController() {
    var _this;

    _classCallCheck(this, SearchHistoryController);

    _this = _super.call(this);
    _this.config = {};
    _this.dependencies = {
      Services: {
        CityHistoryService: 'CityHistoryService',
        FavCityService: 'FavCityService'
      },
      UiControllers: {
        CityInputController: 'CityInputController'
      }
    };
    _this.uiElements.firstListItem = null;
    _this._isActive = false;
    return _this;
  }
  /* === Public methods === */

  /**
   * Component initial activities
   */


  _createClass(SearchHistoryController, [{
    key: "run",
    value: function run() {
      _get(_getPrototypeOf(SearchHistoryController.prototype), "run", this).call(this); // this.debugThisClassName('run');


      this.attachOnClickHandler(this.uiElements.container, this.onClick);
    }
    /**
     * Shows search history list
     */

  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      return Promise.all([this.getFavourites(), this.getHistory()]).then(function (lists) {
        _this2.uiElements.container.innerHTML = '';
        var icons = ['star', 'history']; // populate joint list with unique values

        var superList = [];
        lists.forEach(function (list, listIndex) {
          list.forEach(function (entry) {
            var any = superList.find(function (el) {
              return el.value === entry;
            });
            if (!any) superList.push({
              value: entry,
              icon: icons[listIndex]
            });
          });
        }); // build HTML elements

        superList.forEach(function (item, index) {
          _this2.uiElements.container.appendChild(_this2.renderEntry(index, item.value, item.icon));
        });

        _this2.uiElements.container.classList.add('city-container-visible');

        _this2.uiElements.firstListItem = document.getElementById('city-list-element-0');
        return true;
      });
    }
    /**
     * Hides search history list
     */

  }, {
    key: "hide",
    value: function hide() {
      this._isActive = false;
      this.uiElements.container.classList.remove('city-container-visible');
    }
    /**
     * Focuses on first list element if any
     */

  }, {
    key: "focus",
    value: function focus() {
      this.debugThisClassName('focus'); // console.log(this.uiElements.firstListItem);

      this.uiElements.firstListItem.focus();
    }
    /* === Private methods : MAIN JOBS === */

    /**
     * Handles item click
     * @param {Event} e
     */

  }, {
    key: "onClick",
    value: function onClick(e) {
      var target = e.target; // this.debugThisClassName('onClick');
      // console.log(e.target);
      // console.log(e);

      var cityName = e.clientX && e.clientY ? e.target.getAttribute('data-value') : e.target.value; // console.log('Clicked on ' + cityName);
      // console.log(e);
      // Hide list

      this._isActive = false;

      if (e.clientX && e.clientY) {
        e.preventDefault();
        this.uiElements.container.classList.remove('city-container-visible');
        this.dependencies.UiControllers.CityInputController.setValue(cityName);
      }
    }
  }, {
    key: "renderEntry",
    value: function renderEntry(index, value) {
      var _this3 = this;

      var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var mainRadioInput = document.createElement('input');
      mainRadioInput.id = 'city-list-element-' + index;
      mainRadioInput.setAttribute('type', 'radio');
      mainRadioInput.setAttribute('name', 'city-list');
      mainRadioInput.setAttribute('value', value);
      mainRadioInput.classList.add('city-list-radio');
      if (!index) mainRadioInput.setAttribute('checked', '');
      mainRadioInput.addEventListener('keydown', function (e) {
        switch (e.keyCode) {
          case 13:
            e.preventDefault();

            _this3.uiElements.container.classList.remove('city-container-visible');

            _this3.dependencies.UiControllers.CityInputController.setValue(e.target.value);

            break;

          case 27:
            _this3.hide();

            _this3.dependencies.UiControllers.CityInputController.focus();

            break;
        }
      });
      var mainContentIcon = null;

      if (icon) {
        mainContentIcon = document.createElement('i');
        mainContentIcon.classList.add('material-icons');
        var mainContentIconAttr = document.createAttribute('data-value');
        mainContentIconAttr.value = value;
        mainContentIcon.setAttributeNode(mainContentIconAttr);
        mainContentIcon.innerHTML = icon;
      }

      var mainContentText = document.createTextNode(value);
      var mainContent = document.createElement('div');
      mainContent.classList.add('city-list-element');
      var mainContentAttr = document.createAttribute('data-value');
      mainContentAttr.value = value;
      mainContent.setAttributeNode(mainContentAttr);
      mainContent.setAttribute('data-value', value);
      mainContentIcon && mainContent.appendChild(mainContentIcon);
      mainContent.appendChild(mainContentText);
      mainContent.addEventListener('hover', function (e) {
        console.log('HOVER on');
        console.log(e);
        console.log(e.target);
        /* console.log('hover');
        console.log(mainRadioInput);
        mainRadioInput.focus(); */
      });
      var label = document.createElement('label');
      label.setAttribute('for', 'city-list-element-' + index);
      label.appendChild(mainRadioInput);
      label.appendChild(mainContent);
      var container = document.createElement('div');
      container.appendChild(label); // this.debugThisClassName('renderEntry');
      // console.log(container);

      return container;
    }
  }, {
    key: "getFavourites",
    value: function getFavourites() {
      return this.dependencies.Services.FavCityService.getItems();
    }
  }, {
    key: "getHistory",
    value: function getHistory() {
      return this.dependencies.Services.CityHistoryService.getItems();
    }
  }]);

  return SearchHistoryController;
}(_appuicontrollercomponent.default);

exports.default = SearchHistoryController;
},{"../framework/appuicontrollercomponent.js":"js/framework/appuicontrollercomponent.js","../service/cityhistoryservice.js":"js/service/cityhistoryservice.js","./cityinputcontroller.js":"js/controller/cityinputcontroller.js","../service/favcityservice.js":"js/service/favcityservice.js"}],"js/controller/cityinputcontroller.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var helper = _interopRequireWildcard(require("./../helper.js"));

var _appuicontrollercomponent = _interopRequireDefault(require("../framework/appuicontrollercomponent.js"));

var _searchhistorycontroller = _interopRequireDefault(require("./searchhistorycontroller.js"));

var _urlcontroller = _interopRequireDefault(require("./urlcontroller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Class representing city input controller. */
var CityInputController = /*#__PURE__*/function (_AppUiControllerCompo) {
  _inherits(CityInputController, _AppUiControllerCompo);

  var _super = _createSuper(CityInputController);

  /**
   * Create city input controller.
   * @constructor
   */
  function CityInputController() {
    var _this;

    _classCallCheck(this, CityInputController);

    _this = _super.call(this);
    _this.config = {};
    _this.dependencies = {
      Services: {
        CityHistoryService: 'CityHistoryService',
        SettingsService: 'SettingsService',
        WeatherService: 'WeatherService'
      },
      UiControllers: {
        WeatherController: 'WeatherController',
        SearchHistoryController: 'SearchHistoryController',
        UrlController: 'UrlController'
      }
    }; // class settings

    _this._settings = {
      minChar: 3
    };
    return _this;
  }
  /* === Public methods === */

  /**
   * Component initial activities
   */


  _createClass(CityInputController, [{
    key: "run",
    value: function run() {
      _get(_getPrototypeOf(CityInputController.prototype), "run", this).call(this); // this.debugThisClassName('run');


      this.attachClickHandlers();
    }
    /* === Private methods : MAIN JOBS === */

    /**
     * Attach click handlers to HTML elements
     */

  }, {
    key: "attachClickHandlers",
    value: function attachClickHandlers() {
      this.attachOnClickHandler(this.uiElements.searchAction, this.actionSearch);
      this.uiElements.textInput.addEventListener('input', this.onUserCharInput.bind(this));
      this.uiElements.textInput.addEventListener('keydown', this.onUserSpecialKey.bind(this));
      this.uiElements.textInput.addEventListener('focus', this.onUserInputFocus.bind(this));
      this.uiElements.textInput.addEventListener('blur', this.onUserInputBlur.bind(this));
      this.attachOnClickHandler(this.uiElements.textInput, this.onUserInputClick);
    }
    /**
     * Search button click handler
     * @param {object} event - click event
     */

  }, {
    key: "actionSearch",
    value: function actionSearch(event) {
      var _this2 = this;

      if (_typeof(event) === 'object') {
        event.preventDefault();
      } // event.preventDefault();


      var apiQueryClass = ['current', 'forecast5'];
      if (this.uiElements.textInput.value.length < this._settings.minChar) return; // predict user input content type if [\d.,\w] only then geo coords

      var userInput = this.uiElements.textInput.value;
      var userInputType = /^[\-\d\s,.]+$/.test(userInput) ? 'latlon' : 'cityname'; // console.log('Search by ' + userInputType);

      var queryData = {};

      switch (userInputType) {
        case 'cityname':
          queryData = {
            q: userInput // type: 'like',

          };
          break;

        case 'latlon':
          var coordComponents = userInput.split(/[\s,]/);
          queryData = {
            lon: coordComponents[0],
            lat: coordComponents[coordComponents.length - 1]
          };
          break;
      } // add units explicitly


      queryData.units = this.dependencies.Services.SettingsService.units; // render forecast

      var cityNameUpdate = this.renderForecasts(this.dependencies.Services.WeatherService.apiRequest(apiQueryClass[0], userInputType, queryData), this.dependencies.Services.WeatherService.apiRequest(apiQueryClass[1], userInputType, queryData), userInputType === 'cityname' ? true : false);
      cityNameUpdate.then(function (value) {
        if (value) {
          // update user input field
          _this2.uiElements.textInput.value = value; // update search history

          _this2.dependencies.Services.CityHistoryService.addEntry({
            name: value
          }); // update url


          if (event !== 'no-url-update') _this2.dependencies.UiControllers.UrlController.updateUrl(encodeURIComponent(value), 'actionSearch'); // manage favourites
        }
      });
    }
    /* === Private methods : SECONDARY === */

    /**
     * Focus user input
     */

  }, {
    key: "focus",
    value: function focus() {
      this.uiElements.textInput.focus();
      /* if (!this.uiElements.textInput.value.length) {
        this.dependencies.UiControllers.SearchHistoryController.show();
      } */
    }
    /**
     * Select all text
     */

  }, {
    key: "onUserInputClick",
    value: function onUserInputClick() {
      this.uiElements.textInput.select();
    }
    /**
     * Set user input value, position caret, invoke search|history
     * @param {string} value
     * @param {number|null|-1} caretPosition; -1 => value.length
     * @param {boolean} doSearch
     */

  }, {
    key: "setValue",
    value: function setValue(value) {
      var caretPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var doSearch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      // this.debugThisClassName('setValue');
      // console.log('cityInput: "' + value + '"(' + value.length + '), caret:' + caretPosition + '; doSearch:' + doSearch);
      if (value.length) {
        this.uiElements.textInput.value = value;

        if (value.length >= this._settings.minChar) {
          this.uiElements.searchAction.disabled = false;

          if (doSearch) {
            this.uiElements.textInput.blur();
            this.uiElements.searchAction.click();
          } else if (caretPosition !== null) {
            if (caretPosition === -1) caretPosition = value.length;
            helper.setCaretPosition(this.uiElements.textInput, caretPosition);
          }
        } else {
          this.uiElements.searchAction.disabled = true;
        }
      } else {
        this.uiElements.textInput.value = '';
        this.uiElements.searchAction.disabled = true;
        this.dependencies.UiControllers.SearchHistoryController.show();
      }
    }
    /**
     * Validates user input, activates and deactivates search button
     * @param {object} e - input event
     */

  }, {
    key: "onUserCharInput",
    value: function onUserCharInput(e) {
      var target = this.uiElements.textInput; // remove letters if input value starts with [\-.\d] as an indication of geocoords input

      if (target.value.length > 0 && /^[\-\d.,]/.test(target.value)) {
        target.value = target.value.replace(/[^\-\d.,\s]/g, '');
      }

      target.value = helper.sanitizeWhitespaces(target.value);
      this.uiElements.searchAction.disabled = target.value.length < this._settings.minChar ? true : false;

      if (target.value.length === 0) {
        this.dependencies.UiControllers.SearchHistoryController.show();
      } else {
        this.dependencies.UiControllers.SearchHistoryController.hide();
      }
    }
    /**
     * Processes non-alphanumeric key presses
     * @param {Event} e - keydown event
     */

  }, {
    key: "onUserSpecialKey",
    value: function onUserSpecialKey(e) {
      var _this3 = this;

      switch (e.keyCode) {
        case 13:
          this.uiElements.textInput.blur();
          this.uiElements.searchAction.click();
          break;

        case 27:
          this.dependencies.UiControllers.SearchHistoryController.hide();
          break;

        case 40:
          // this.debugThisClassName('onUserSpecialKey');
          this.dependencies.UiControllers.SearchHistoryController.show().then(function () {
            return _this3.dependencies.UiControllers.SearchHistoryController.focus();
          });
          break;
      }
    }
    /**
     * Sanitize user input and hide lists on blur
     * @param {Event} e - blur event
     */

  }, {
    key: "onUserInputBlur",
    value: function onUserInputBlur(e) {
      var target = this.uiElements.textInput;
      target.value = helper.sanitizeWhitespaces(target.value, true); // console.log('Blurring out');

      /* setTimeout(this.dependencies.UiControllers.SearchHistoryController
        .hide.bind(this.dependencies.UiControllers.SearchHistoryController), 200); */
    }
    /**
     * Called when user focuses on input field and/or input field is empty
     * @param {Event} e
     */

  }, {
    key: "onUserInputFocus",
    value: function onUserInputFocus(e) {
      // console.log(e);
      if (e.target.value.length === 0) this.dependencies.UiControllers.SearchHistoryController.show();
    }
    /**
     * Renders forecasts to UI via WeatherController
     * @param {Promise} current json
     * @param {Promise} forecast json
     * @param {boolean} updateCityName - whether city name update expected
     * returns {Promise|null} - updated city name if required
     */

  }, {
    key: "renderForecasts",
    value: function renderForecasts(current, forecast, updateCityName) {
      this.dependencies.UiControllers.WeatherController.renderForecast(forecast);
      var result = this.dependencies.UiControllers.WeatherController.renderToday(current, updateCityName); // console.log(result);

      return result;
    }
  }]);

  return CityInputController;
}(_appuicontrollercomponent.default);

exports.default = CityInputController;
},{"./../helper.js":"js/helper.js","../framework/appuicontrollercomponent.js":"js/framework/appuicontrollercomponent.js","./searchhistorycontroller.js":"js/controller/searchhistorycontroller.js","./urlcontroller.js":"js/controller/urlcontroller.js"}],"js/controller/urlcontroller.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _appcontrollercomponent = _interopRequireDefault(require("./../framework/appcontrollercomponent.js"));

var _cityinputcontroller = _interopRequireDefault(require("./cityinputcontroller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Class representing url controller. */
var UrlController = /*#__PURE__*/function (_AppControllerCompone) {
  _inherits(UrlController, _AppControllerCompone);

  var _super = _createSuper(UrlController);

  /**
   * Create url controller.
   * @constructor
   */
  function UrlController() {
    var _this;

    _classCallCheck(this, UrlController);

    _this = _super.call(this);
    _this.config = {
      baseUrl: 'baseUrl'
    };
    _this.dependencies = {
      CityInputController: 'CityInputController'
    };
    return _this;
  }
  /* === Public methods === */

  /**
   * Component initial activities
   */


  _createClass(UrlController, [{
    key: "run",
    value: function run() {
      _get(_getPrototypeOf(UrlController.prototype), "run", this).call(this); // this.debugThisClassName('run');


      var cityName = this.getCityName();
      window.addEventListener('popstate', this.onHistoryNavigation.bind(this), true);

      if (this.dependencies.CityInputController && cityName) {
        this.dependencies.CityInputController.setValue(cityName, null, false);
        this.dependencies.CityInputController.actionSearch();
      }
    }
    /**
     * Updates URL
     * @param {string} cityName
     */

  }, {
    key: "updateUrl",
    value: function updateUrl(cityName, caller) {
      this.debugThisClassName('updateUrl(' + cityName + ') from ' + caller);
      var targetUrl = this.config.baseUrl + '?q=' + cityName;
      console.log(window.location + ' -- ' + targetUrl);
      if (window.location !== targetUrl) history.pushState({}, document.title + ': ' + cityName, targetUrl);
    }
    /* === Private methods : SECONDARY === */

  }, {
    key: "onHistoryNavigation",
    value: function onHistoryNavigation(e) {
      // if (e.state) {
      var cityName = this.getCityName();
      this.debugThisClassName('onHistoryNavigation');
      console.log(e.state);

      if (this.dependencies.CityInputController && cityName) {
        this.dependencies.CityInputController.setValue(cityName, null, false);
        this.dependencies.CityInputController.actionSearch('no-url-update');
      } // }

    }
    /**
     * Extract city name from url
     */

  }, {
    key: "getCityName",
    value: function getCityName() {
      var url = new URL(window.location.href);
      var cityName = url.searchParams.get('q');
      console.log('Q=' + cityName);
      return cityName;
    }
  }]);

  return UrlController;
}(_appcontrollercomponent.default);

exports.default = UrlController;
},{"./../framework/appcontrollercomponent.js":"js/framework/appcontrollercomponent.js","./cityinputcontroller.js":"js/controller/cityinputcontroller.js"}],"js/service/weatherservice.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _appservicecomponent = _interopRequireDefault(require("../framework/appservicecomponent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Class representing weather service. */
var WeatherService = /*#__PURE__*/function (_AppServiceComponent) {
  _inherits(WeatherService, _AppServiceComponent);

  var _super = _createSuper(WeatherService);

  /**
   * Create weather service.
   * @constructor
   */
  function WeatherService() {
    var _this;

    _classCallCheck(this, WeatherService);

    _this = _super.call(this);
    _this.config = {
      api: 'api'
    };
    return _this;
  }
  /* === Public methods === */

  /**
   * Queries external api endpoint
   * @param {string} queryClass (current|forecast)
   * @param {string} endPoint {cityname|latlon)
   * @param {object} queryData - query parameters
   * @returns {Promise<Response>}
   */


  _createClass(WeatherService, [{
    key: "apiRequest",
    value: function apiRequest(queryClass, endPoint, queryData) {
      var _this2 = this;

      var query = this.config.api.apiUrl + this.config.api.apiEndpoint[queryClass][endPoint].path + '?'; // add query data

      var paramSet = Object.keys(queryData).map(function (param) {
        return param + '=' + queryData[param];
      });
      query += paramSet.join('&'); // add api key

      query += '&' + this.config.api.apiParamName + '=' + this.config.api.apiKey;
      /* this.debugThisClassName('apiRequest');
      console.log(query);
      console.log(queryData); */

      return fetch(query, {
        method: 'get'
      }).then(function (response) {
        if (response.ok) return response.json();
        throw response.status;
      }).then(function (data) {
        // verbalize icon
        // this.debugThisClassName('apiRequest ' + queryClass);
        switch (queryClass) {
          case 'current':
            data.weather[0].verbose = _this2.decomposeIconId(data.weather[0].icon);
            break;

          case 'forecast5':
            data.list.forEach(function (entry, idx) {
              data.list[idx].weather[0].verbose = _this2.decomposeIconId(data.list[idx].weather[0].icon);
            });
            break;
        } // console.log(data);


        return data;
      }).catch(function (error) {
        // console.error(error);
        throw error;
      });
    }
    /**
     * Returns promise to provide an icon
     * @param {string} iconId
     * @returns {Promise<Response>} image url to use as a value for image.src
     */

  }, {
    key: "apiRequestIcon",
    value: function apiRequestIcon(iconId) {
      var query = this.apiIconUrl(iconId);
      return fetch(query, {
        method: 'get'
      }).then(function (response) {
        if (response.ok) return response.blob();
        throw response.status;
      }).then(function (blob) {
        return URL.createObjectURL(blob);
      }).catch(function (error) {
        // console.error(error);
        throw error;
      });
    }
    /* === Private methods : SECONDARY === */

    /**
     * Build url to reach icon
     * @param {string} iconId
     * @returns {string} url
     */

  }, {
    key: "apiIconUrl",
    value: function apiIconUrl(iconId) {
      return this.config.api.iconUrl + iconId + this.config.api.iconExt;
    }
    /**
     * Verbalizes iconId code
     * @param {string} iconId
     * returns {Object} { tod: day|night, conditions: ... }
     */

  }, {
    key: "decomposeIconId",
    value: function decomposeIconId(iconId) {
      return {
        tod: iconId.substr(2) === 'd' ? 'day' : 'night',
        conditions: this.verbalizeConditionsCode(iconId.substr(0, 2))
      };
    }
    /**
     * Verbalizes 2-digit conditions code
     * @param {string} conditionsCode
     * @returns {string}
     * http://erikflowers.github.io/weather-icons/
     * http://www.alessioatzeni.com/meteocons/
     */

  }, {
    key: "verbalizeConditionsCode",
    value: function verbalizeConditionsCode(conditionsCode) {
      switch (conditionsCode) {
        case '01':
          return 'clearSky';

        case '02':
          return 'fewClouds';

        case '03':
          return 'scatteredClouds';

        case '04':
          return 'brokenClouds';

        case '09':
          return 'showerRain';

        case '10':
          return 'rain';

        case '11':
          return 'thunderStorm';

        case '13':
          return 'snow';

        case '50':
          return 'mist';

        default:
          return 'unknown';
      }
    }
  }]);

  return WeatherService;
}(_appservicecomponent.default);

exports.default = WeatherService;
},{"../framework/appservicecomponent.js":"js/framework/appservicecomponent.js"}],"js/controller/moodcontroller.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _appuicontrollercomponent = _interopRequireDefault(require("../framework/appuicontrollercomponent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Class that controls app general media
 */
var MoodController = /*#__PURE__*/function (_AppUiControllerCompo) {
  _inherits(MoodController, _AppUiControllerCompo);

  var _super = _createSuper(MoodController);

  /**
   * Create mood controller.
   * @constructor
   */
  function MoodController() {
    var _this;

    _classCallCheck(this, MoodController);

    _this = _super.call(this);
    _this.config = {
      mood: 'mood'
    };
    _this.dependencies = {};
    return _this;
  }
  /* === Public methods === */

  /**
   * Component initial activities
   */


  _createClass(MoodController, [{
    key: "run",
    value: function run() {
      this.renderMood();
    }
    /* === Public methods === */

    /**
     *
     * @param {Date} date
     * @param {number} geolat
     * @param {Object} verboseConditions { tod: day|night, conditions: clearSky|rain|... }
     */

  }, {
    key: "renderMood",
    value: function renderMood(date, geolat, verboseConditions) {
      if (!date) date = new Date();
      if (!geolat) geolat = 50;
      if (!verboseConditions) verboseConditions = {
        tod: 0,
        conditions: 0
      };
      var season = this.getSeason(date, geolat);
      var img = this.getMoodImage(verboseConditions.conditions, verboseConditions.tod, season);
      this.uiElements.container.style.backgroundImage = "url('" + img + "')";
    }
    /* === Private methods : SECONDARY === */

    /**
     * Gets season hemisphere- and longitude-wise
     * @param {Date} date
     * @param {number} geolat
     * @returns {string} spring|summer|autumn|winter
     */

  }, {
    key: "getSeason",
    value: function getSeason(date, geolat) {
      var month = date.getMonth() + 1;
      var season = month < 4 ? 'winter' : month < 6 ? 'spring' : month < 9 ? 'summer' : month < 12 ? 'autumn' : 'winter'; // invert season for Southern hemisphere

      if (geolat < 0) {
        season = season === 'winter' ? 'summer' : season === 'summer' ? 'winter' : season;
      }

      if (geolat > 65 || geolat < -60) season = 'winter';
      if (geolat <= 30 && geolat > -30) season = 'summer';
      return season;
    }
    /**
     *
     * @param {string} conditions clearSky|rain|snow|...
     * @param {string} tod time of day == day|night
     * @param {string} season
     * @returns {string} mood image url
     */

  }, {
    key: "getMoodImage",
    value: function getMoodImage(conditions, tod, season) {
      if (!conditions) return this.config.mood.seasons[season];
      if (conditions === 'unknown') conditions = 'clearSky';
      return this.config.mood.imagery[conditions][tod][season];
    }
  }]);

  return MoodController;
}(_appuicontrollercomponent.default);

exports.default = MoodController;
},{"../framework/appuicontrollercomponent.js":"js/framework/appuicontrollercomponent.js"}],"js/controller/guidecontroller.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _appuicontrollercomponent = _interopRequireDefault(require("../framework/appuicontrollercomponent.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Class representing user guide controller
 */
var GuideController = /*#__PURE__*/function (_AppUiControllerCompo) {
  _inherits(GuideController, _AppUiControllerCompo);

  var _super = _createSuper(GuideController);

  /**
   * @constructor
   */
  function GuideController() {
    var _this;

    _classCallCheck(this, GuideController);

    _this = _super.call(this);
    _this.config = {
      guide: 'guide'
    };
    _this.playedTips = {};
    return _this;
  }
  /* === Public methods === */

  /**
   * Component initial activities
   */


  _createClass(GuideController, [{
    key: "run",
    value: function run() {
      var _this2 = this;

      _get(_getPrototypeOf(GuideController.prototype), "run", this).call(this); // this.debugThisClassName('run');
      // console.log(this.config);


      this.initializePlayList(); // bind tips

      Object.keys(this.uiElements).forEach(function (uiElementIdx) {
        tippy(_this2.uiElements[uiElementIdx], _this2.config.guide.tipOptions);
      });
      window.setTimeout(function () {
        _this2.playTip('userInput');
      }, this.config.guide.onloadDelay);
    }
    /**
     * Plays a tip
     * @param {string} elementName
     */

  }, {
    key: "playTip",
    value: function playTip(elementName) {
      this.debugThisClassName('renderTip()');
      var element = this.uiElements[elementName];

      if (element) {
        this.playedTips[elementName] = true; // console.log(this.playedTips);

        element._tippy.show();

        window.setTimeout(function () {
          element._tippy.hide();
        }, this.config.guide.exposureDuration);
      }
    }
    /**
     * Plays next unplayed tip from the play list if any
     */

  }, {
    key: "playNextTip",
    value: function playNextTip() {
      var _this3 = this;

      var nextTipElementName = this.config.guide.playOrder.find(function (el) {
        return !_this3.playedTips[el];
      }); // console.log(nextTipElementName);

      nextTipElementName && this.playTip(nextTipElementName);
    }
    /* === Private methods : SECONDARY === */

    /**
     * Initializes play list - neither tip's been played yet
     */

  }, {
    key: "initializePlayList",
    value: function initializePlayList() {
      var _this4 = this;

      this.config.guide.playOrder.forEach(function (el) {
        _this4.playedTips[el] = false;
      });
    }
  }]);

  return GuideController;
}(_appuicontrollercomponent.default);

exports.default = GuideController;
},{"../framework/appuicontrollercomponent.js":"js/framework/appuicontrollercomponent.js"}],"js/controller/favcitycontroller.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _appuicontrollercomponent = _interopRequireDefault(require("../framework/appuicontrollercomponent.js"));

var _favcityservice = _interopRequireDefault(require("../service/favcityservice.js"));

var _cityinputcontroller = _interopRequireDefault(require("./cityinputcontroller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FavCityController = /*#__PURE__*/function (_AppUiControllerCompo) {
  _inherits(FavCityController, _AppUiControllerCompo);

  var _super = _createSuper(FavCityController);

  function FavCityController() {
    var _this;

    _classCallCheck(this, FavCityController);

    _this = _super.call(this);
    _this.dependencies = {
      UiControllers: {
        CityInputController: 'CityInputController'
      },
      Services: {
        FavCityService: 'FavCityService'
      }
    };
    return _this;
  }
  /* === Public methods === */

  /**
   * Launches component
   */


  _createClass(FavCityController, [{
    key: "run",
    value: function run() {
      this.uiElements.addFavCity.addEventListener('click', this.handleAddFavCity.bind(this));
      this.uiElements.removeFavCity.addEventListener('click', this.handleRemoveFavCity.bind(this));
    }
  }, {
    key: "checkCityIsFav",
    value: function checkCityIsFav(cityFullName) {
      var _this2 = this;

      this.dependencies.Services.FavCityService.getItem(cityFullName).then(function (result) {
        if (result) {
          _this2.uiElements.addFavCity.classList.add('display-none');

          _this2.uiElements.removeFavCity.classList.remove('display-none');
        } else {
          _this2.uiElements.addFavCity.classList.remove('display-none');

          _this2.uiElements.removeFavCity.classList.add('display-none');
        }
      });
    }
    /* === Private methods === */

    /**
     * Handle add fav city click
     * @param {Event} e
     */

  }, {
    key: "handleAddFavCity",
    value: function handleAddFavCity(e) {
      var _this3 = this;

      e.preventDefault();
      this.dependencies.Services.FavCityService.addEntry({
        name: this.uiElements.cityFullName.textContent
      }).then(function () {
        _this3.checkCityIsFav(_this3.uiElements.cityFullName.textContent);

        _this3.dependencies.UiControllers.CityInputController.focus();
      });
    }
    /**
     * Handle remove fav city click
     * @param {Event} e
     */

  }, {
    key: "handleRemoveFavCity",
    value: function handleRemoveFavCity(e) {
      var _this4 = this;

      e.preventDefault();
      this.dependencies.Services.FavCityService.deleteEntry(this.uiElements.cityFullName.textContent).then(function () {
        _this4.checkCityIsFav(_this4.uiElements.cityFullName.textContent);

        _this4.dependencies.UiControllers.CityInputController.focus();
      });
    }
  }]);

  return FavCityController;
}(_appuicontrollercomponent.default);

exports.default = FavCityController;
},{"../framework/appuicontrollercomponent.js":"js/framework/appuicontrollercomponent.js","../service/favcityservice.js":"js/service/favcityservice.js","./cityinputcontroller.js":"js/controller/cityinputcontroller.js"}],"js/controller/weathercontroller.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var helper = _interopRequireWildcard(require("./../helper.js"));

var _appuicontrollercomponent = _interopRequireDefault(require("../framework/appuicontrollercomponent.js"));

var _settingsservice = _interopRequireDefault(require("../service/settingsservice.js"));

var _weatherservice = _interopRequireDefault(require("../service/weatherservice.js"));

var _moodcontroller = _interopRequireDefault(require("./moodcontroller.js"));

var _guidecontroller = _interopRequireDefault(require("./guidecontroller.js"));

var _favcitycontroller = _interopRequireDefault(require("./favcitycontroller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Class representing weather view controller. */
var WeatherController = /*#__PURE__*/function (_AppUiControllerCompo) {
  _inherits(WeatherController, _AppUiControllerCompo);

  var _super = _createSuper(WeatherController);

  /**
   * Create weather controller.
   * @constructor
   */
  function WeatherController() {
    var _this;

    _classCallCheck(this, WeatherController);

    _this = _super.call(this);
    _this.config = {
      icons: 'icons'
    };
    _this.dependencies = {
      Services: {
        SettingsService: 'SettingsService',
        WeatherService: 'WeatherService'
      },
      UiControllers: {
        MoodController: 'MoodController',
        GuideController: 'GuideController',
        FavCityController: 'FavCityController'
      }
    };
    _this._elWeatherToday = null;
    return _this;
  }
  /* === Public methods === */

  /**
   * Renders current weather data view
   * @param {Promise} weatherData
   * @param {boolean} updateCityName - whether city name update expected
   * returns {Promise|null} - updated city name if required
   */


  _createClass(WeatherController, [{
    key: "renderToday",
    value: function renderToday(weatherData, updateCityName) {
      var _this2 = this;

      var idPrefix = 'wt-'; // console.log(elProgressSpinner);

      this.exposeElement('today', 'Spinner'); // elProgressSpinner.classList.add('loader-visible');

      return weatherData.then(function (data) {
        // console.log(data);
        data = _this2.extractWeatherDataCurrent(data); // enrich data

        data.windSpeedUnits = _this2.dependencies.Services.SettingsService.windSpeedUnits;
        data.date = new Date(data.dt * 1000);
        data.cityFull = data.geocity + ',' + data.geocountry;
        data.geoFull = data.geolat + ',' + data.geolon;
        data.urlo = 'https://www.google.com/maps/place/';
        data.urlGeo = data.urlo + data.geoFull; // create references to today weather HTML elements if not yet

        if (!_this2._elWeatherToday) {
          _this2._elWeatherToday = helper.objectKeysToHtmlElements(data, idPrefix);
        } // console.log(this._elWeatherToday);
        // this.debugThisClassName('renderToday');
        // console.log(data);


        data.descrIcon = '<i class="wi ' + _this2.getWeatherConditionsIcon(data.verbose.tod, data.verbose.conditions) + '"></i>';
        data.pressure = Math.round(data.pressure / 1013.25 * 100) / 100; // put data across HTML elements
        // this.debugThisClassName('renderToday');
        // console.log(data);

        Object.keys(data).forEach(function (key) {
          if (key in _this2._elWeatherToday) {
            _this2._elWeatherToday[key].innerHTML = data[key];
          }
        });

        _this2.dependencies.UiControllers.FavCityController.checkCityIsFav(data.cityFull);

        _this2.exposeElement('today', 'Main'); // document.getElementById('weather-today-debug').innerHTML = 'TODAY: <pre>' + JSON.stringify(data, null, 2) + '</pre>';
        // update mood


        _this2.dependencies.UiControllers.MoodController.renderMood(data.date, data.geolat, data.verbose);

        _this2.dependencies.UiControllers.GuideController.playNextTip(); // update city name if required


        return updateCityName ? data.geocity + ',' + data.geocountry : null;
      }).catch(function (error) {
        _this2.exposeElement('today', 'Error');

        _this2.uiElements.todayError.innerText = 'No weather data for given location or inexistent location (error code: ' + error + ')';
        throw error;
      });
    }
    /**
     * Renders weather forecast data view
     * @param {Promise} weatherData
     */

  }, {
    key: "renderForecast",
    value: function renderForecast(weatherData) {
      var _this3 = this;

      this.exposeElement('forecast', 'Spinner');
      this.uiElements.forecastMain.innerHTML = '';
      weatherData.then(function (data) {
        data = _this3.extractWeatherDataForecast(data); // this.debugThisClassName('renderForecast');
        // console.log(data);

        var forecastItems = data.weatherSchedule.map(function (item) {
          return '<div class="wf-item ' + _this3.getShadeOfTheTime(item.dtHours) + '">' + '<div class="wf-icon"><i class="wi ' + _this3.getWeatherConditionsIcon(item.verbose.tod, item.verbose.conditions) + '"></i></div>' + '<div class="wf-descr">' + item.descr + '</div>' + '<div class="wf-temp">' + item.temp + '&deg;</div>' + '<div class="wf-time">' + item.dtHours + ':00</div>' + '<div class="wf-date">' + item.dtDate + '</div>' + '</div>';
        });
        _this3.uiElements.forecastMain.innerHTML = forecastItems.join('');

        _this3.exposeElement('forecast', 'Main'); // this.uiElements.forecastDebug.innerHTML = 'Forecast: <pre>' + JSON.stringify(data, null, 2) + '</pre>';

      }).catch(function (error) {
        _this3.exposeElement('forecast', 'Error');

        _this3.uiElements.forecastError.innerText = 'No forecast data for given location or inexistent location (error code: ' + error + ')';
      });
    }
    /* === Private methods : SECONDARY === */

    /**
     * Extracts required data from API call response
     * @param {Object} src - API fetch data
     */

  }, {
    key: "extractWeatherDataCurrent",
    value: function extractWeatherDataCurrent(src) {
      // console.log('<img src="' + this.dependencies.Services.WeatherService.apiIconUrl(src.weather[0].icon) + '" />');
      // console.log('Wind azimuth: ' + src.wind.deg);
      return {
        dt: src.dt,
        geocity: src.name,
        geocountry: src.sys.country,
        geolat: src.coord.lat,
        geolon: src.coord.lon,
        descr: src.weather[0].main,
        descrDetails: src.weather[0].description,
        descrIcon: '<img src="' + this.dependencies.Services.WeatherService.apiIconUrl(src.weather[0].icon) + '" />',
        verbose: src.weather[0].verbose,
        temp: Math.round(src.main.temp),
        pressure: Math.round(src.main.pressure),
        humidity: src.main.humidity,
        windSpeed: Math.round(src.wind.speed),
        windAzimuth: this.degree2arrow('deg' in src.wind ? Math.round(src.wind.deg) : null),
        clouds: src.clouds.all
      };
    }
    /**
     * Extracts required weather data from API call response (forecast). 5 days at 12:00 and 18:00 only
     * @param {Object} src - API fetch data
     */

  }, {
    key: "extractWeatherDataForecast",
    value: function extractWeatherDataForecast(src) {
      var _this4 = this;

      var result = {
        // dt: src.dt,
        geocity: src.city.name,
        geocountry: src.city.country,
        geolat: src.city.coord.lat,
        geolon: src.city.coord.lon
      };
      var weatherList = src.list.filter(function (item) {
        var time = item.dt_txt.substring(11, 13); // console.log('Time: ' + time);

        return time === '03' || time === '09' || time === '15' || time === '21';
      });
      weatherList.sort(function (a, b) {
        return a.dt - b.dt;
      });
      result.weatherSchedule = weatherList.map(function (item) {
        return {
          dtDate: item.dt_txt.substring(8, 10) + '/' + item.dt_txt.substring(5, 7),
          dtHours: item.dt_txt.substring(11, 13),
          descr: item.weather[0].main,
          descrDetails: item.weather[0].description,
          descrIcon: '<img src="' + _this4.dependencies.Services.WeatherService.apiIconUrl(item.weather[0].icon) + '" />',
          verbose: item.weather[0].verbose,
          temp: Math.round(item.main.temp),
          pressure: Math.round(item.main.pressure),
          humidity: item.main.humidity,
          windSpeed: Math.round(item.wind.speed),
          windAzimuth: _this4.degree2arrow('deg' in item.wind ? Math.round(item.wind.deg) : null),
          clouds: item.clouds.all
        };
      });
      return result;
    }
    /**
     * Converts degree [0, 360] to the relevant HTML entity
     * @param degree
     */

  }, {
    key: "degree2arrow",
    value: function degree2arrow(degree) {
      if (degree === null) return '';
      degree = degree % 360;
      var presets = {
        0: 'uarr',
        22: 'nearr',
        67: 'rarr',
        112: 'searr',
        157: 'darr',
        202: 'swarr',
        247: 'larr',
        292: 'nwarr',
        337: 'uarr'
      }; // console.log('Degree: ' + degree);

      return '&' + Object.keys(presets).reduce(function (acc, degKey) {
        return degree >= degKey ? presets[degKey] : acc;
      }, '') + ';';
    }
    /**
     * Exposes one of elements from a set
     * @param {string} set - {today|forecast}
     * @param {string} exposedElementName - {Main|Debug|Error|Spinner|none}
     */

  }, {
    key: "exposeElement",
    value: function exposeElement(set, exposedElementName) {
      var _this5 = this;

      var elNames = ['Main', 'Debug', 'Error', 'Spinner'];
      exposedElementName = exposedElementName.charAt(0).toUpperCase() + exposedElementName.slice(1); // console.log('====== Exposing ' + set + exposedElementName);
      // console.log(this.uiElement);

      elNames.forEach(function (elname) {
        var el = _this5.uiElements[set + elname];

        if (elname === exposedElementName) {
          // console.log('Exposing ' + set + elname);
          el.classList.add('weather-visible');
        } else {
          // console.log('Hiding ' + set + elname);
          el.classList.remove('weather-visible');
        }
      });
    }
    /**
     * Picks weather icon based on time of the day and conditions
     * @param {string} tod = day|night
     * @param {string} verboseConditions = clearSky|rain|snow|...
     * @returns {string}
     */

  }, {
    key: "getWeatherConditionsIcon",
    value: function getWeatherConditionsIcon(tod, verboseConditions) {
      if (!tod) tod = 'day';

      if (verboseConditions === 'unknown' || Math.floor(Math.random() * 41) > 39) {
        verboseConditions = 'alien';
      }

      return this.config.icons[tod][verboseConditions];
    }
    /**
     * Return shade of time of the day based on hours
     * @param hours
     * @returns {string}
     */

  }, {
    key: "getShadeOfTheTime",
    value: function getShadeOfTheTime(hours) {
      return hours < '01' ? 'wf-dark' : hours < '04' ? 'wf-darkest' : hours < '07' ? 'wf-dark' : hours < '10' ? 'wf-neutral' : hours < '13' ? 'wf-light' : hours < '16' ? 'wf-lightest' : hours < '19' ? 'wf-light' : hours < '22' ? 'wf-neutral' : 'wf-dark';
    }
  }]);

  return WeatherController;
}(_appuicontrollercomponent.default);

exports.default = WeatherController;
},{"./../helper.js":"js/helper.js","../framework/appuicontrollercomponent.js":"js/framework/appuicontrollercomponent.js","../service/settingsservice.js":"js/service/settingsservice.js","../service/weatherservice.js":"js/service/weatherservice.js","./moodcontroller.js":"js/controller/moodcontroller.js","./guidecontroller.js":"js/controller/guidecontroller.js","./favcitycontroller.js":"js/controller/favcitycontroller.js"}],"js/service/citylistservice.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _appservicecomponent = _interopRequireDefault(require("../framework/appservicecomponent.js"));

var _storageservice = _interopRequireDefault(require("./storageservice.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/** Class representing city list service. */
var CityListService = /*#__PURE__*/function (_AppServiceComponent) {
  _inherits(CityListService, _AppServiceComponent);

  var _super = _createSuper(CityListService);

  /**
   * Create city list service.
   * @constructor
   */
  function CityListService() {
    var _this;

    _classCallCheck(this, CityListService);

    _this = _super.call(this);
    _this.config = {
      baseUrl: 'baseUrl',
      cityList: 'cityList'
    };
    _this.dependencies = {
      Services: {
        StorageService: 'StorageService'
      }
    };
    _this._storeName = 'cities';
    return _this;
  }
  /* === Public methods === */

  /**
   * Component initial activities
   */


  _createClass(CityListService, [{
    key: "run",
    value: function run() {
      _get(_getPrototypeOf(CityListService.prototype), "run", this).call(this); // this.debugThisClassName('run');


      this.updateStorage();
    }
    /* === Private methods : SECONDARY === */

    /**
     * Update idb storage if required
     */

  }, {
    key: "updateStorage",
    value: function updateStorage() {
      var _this2 = this;

      this.dependencies.Services.StorageService.storeCount(this._storeName).then(function (count) {
        if (!count) {
          _this2.loadSource().then(function (cityList) {
            console.log(cityList.length + ' entries in the city list.');
            var limit = 1234;
            cityList = cityList.slice(0, limit);

            _this2.dependencies.Services.StorageService.put(_this2._storeName, cityList).then(function () {
              console.log('idb.cities updated.');
              return cityList.length;
            }).then(function (entriesCount) {
              console.log('CityListService.updateStorage(cities).count==' + entriesCount);
            });
          }).catch(function (error) {
            console.log(error);
          });
        }
      });
    }
    /**
     * Import data (cities list) from external resource and customize it as appropriate
     */

  }, {
    key: "loadSource",
    value: function loadSource() {
      var _this3 = this;

      return fetch(this.config.baseUrl + this.config.cityList, {
        method: 'get'
      }).then(function (response) {
        _this3.debugThisClassName('loadSource'); // console.log(response);


        if (response.ok) {
          var contentType = response.headers.get("content-type");
          if (contentType && contentType.includes('application/json')) return response.json();
          throw new TypeError('JSON expected, ' + contentType + ' instead arrived');
        }

        throw new Error('Network response was not ok:' + response.error);
      }).then(function (data) {
        // console.log(data);
        var list = data.map(function (entry) {
          return {
            id: entry.id,
            name: entry.name + ', ' + entry.country,
            nameUC: (entry.name + ',' + entry.country).toUpperCase()
          };
        }).filter(function (el) {
          return /^[^\d\W]/.test(el.name);
        });
        return list.sort(function (a, b) {
          return a.nameUC < b.nameUC ? -1 : 1;
        });
      }).catch(function (error) {
        console.log(error);
        throw new Error(error);
      });
    }
  }]);

  return CityListService;
}(_appservicecomponent.default);

exports.default = CityListService;
},{"../framework/appservicecomponent.js":"js/framework/appservicecomponent.js","./storageservice.js":"js/service/storageservice.js"}],"js/controller/appcontroller.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _appcontrollercomponent = _interopRequireDefault(require("./../framework/appcontrollercomponent.js"));

var _helper = require("../helper.js");

var _unitswitchcontroller = _interopRequireDefault(require("./unitswitchcontroller.js"));

var _urlcontroller = _interopRequireDefault(require("./urlcontroller.js"));

var _progresscontroller = _interopRequireDefault(require("./progresscontroller.js"));

var _cityinputcontroller = _interopRequireDefault(require("./cityinputcontroller.js"));

var _searchhistorycontroller = _interopRequireDefault(require("./searchhistorycontroller.js"));

var _weathercontroller = _interopRequireDefault(require("./weathercontroller.js"));

var _cityhistoryservice = _interopRequireDefault(require("../service/cityhistoryservice.js"));

var _citylistservice = _interopRequireDefault(require("../service/citylistservice.js"));

var _favcityservice = _interopRequireDefault(require("../service/favcityservice.js"));

var _settingsservice = _interopRequireDefault(require("../service/settingsservice.js"));

var _storageservice = _interopRequireDefault(require("../service/storageservice.js"));

var _weatherservice = _interopRequireDefault(require("../service/weatherservice.js"));

var _moodcontroller = _interopRequireDefault(require("./moodcontroller.js"));

var _guidecontroller = _interopRequireDefault(require("./guidecontroller.js"));

var _favcitycontroller = _interopRequireDefault(require("./favcitycontroller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Class representing main app controller.
 * Bootstraps application using global app config
 */
var AppController = /*#__PURE__*/function (_AppControllerCompone) {
  _inherits(AppController, _AppControllerCompone);

  var _super = _createSuper(AppController);

  /**
   * AppController constructor
   * @param {Object} config - global config for components
   */
  function AppController(config) {
    var _this;

    _classCallCheck(this, AppController);

    _this = _super.call(this);

    _this.setConfig(config);

    _this.createComponents();

    _this.feedConfigToComponents();

    _this.findUiElements();

    _this.feedUiElementsToUiControllers();

    _this.bindDependencies();

    return _this;
  }
  /* === Public methods === */

  /**
   * Launches root components
   */


  _createClass(AppController, [{
    key: "runRoot",
    value: function runRoot() {
      var _this2 = this;

      _get(_getPrototypeOf(AppController.prototype), "runRoot", this).call(this); // launch Services


      Object.keys(this.dependencies.Services).forEach(function (key, idx) {
        _this2.dependencies.Services[key].runRoot();
      }); // launch functional Controllers
      // launch UI Controllers

      Object.keys(this.dependencies.Controllers).forEach(function (key, idx) {
        _this2.dependencies.Controllers[key].runRoot();
      }); // launch UI Controllers

      Object.keys(this.dependencies.UiControllers).forEach(function (key, idx) {
        _this2.dependencies.UiControllers[key].runRoot();
      });
      this.run();
    }
    /**
     * Launches components
     */

  }, {
    key: "run",
    value: function run() {
      var _this3 = this;

      // launch Services
      Object.keys(this.dependencies.Services).forEach(function (key, idx) {
        _this3.dependencies.Services[key].run();
      }); // launch functional Controllers
      // launch UI Controllers

      Object.keys(this.dependencies.Controllers).forEach(function (key, idx) {
        _this3.dependencies.Controllers[key].run();
      }); // launch UI Controllers

      Object.keys(this.dependencies.UiControllers).forEach(function (key, idx) {
        _this3.dependencies.UiControllers[key].run();
      });
    }
    /* === Private methods === */

    /**
     * Creates required app components
     */

  }, {
    key: "createComponents",
    value: function createComponents() {
      this.setDependencies({
        Services: {
          CityHistoryService: new _cityhistoryservice.default(),
          CityListService: new _citylistservice.default(),
          FavCityService: new _favcityservice.default(),
          SettingsService: new _settingsservice.default(),
          StorageService: new _storageservice.default(),
          WeatherService: new _weatherservice.default()
        },
        Controllers: {
          UrlController: new _urlcontroller.default()
        },
        UiControllers: {
          UnitSwitchController: new _unitswitchcontroller.default(),
          ProgressController: new _progresscontroller.default(),
          CityInputController: new _cityinputcontroller.default(),
          SearchHistoryController: new _searchhistorycontroller.default(),
          WeatherController: new _weathercontroller.default(),
          MoodController: new _moodcontroller.default(),
          GuideController: new _guidecontroller.default(),
          FavCityController: new _favcitycontroller.default()
        }
      });
    }
    /**
     * Feeds entries required by each component from config.config
     */

  }, {
    key: "feedConfigToComponents",
    value: function feedConfigToComponents() {
      var _this4 = this;

      (0, _helper.traverseObjectAndChange)(this.dependencies, function (component) {
        component.config = (0, _helper.traverseObjectAndChange)(component.config, function (entry) {
          return _this4.config.config[entry];
        });
      });
    }
    /**
     * Finds required UI elements and updates config accordingly
     */

  }, {
    key: "findUiElements",
    value: function findUiElements() {
      this.config.uiElements = (0, _helper.traverseObjectAndChange)(this.config.uiElements, function (value) {
        return document.getElementById(value);
      });
    }
    /**
     * Feeds each UI Controller required elements
     */

  }, {
    key: "feedUiElementsToUiControllers",
    value: function feedUiElementsToUiControllers() {
      var _this5 = this;

      Object.keys(this.dependencies.UiControllers).forEach(function (uiControllerName, idx) {
        _this5.dependencies.UiControllers[uiControllerName].setUiElements(_this5.config.uiElements[uiControllerName]);
      });
    }
    /**
     * Interbinds components as dependencies
     */

  }, {
    key: "bindDependencies",
    value: function bindDependencies() {
      // flatten the tree
      var dependenciesList = Object.assign({}, this.dependencies.Services, this.dependencies.Controllers, this.dependencies.UiControllers); // bind

      (0, _helper.traverseObjectAndChange)(this.dependencies, function (component) {
        component.dependencies = (0, _helper.traverseObjectAndChange)(component.dependencies, function (entry) {
          return dependenciesList[entry];
        });
      });
    }
  }]);

  return AppController;
}(_appcontrollercomponent.default);

exports.default = AppController;
},{"./../framework/appcontrollercomponent.js":"js/framework/appcontrollercomponent.js","../helper.js":"js/helper.js","./unitswitchcontroller.js":"js/controller/unitswitchcontroller.js","./urlcontroller.js":"js/controller/urlcontroller.js","./progresscontroller.js":"js/controller/progresscontroller.js","./cityinputcontroller.js":"js/controller/cityinputcontroller.js","./searchhistorycontroller.js":"js/controller/searchhistorycontroller.js","./weathercontroller.js":"js/controller/weathercontroller.js","../service/cityhistoryservice.js":"js/service/cityhistoryservice.js","../service/citylistservice.js":"js/service/citylistservice.js","../service/favcityservice.js":"js/service/favcityservice.js","../service/settingsservice.js":"js/service/settingsservice.js","../service/storageservice.js":"js/service/storageservice.js","../service/weatherservice.js":"js/service/weatherservice.js","./moodcontroller.js":"js/controller/moodcontroller.js","./guidecontroller.js":"js/controller/guidecontroller.js","./favcitycontroller.js":"js/controller/favcitycontroller.js"}],"js/app.js":[function(require,module,exports) {
"use strict";

var _config = require("./config.js");

var _appcontroller = _interopRequireDefault(require("./controller/appcontroller.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _appcontroller.default(_config.appConfig);
app.runRoot();
console.log('App ready');
},{"./config.js":"js/config.js","./controller/appcontroller.js":"js/controller/appcontroller.js"}],"C:/Users/Mas Ryu/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49930" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Mas Ryu/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map