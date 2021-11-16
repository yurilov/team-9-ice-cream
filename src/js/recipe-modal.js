(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-recipe-modal-open]'),
      closeModalBtn: document.querySelector('[data-recipe-modal-close]'),
    modal: document.querySelector('[data-recipe-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle("recipe-modal-open");
  }
})();