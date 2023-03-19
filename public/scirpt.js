const selectEle = document.getElementsByTagName('h2')
selectEle[0].style.color = 'red'

const buttons = ['cky-btn-accept', 'cky-btn-reject', 'cky-btn-close']

let breakPopupWait = true
window.addEventListener('load', function () {
  waitForElement('cky-consent-container', false, handleConsentBannerShown)
})

function waitForElement(selector, isPopup, callback) {
  if (isPopup && breakPopupWait) {
    breakPopupWait = false
    return callback()
  }
  const element = document.getElementById(selector)
  if (element && element.style.display !== 'none') return callback(element)
  setTimeout(function () {
    waitForElement(selector, isPopup, callback)
  }, 200)
}

function handleConsentBannerShown(element) {
  const overlayElement = document.createElement('div')
  overlayElement.setAttribute('class', 'cky-overlay')
  element.parentNode.insertBefore(overlayElement, element.nextSibling)
  for (let i = 0; i < buttons.length; i++) {
    const buttonElement = document.getElementById(buttons[i])
    buttonElement &&
      buttonElement.addEventListener('click', removeOverlay(overlayElement))
  }
  waitForElement('cky-settings-popup', true, function (element) {
    element &&
      document
        .getElementById('cky-btn-custom-accept')
        .addEventListener('click', removeOverlay(overlayElement))
  })
  waitForElement('cky-ccpa-settings-popup', true, function (element) {
    element &&
      document
        .getElementById('cky-btn-confirm')
        .addEventListener('click', removeOverlay(overlayElement))
  })
}

function removeOverlay(element) {
  return function () {
    element.parentNode.removeChild(element)
    breakPopupWait = true
    waitForElement('cky-consent', false, handleConsentBannerShown)
  }
}
