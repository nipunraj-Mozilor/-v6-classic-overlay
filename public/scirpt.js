const buttons = ['cky-btn-accept', 'cky-btn-reject', 'cky-btn-preferences'];

window.addEventListener('load', function () {
  waitForElement('cky-consent-container', false, handleConsentBannerShown);
});
function waitForElement(selector, isShowup, callback) {
  const element = document.querySelector(`.${selector}`);
  if (element) {
    const display = getStyle('.cky-consent-container', 'display');
    if (element && display !== 'none' && display !== '') {
      return callback(element);
    }
  }

  setTimeout(() => {
    waitForElement(selector, isShowup, callback);
  }, 200);
}

function handleConsentBannerShown(element) {
  console.log('inside callback element', element.style);
  const overlayElement = document.createElement('div');
  overlayElement.setAttribute('style', 'cky-overlay');
  overlayElement.setAttribute(
    'style',
    'position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:9999;'
  );

  element.parentNode.insertBefore(overlayElement, element.nextSibling);
  for (let i = 0; i < buttons.length; i++) {
    const buttonElement = document.querySelector(`.${buttons[i]}`);
    console.log(buttonElement);
    buttonElement &&
      buttonElement.addEventListener('click', removeOverlay(overlayElement));
  }
}

function removeOverlay(element) {
  return () => {
    console.log(element);
    element.parentNode.removeChild(element);
    breakPopupWait = true;
    waitForElement('cky-consent', false, handleConsentBannerShown);
  };
}

function getStyle(id, name) {
  const element = document.querySelector(id);
  return element && element.currentStyle
    ? element.currentStyle[name]
    : window.getComputedStyle
    ? window.getComputedStyle(element, null).getPropertyValue(name)
    : null;
}
