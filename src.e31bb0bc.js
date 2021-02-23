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
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\products\\product1.png":[["product1.c41d1415.png","images/products/product1.png"],"images/products/product1.png"],"./..\\images\\products\\product1x2.png":[["product1x2.4bf99676.png","images/products/product1x2.png"],"images/products/product1x2.png"],"./..\\images\\products\\product2.png":[["product2.91372433.png","images/products/product2.png"],"images/products/product2.png"],"./..\\images\\products\\product2x2.png":[["product2x2.0b4b0a51.png","images/products/product2x2.png"],"images/products/product2x2.png"],"./..\\images\\products\\product3.png":[["product3.59e66af6.png","images/products/product3.png"],"images/products/product3.png"],"./..\\images\\products\\product3x2.png":[["product3x2.baa72e34.png","images/products/product3x2.png"],"images/products/product3x2.png"],"./..\\images\\products\\dots.svg":[["dots.08c47106.svg","images/products/dots.svg"],"images/products/dots.svg"],"./..\\images\\products\\arrow-right.png":[["arrow-right.43fe967f.png","images/products/arrow-right.png"],"images/products/arrow-right.png"],"./..\\images\\products\\arrow-rightx2.png":[["arrow-rightx2.4ba5e216.png","images/products/arrow-rightx2.png"],"images/products/arrow-rightx2.png"],"./..\\images\\advantages\\icon-milk.png":[["icon-milk.2f7ad634.png","images/advantages/icon-milk.png"],"images/advantages/icon-milk.png"],"./..\\images\\advantages\\icon-apples.png":[["icon-apples.7a6a7f24.png","images/advantages/icon-apples.png"],"images/advantages/icon-apples.png"],"./..\\images\\advantages\\icon-icecream.png":[["icon-icecream.f1c74b89.png","images/advantages/icon-icecream.png"],"images/advantages/icon-icecream.png"],"./..\\images\\advantages\\icon-milk@2x.png":[["icon-milk@2x.da0a9131.png","images/advantages/icon-milk@2x.png"],"images/advantages/icon-milk@2x.png"],"./..\\images\\advantages\\icon-apples@2x.png":[["icon-apples@2x.0f104d6a.png","images/advantages/icon-apples@2x.png"],"images/advantages/icon-apples@2x.png"],"./..\\images\\advantages\\icon-icecream@2x.png":[["icon-icecream@2x.f6e78263.png","images/advantages/icon-icecream@2x.png"],"images/advantages/icon-icecream@2x.png"],"./..\\images\\customers-section\\icon-semicolon.svg":[["icon-semicolon.23dfa828.svg","images/customers-section/icon-semicolon.svg"],"images/customers-section/icon-semicolon.svg"],"./..\\images\\customers-section\\icon-dots.svg":[["icon-dots.c97d14bb.svg","images/customers-section/icon-dots.svg"],"images/customers-section/icon-dots.svg"],"./..\\images\\desktop\\cards\\sectionbgcards.png":[["sectionbgcards.f7d3e6a5.png","images/desktop/cards/sectionbgcards.png"],"images/desktop/cards/sectionbgcards.png"],"./..\\images\\desktop\\cards\\sectionbgcards@2x.png":[["sectionbgcards@2x.072b8a0b.png","images/desktop/cards/sectionbgcards@2x.png"],"images/desktop/cards/sectionbgcards@2x.png"],"C:\\Users\\user\\Documents\\GitHub\\IceCream10\\src\\images\\about\\mobile\\sectionbg1.png":[["sectionbg1.e6dd4e96.png","images/about/mobile/sectionbg1.png"],"images/about/mobile/sectionbg1.png"],"C:\\Users\\user\\Documents\\GitHub\\IceCream10\\src\\images\\about\\mobile\\sectionbg1@2x.png":[["sectionbg1@2x.9b16eb57.png","images/about/mobile/sectionbg1@2x.png"],"images/about/mobile/sectionbg1@2x.png"],"C:\\Users\\user\\Documents\\GitHub\\IceCream10\\src\\images\\about\\desktop\\sectionbg1.png":[["sectionbg1.015412c1.png","images/about/desktop/sectionbg1.png"],"images/about/desktop/sectionbg1.png"],"C:\\Users\\user\\Documents\\GitHub\\IceCream10\\src\\images\\about\\desktop\\sectionbg1@2x.png":[["sectionbg1@2x.1c1dbe95.png","images/about/desktop/sectionbg1@2x.png"],"images/about/desktop/sectionbg1@2x.png"],"./..\\images\\check.svg":[["check.4b7c2681.svg","images/check.svg"],"images/check.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/burger.js":[function(require,module,exports) {
(function () {
  var menuBtnRef = document.querySelector("[data-menu-batton]");
  var mobileMenuRef = document.querySelector("[data-menu]");
  menuBtnRef.addEventListener("click", function () {
    var expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-active");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
  });
})();
},{}],"js/slider.js":[function(require,module,exports) {
// vars
'use strict';

var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30;
;

window.onload = function () {
  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove("slide-active");
      testimContent[k].classList.remove("slide-inactive");
      testimDots[k].classList.remove("slide-active");
    }

    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }

    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }

    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add("slide-inactive");
    }

    testimContent[slide].classList.add("slide-active");
    testimDots[slide].classList.add("slide-active");
    currentActive = currentSlide;
    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide(currentSlide += 1);
    }, testimSpeed);
  }

  testimLeftArrow.addEventListener("click", function () {
    playSlide(currentSlide -= 1);
  });
  testimRightArrow.addEventListener("click", function () {
    playSlide(currentSlide += 1);
  });

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener("click", function () {
      playSlide(currentSlide = testimDots.indexOf(this));
    });
  }

  playSlide(currentSlide); // keyboard shortcuts

  document.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
      case 37:
        testimLeftArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      default:
        break;
    }
  });
  testim.addEventListener("touchstart", function (e) {
    touchStartPos = e.changedTouches[0].clientX;
  });
  testim.addEventListener("touchend", function (e) {
    touchEndPos = e.changedTouches[0].clientX;
    touchPosDiff = touchStartPos - touchEndPos;
    console.log(touchPosDiff);
    console.log(touchStartPos);
    console.log(touchEndPos);

    if (touchPosDiff > 0 + ignoreTouch) {
      testimLeftArrow.click();
    } else if (touchPosDiff < 0 - ignoreTouch) {
      testimRightArrow.click();
    } else {
      return;
    }
  });
};
},{}],"js/modal.js":[function(require,module,exports) {
(function () {
  var refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]')
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
},{}],"js/modalhed.js":[function(require,module,exports) {
(function () {
  var refs = {
    openModalBtn: document.querySelector('[data-modal-hed]'),
    // closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]')
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
},{}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");

require("./js/burger");

require("./js/slider");

require("./js/modal");

require("./js/modalhed");
},{"./sass/main.scss":"sass/main.scss","./js/burger":"js/burger.js","./js/slider":"js/slider.js","./js/modal":"js/modal.js","./js/modalhed":"js/modalhed.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60541" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map