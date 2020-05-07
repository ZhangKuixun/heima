(function (window, undefined) {

  var jQuery = function (selector) {
    return new jQuery.fn.init(selector)
  }

  jQuery.fn = jQuery.prototype = {
    constructor: jQuery,

    init: function (selector) {
      var eles = document.querySelectorAll(selector)
      Array.prototype.push.apply(this, eles)
    },

    css: function () {
      console.log(1);
    }
  }

  jQuery.fn.init.prototype = jQuery.fn

  window.jQuery = window.$ = jQuery
})(window)

// new $("p") ==> init的实例对象