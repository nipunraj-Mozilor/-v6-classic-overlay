const selectEle = document.getElementsByTagName('h2')
selectEle[0].style.color = 'red'

// if (
//   !document.querySelector(
//     '.cky-consent-container .cky-classic-bottom .cky-hide'
//   )
// ) {
//   document.body.classList.add('cky-overlay')
// }

//
const ckyConsentContainer = document.querySelector('.cky-consent-container')
if (ckyConsentContainer && ckyConsentContainer.classList.contains('cky-hide')) {
  const computedStyle = window.getComputedStyle(ckyConsentContainer)
  if (computedStyle.display === 'block') {
    document.body.classList.add('cky-overlay')
  }
}

//

jQuery(document).on(
  'click',
  '.cky-btn-reject,.cky-btn-preferences,.cky-btn-accept',
  function () {
    document.body.classList.remove('cky-overlay')
  }
)
jQuery(document).on('click', '.cky-btn-revisit', function () {
  document.body.classList.add('cky-overlay')
})
