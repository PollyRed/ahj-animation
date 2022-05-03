document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.btn-collapse');
  const container = document.querySelector('.container');
  button.addEventListener('click', (event) => {
    event.preventDefault();
    container.classList.toggle('active');
  });
});
