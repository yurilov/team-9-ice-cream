(() => {
  const refs = {
    rotateCardBtn: document.querySelector('[data-rotate-front]'),
    unrotateCardBtn: document.querySelector('[data-rotate-back]'),
      cardFront: document.querySelector('[data-card-front]'),
    cardBack: document.querySelector('[data-card-back]'),
  };

  refs.rotateCardBtn.addEventListener('click', toggleCard);
  refs.unrotateCardBtn.addEventListener('click', toggleCard);

  function toggleCard() {
      refs.cardFront.classList.toggle('flipped');
      refs.cardBack.classList.toggle('flipped');
  }
})();