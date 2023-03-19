const buttons = ['cky-btn-accept', 'cky-btn-reject'];

let breakShowupWait = false;
window.addEventListener('load', function () {
  console.log('in load');
  waitForElement('cky-consent-container', true, handleConsentBannerShown);
});
function waitForElement(selector, isShowup, callback) {
  if (isShowup && breakShowupWait) {
    breakShowupWait = false;
    return callback();
  }
  const element = document.getElementsByClassName(selector);
  // console.log('element here', element);
  if (element[0] && element[0].style.display !== 'none')
    return callback(element);
  setTimeout(() => {
    waitForElement(selector, isShowup, callback);
  }, 200);
}

function handleConsentBannerShown(element) {
  const overlayElement = document.createElement('div');
  overlayElement.setAttribute('class', 'cky-overlay');
  element[0].parentNode.insertBefore(overlayElement, element.nextSibling);
  for (let i = 0; i < buttons.length; i++) {
    console.log('buttons in loop', buttons[i]);
    const buttonElement = document.querySelector(`.${buttons[i]}`);
    console.log('cliked button', buttonElement);
    buttonElement &&
      buttonElement.addEventListener('click', removeOverlay(overlayElement));
  }
}

function removeOverlay(element) {
  return () => {
    element.parentNode.removeChild(element);
    breakPopupWait = true;
    waitForElement('cky-consent', false, handleConsentBannerShown);
  };
}
