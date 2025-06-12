document.addEventListener('DOMContentLoaded', () => {
  const btnChat = document.querySelector('.btn-chat');

  if (btnChat) {
    btnChat.addEventListener('click', function () {
      const producto = this.dataset.producto;
      const vendedor = this.dataset.vendedor;
      const url = `chat.html?producto=${encodeURIComponent(producto)}&usuario=${encodeURIComponent(vendedor)}`;
      window.location.href = url;
    });
  }
});
