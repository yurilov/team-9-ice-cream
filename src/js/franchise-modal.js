(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-franchise-modal-open]'),
      closeModalBtn: document.querySelector('[data-franchise-modal-close]'),
    closeModalBtn: document.querySelector('[data-franchise-modal]'),
    modal: document.querySelector('[data-franchise-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle("franchise__modal-open");
  }
})();