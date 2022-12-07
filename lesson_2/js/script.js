const input = document.createElement('input');
const p = document.createElement('p');

document.body.append(input);
document.body.append(p);

input.addEventListener('input', () => {
  setTimeout(() => {
    p.textContent = input.value;
  }, 300);
});
