const input = document.createElement('input');
const p = document.createElement('p');

document.body.append(input);
document.body.append(p);

const showText = () => {
  console.log(input.value);
  p.textContent = input.value;
};

const debounce = (func, delayTime) => {
  let timeout;
  return function doWithDelay() {
    clearTimeout(timeout);
    timeout = setTimeout(func, delayTime);
  };
};

const debounceShowText = debounce(showText, 700);

input.addEventListener('keyup', debounceShowText);
