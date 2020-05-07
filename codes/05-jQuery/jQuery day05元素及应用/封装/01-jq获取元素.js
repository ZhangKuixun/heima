(function (window, undefined) {
  var jQuery = function (selector) {
    var eles = document.querySelectorAll(selector)

    Array.prototype.push.apply(this, eles)
  }
  window.jQuery = window.$ = jQuery
})(window)

new $("#demo")