(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buy-modal-open]'),
    openModalMenuBtn: document.querySelector('[data-buy-modal-menu-open]'),
      closeModalBtn: document.querySelector('[data-buy-modal-close]'),
    modal: document.querySelector('[data-buy-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalMenuBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
 
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle("buy-modal-open");
  }
})();