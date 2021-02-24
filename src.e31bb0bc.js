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
},{}],"js/jquery.js":[function(require,module,exports) {
/*================================================================================
 * @name: bPopup - if you can't get it up, use bPopup
 * @author: (c)Bjoern Klinggaard (twitter@bklinggaard)
 * @demo: http://dinbror.dk/bpopup
 * @version: 0.11.0.min
 ================================================================================*/
(function (c) {
  c.fn.bPopup = function (A, E) {
    function L() {
      a.contentContainer = c(a.contentContainer || b);

      switch (a.content) {
        case "iframe":
          var d = c('<iframe class="b-iframe" ' + a.iframeAttr + "></iframe>");
          d.appendTo(a.contentContainer);
          t = b.outerHeight(!0);
          u = b.outerWidth(!0);
          B();
          d.attr("src", a.loadUrl);
          l(a.loadCallback);
          break;

        case "image":
          B();
          c("<img />").load(function () {
            l(a.loadCallback);
            F(c(this));
          }).attr("src", a.loadUrl).hide().appendTo(a.contentContainer);
          break;

        default:
          B(), c('<div class="b-ajax-wrapper"></div>').load(a.loadUrl, a.loadData, function (d, b, e) {
            l(a.loadCallback, b);
            F(c(this));
          }).hide().appendTo(a.contentContainer);
      }
    }

    function B() {
      a.modal && c('<div class="b-modal ' + e + '"></div>').css({
        backgroundColor: a.modalColor,
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        opacity: 0,
        zIndex: a.zIndex + v
      }).appendTo(a.appendTo).fadeTo(a.speed, a.opacity);
      C();
      b.data("bPopup", a).data("id", e).css({
        left: "slideIn" == a.transition || "slideBack" == a.transition ? "slideBack" == a.transition ? f.scrollLeft() + w : -1 * (x + u) : m(!(!a.follow[0] && n || g)),
        position: a.positionStyle || "absolute",
        top: "slideDown" == a.transition || "slideUp" == a.transition ? "slideUp" == a.transition ? f.scrollTop() + y : z + -1 * t : p(!(!a.follow[1] && q || g)),
        "z-index": a.zIndex + v + 1
      }).each(function () {
        a.appending && c(this).appendTo(a.appendTo);
      });
      G(!0);
    }

    function r() {
      a.modal && c(".b-modal." + b.data("id")).fadeTo(a.speed, 0, function () {
        c(this).remove();
      });
      a.scrollBar || c("html").css("overflow", "auto");
      c(".b-modal." + e).unbind("click");
      f.unbind("keydown." + e);
      k.unbind("." + e).data("bPopup", 0 < k.data("bPopup") - 1 ? k.data("bPopup") - 1 : null);
      b.undelegate(".bClose, ." + a.closeClass, "click." + e, r).data("bPopup", null);
      clearTimeout(H);
      G();
      return !1;
    }

    function I(d) {
      y = k.height();
      w = k.width();
      h = D();
      if (h.x || h.y) clearTimeout(J), J = setTimeout(function () {
        C();
        d = d || a.followSpeed;
        var e = {};
        h.x && (e.left = a.follow[0] ? m(!0) : "auto");
        h.y && (e.top = a.follow[1] ? p(!0) : "auto");
        b.dequeue().each(function () {
          g ? c(this).css({
            left: x,
            top: z
          }) : c(this).animate(e, d, a.followEasing);
        });
      }, 50);
    }

    function F(d) {
      var c = d.width(),
          e = d.height(),
          f = {};
      a.contentContainer.css({
        height: e,
        width: c
      });
      e >= b.height() && (f.height = b.height());
      c >= b.width() && (f.width = b.width());
      t = b.outerHeight(!0);
      u = b.outerWidth(!0);
      C();
      a.contentContainer.css({
        height: "auto",
        width: "auto"
      });
      f.left = m(!(!a.follow[0] && n || g));
      f.top = p(!(!a.follow[1] && q || g));
      b.animate(f, 250, function () {
        d.show();
        h = D();
      });
    }

    function M() {
      k.data("bPopup", v);
      b.delegate(".bClose, ." + a.closeClass, "click." + e, r);
      a.modalClose && c(".b-modal." + e).css("cursor", "pointer").bind("click", r);
      N || !a.follow[0] && !a.follow[1] || k.bind("scroll." + e, function () {
        if (h.x || h.y) {
          var d = {};
          h.x && (d.left = a.follow[0] ? m(!g) : "auto");
          h.y && (d.top = a.follow[1] ? p(!g) : "auto");
          b.dequeue().animate(d, a.followSpeed, a.followEasing);
        }
      }).bind("resize." + e, function () {
        I();
      });
      a.escClose && f.bind("keydown." + e, function (a) {
        27 == a.which && r();
      });
    }

    function G(d) {
      function c(e) {
        b.css({
          display: "block",
          opacity: 1
        }).animate(e, a.speed, a.easing, function () {
          K(d);
        });
      }

      switch (d ? a.transition : a.transitionClose || a.transition) {
        case "slideIn":
          c({
            left: d ? m(!(!a.follow[0] && n || g)) : f.scrollLeft() - (u || b.outerWidth(!0)) - 200
          });
          break;

        case "slideBack":
          c({
            left: d ? m(!(!a.follow[0] && n || g)) : f.scrollLeft() + w + 200
          });
          break;

        case "slideDown":
          c({
            top: d ? p(!(!a.follow[1] && q || g)) : f.scrollTop() - (t || b.outerHeight(!0)) - 200
          });
          break;

        case "slideUp":
          c({
            top: d ? p(!(!a.follow[1] && q || g)) : f.scrollTop() + y + 200
          });
          break;

        default:
          b.stop().fadeTo(a.speed, d ? 1 : 0, function () {
            K(d);
          });
      }
    }

    function K(d) {
      d ? (M(), l(E), a.autoClose && (H = setTimeout(r, a.autoClose))) : (b.hide(), l(a.onClose), a.loadUrl && (a.contentContainer.empty(), b.css({
        height: "auto",
        width: "auto"
      })));
    }

    function m(a) {
      return a ? x + f.scrollLeft() : x;
    }

    function p(a) {
      return a ? z + f.scrollTop() : z;
    }

    function l(a, e) {
      c.isFunction(a) && a.call(b, e);
    }

    function C() {
      z = q ? a.position[1] : Math.max(0, (y - b.outerHeight(!0)) / 2 - a.amsl);
      x = n ? a.position[0] : (w - b.outerWidth(!0)) / 2;
      h = D();
    }

    function D() {
      return {
        x: w > b.outerWidth(!0),
        y: y > b.outerHeight(!0)
      };
    }

    c.isFunction(A) && (E = A, A = null);
    var a = c.extend({}, c.fn.bPopup.defaults, A);
    a.scrollBar || c("html").css("overflow", "hidden");
    var b = this,
        f = c(document),
        k = c(window),
        y = k.height(),
        w = k.width(),
        N = /OS 6(_\d)+/i.test(navigator.userAgent),
        v = 0,
        e,
        h,
        q,
        n,
        g,
        z,
        x,
        t,
        u,
        J,
        H;

    b.close = function () {
      r();
    };

    b.reposition = function (a) {
      I(a);
    };

    return b.each(function () {
      c(this).data("bPopup") || (l(a.onOpen), v = (k.data("bPopup") || 0) + 1, e = "__b-popup" + v + "__", q = "auto" !== a.position[1], n = "auto" !== a.position[0], g = "fixed" === a.positionStyle, t = b.outerHeight(!0), u = b.outerWidth(!0), a.loadUrl ? L() : B());
    });
  };

  c.fn.bPopup.defaults = {
    amsl: 50,
    appending: !0,
    appendTo: "body",
    autoClose: !1,
    closeClass: "b-close",
    content: "ajax",
    contentContainer: !1,
    easing: "swing",
    escClose: !0,
    follow: [!0, !0],
    followEasing: "swing",
    followSpeed: 500,
    iframeAttr: 'scrolling="no" frameborder="0"',
    loadCallback: !1,
    loadData: !1,
    loadUrl: !1,
    modal: !0,
    modalClose: !0,
    modalColor: "#000",
    onClose: !1,
    onOpen: !1,
    opacity: .7,
    position: ["auto", "auto"],
    positionStyle: "absolute",
    scrollBar: !0,
    speed: 250,
    transition: "fadeIn",
    transitionClose: !1,
    zIndex: 9997
  };
})(jQuery);
},{}],"js/main.js":[function(require,module,exports) {
// Semicolon (;) to ensure closing of earlier scripting
// Encapsulation
// $ is assigned to jQuery
;

(function ($) {
  // DOM Ready
  $(function () {
    var refs = {
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]')
    }; // Binding a click event
    // From jQuery v.1.7.0 use .on() instead of .bind()

    $('#my-button').bind('click', function (e) {
      // Prevents the default action to be triggered. 
      e.preventDefault(); // Triggering bPopup when click event is fired

      $('#element_to_pop_up').bPopup({
        speed: 650,
        transition: 'slideIn',
        transitionClose: 'slideBack'
      });
    });
  });
})(jQuery);
},{}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");

require("./js/burger");

require("./js/slider");

require("./js/modal");

require("./js/modalhed");

require("./js/jquery");

require("./js/main");
},{"./sass/main.scss":"sass/main.scss","./js/burger":"js/burger.js","./js/slider":"js/slider.js","./js/modal":"js/modal.js","./js/modalhed":"js/modalhed.js","./js/jquery":"js/jquery.js","./js/main":"js/main.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52514" + '/');

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