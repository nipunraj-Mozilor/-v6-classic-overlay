!(function () {
  var e = ['.cky-btn-accept', '.cky-btn-reject', '.cky-btn-preferences'];
  function t(e, n) {
    var r = document.querySelector(e);
    if (r) {
      var o = (function (e) {
        return e.currentStyle
          ? e.currentStyle.display
          : window.getComputedStyle
          ? window.getComputedStyle(e, null).getPropertyValue('display')
          : '';
      })(r);
      if ('none' !== o && '' !== o) return n(r);
    }
    setTimeout(function () {
      t(e, n);
    }, 200);
  }
  function n(t) {
    var n = document.createElement('div');
    n.setAttribute(
      'style',
      'position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:9999;'
    ),
      t.parentNode.insertBefore(n, t.nextSibling);
    for (var o = 0; o < e.length; o++) {
      var c = document.querySelector(e[o]);
      c && c.addEventListener('click', r(n));
    }
  }
  function r(e) {
    return function () {
      e &&
        e.parentNode &&
        (e.parentNode.removeChild(e), t('.cky-consent-container', n));
    };
  }
  window.addEventListener('load', function () {
    t('.cky-consent-container', n);
  });
})();
