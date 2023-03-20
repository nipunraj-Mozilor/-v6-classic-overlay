const buttons = ['.cky-btn-accept', '.cky-btn-reject', '.cky-btn-preferences'];

window.addEventListener('load', function () {
  waitForElement('.cky-consent-container', handleConsentBannerShown);
});

function waitForElement(selector, callback) {
  const element = document.querySelector(selector);
  if (element) {
    const display = getDisplayStyle(element);
    if (display !== 'none' && display !== '') {
      return callback(element);
    }
  }

  setTimeout(() => {
    waitForElement(selector, callback);
  }, 200);
}

function handleConsentBannerShown(element) {
  const overlayElement = document.createElement('div');
  overlayElement.setAttribute(
    'style',
    'position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:9999;'
  );

  element.parentNode.insertBefore(overlayElement, element.nextSibling);
  for (let i = 0; i < buttons.length; i++) {
    const buttonElement = document.querySelector(buttons[i]);
    buttonElement &&
      buttonElement.addEventListener('click', removeOverlay(overlayElement));
  }
}

function removeOverlay(element) {
  return function () {
    element.parentNode.removeChild(element);
    waitForElement('.cky-consent-container', handleConsentBannerShown);
  };
}

function getDisplayStyle(element) {
  return element.currentStyle
    ? element.currentStyle['display']
    : window.getComputedStyle
    ? window.getComputedStyle(element, null).getPropertyValue('display')
    : '';
}
