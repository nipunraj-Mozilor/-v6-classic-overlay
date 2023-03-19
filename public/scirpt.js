const selectEle = document.getElementsByTagName('h2')
selectEle[0].style.color = 'red'

//
// Add event listener to consent buttons
jQuery(document).on(
  'click',
  '.cky-btn-reject,.cky-btn-preferences,.cky-btn-accept',
  function () {
    // Set localStorage item to indicate user has interacted with consent banner
    localStorage.setItem('consent-interaction', true)
    document.body.classList.remove('cky-overlay')
  }
)

// Add event listener to revisit button
jQuery(document).on('click', '.cky-btn-revisit', function () {
  document.body.classList.add('cky-overlay')
})

// Check if user has interacted with consent banner
if (!localStorage.getItem('consent-interaction')) {
  // Consent banner not interacted with, add overlay
  document.body.classList.add('cky-overlay')
}

//

if (
  !document.querySelector('.cky-consent-container.cky-classic-bottom.cky-hide')
) {
  document.body.classList.add('cky-overlay')
}

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
