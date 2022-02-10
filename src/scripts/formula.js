'use strict';

const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');
const inputEl = document.querySelector('input');

create.addEventListener('click', getWidth);
destroy.addEventListener('click', destroyBoxes);

function getWidth() {
  const width = document.querySelector('#controls input').value;
  if (width) {
    createBoxes(width);
  }
}

export default function createBoxes(width) {
  const fragment = document.createDocumentFragment();
  boxes.innerHTML = '';

  const size = width * 37.7;

  //////////BOX///////////
  const div = document.createElement('div');
  div.classList.add('square');
  div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;

  /////////FORMULA 1 ////////////////
  const p1Ele = document.createElement('p');
  p1Ele.classList.add('formulaSquare');
  p1Ele.textContent = `S = H² = ${width}sm * ${width}sm = ${width * width}sm²`;

  /////////FORMULA 2 ////////////////
  const p2Ele = document.createElement('p');
  p2Ele.classList.add('formulaSquare');

  p2Ele.textContent = `V = H³ = (${width}sm * ${width}sm * ${width}sm) = ${
    width * width * width
  }sm³`;

  ///////////ADD TO HTML////////////
  fragment.appendChild(div);
  fragment.appendChild(p1Ele);
  fragment.appendChild(p2Ele);

  inputEl.value = '';
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
