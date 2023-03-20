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
  const element = document.querySelector(
    '.cky-btn-reject, .cky-btn-preferences, .cky-btn-accept'
  );
  element.addEventListener('click', () => {
    document.body.classList.remove('cky-overlay');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const element2 = document.querySelector('.cky-btn-revisit');
  element2.addEventListener('click', () => {
    document.body.classList.add('cky-overlay');
  });
});
