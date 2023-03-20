window.addEventListener('load', function () {
  setTimeout(function () {
    if (
      !document.querySelector(
        '.cky-consent-container .cky-classic-bottom .cky-hide'
      )
    ) {
      document.body.classList.add('cky-overlay');
    }
  }, 2000);
});

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll(
    '#cky-btn-reject, #cky-btn-preferences, #cky-btn-accept'
  );
  console.log(elements);
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      document.body.classList.remove('cky-overlay');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const element2 = document.querySelector('.cky-btn-revisit-wrapper');
  if (element2 && element2.classList.contains('cky-btn-revisit')) {
    document.body.classList.add('cky-overlay');
  }
});
