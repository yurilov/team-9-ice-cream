(() => {
  const refs = {
    rotateCardBtn: document.querySelector('[data-cream-rotate-front]'),
    unrotateCardBtn: document.querySelector('[data-cream-rotate-back]'),
    cardFront: document.querySelector('[data-cream-front]'),
    cardBack: document.querySelector('[data-cream-back]'),
  };

  refs.rotateCardBtn.addEventListener('click', toggleCard);
  refs.unrotateCardBtn.addEventListener('click', toggleCard);

  function toggleCard() {
      refs.cardFront.classList.toggle('flipped');
      refs.cardBack.classList.toggle('flipped');
  }
})();

(() => {
  const refs = {
    rotateCardBtn: document.querySelector('[data-coffee-rotate-front]'),
    unrotateCardBtn: document.querySelector('[data-coffee-rotate-back]'),
    cardFront: document.querySelector('[data-coffee-front]'),
    cardBack: document.querySelector('[data-coffee-back]'),
  };

  refs.rotateCardBtn.addEventListener('click', toggleCard);
  refs.unrotateCardBtn.addEventListener('click', toggleCard);

  function toggleCard() {
      refs.cardFront.classList.toggle('flipped');
      refs.cardBack.classList.toggle('flipped');
  }
})();

(() => {
  const refs = {
    rotateCardBtn: document.querySelector('[data-milkshakes-rotate-front]'),
    unrotateCardBtn: document.querySelector('[data-milkshakes-rotate-back]'),
    cardFront: document.querySelector('[data-milkshakes-front]'),
    cardBack: document.querySelector('[data-milkshakes-back]'),
  };

  refs.rotateCardBtn.addEventListener('click', toggleCard);
  refs.unrotateCardBtn.addEventListener('click', toggleCard);

  function toggleCard() {
      refs.cardFront.classList.toggle('flipped');
      refs.cardBack.classList.toggle('flipped');
  }
})();

// (() => {
//   const refs = {
//     rotateCardBtn: document.querySelector('[data-hero-rotate-front]'),
//     unrotateCardBtn: document.querySelector('[data-hero-rotate-back]'),
//     cardFront: document.querySelector('[data-hero-front]'),
//     cardBack: document.querySelector('[data-hero-back]'),
//   };

//   refs.rotateCardBtn.addEventListener('click', toggleCard);
//   refs.unrotateCardBtn.addEventListener('click', toggleCard);

//   function toggleCard() {
//       refs.cardFront.classList.toggle('flipped');
//       refs.cardBack.classList.toggle('flipped');
//   }
// })();