(() => {
  const refs = {
      closeModalBtn: document.querySelector('[data-buy-modal-close]'),
    closeModalBtn: document.querySelector('[data-buy-backdrop-close]'),
    openModalBtn: document.querySelector('[data-buy-modal-open]'),
    modal: document.querySelector('[data-buy-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle("buy__modal-open");
  }
})();