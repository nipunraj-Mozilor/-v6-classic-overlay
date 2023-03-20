window.addEventListener('load', function () {
  setTimeout(function () {
    if (
      !document.querySelector(
        '.cky-consent-container.cky-classic-bottom.cky-hide'
      )
    ) {
      document.body.classList.add('cky-overlay');
    }
  }, 2000);
});

document.addEventListener('DOMContentLoaded', () => {
  // const element = document.querySelector(
  //   '.cky-btn-reject,.cky-btn-preferences,.cky-btn-accept'
  // );
  // element.addEventListener('click', () => {
  //   document.body.classList.remove('cky-overlay');
  // });
  const elements = document.querySelectorAll(
    '.cky-btn-reject, .cky-btn-preferences, .cky-btn-accept'
  );
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      document.body.classList.remove('cky-overlay');
    });
  });
});

// const element = document.querySelector(
//   '.cky-btn-reject,.cky-btn-preferences,.cky-btn-accept'
// );
// element.addEventListener('click', () => {
//   document.body.classList.remove('cky-overlay');
// });

// jQuery(document).on(
//   'click',
//   '.cky-btn-reject,.cky-btn-preferences,.cky-btn-accept',
//   function () {
//     document.body.classList.remove('cky-overlay');
//   }
// );
// const element2 = document.querySelector('.cky-btn-revisit');
// element2.addEventListener('click', () => {
//   document.body.classList.add('cky-overlay');
// });
document.addEventListener('DOMContentLoaded', () => {
  const element2 = document.querySelector('.cky-btn-revisit-wrapper');
  console.log('element 2', element2);
  element2.addEventListener('click', () => {
    document.body.classList.add('cky-overlay');
  });
});

// jQuery(document).on('click', '.cky-btn-revisit', function () {
//   document.body.classList.add('cky-overlay');
// });
