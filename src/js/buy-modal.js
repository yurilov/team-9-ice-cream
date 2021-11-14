(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buy-modal-open]'),
      closeModalBtn: document.querySelector('[data-buy-modal-close]'),
    modal: document.querySelector('[data-buy-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle("buy-modal-open");
  }
})();