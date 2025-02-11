const $ = (e) => document.querySelector(e);

const cleanCtn = (ctn) => {
  while (ctn.firstChild) {
    ctn.removeChild(ctn.firstChild);
  }
};

const cleanInput = (input) => {
  input.value = "";
};

const checkLocalStorage = (item) => localStorage.getItem(item) === null;

const saveToLocalStorage = (item) => {
  localStorage.setItem("projects", JSON.stringify(item));
};

const getFromLocalStorage = (item) => {
  return JSON.parse(localStorage.getItem(item));
};

const createElement = (tag, ...args) => {
  const el = document.createElement(tag);

  const [className, textContent, type] = args;

  if (className) el.classList.add(className);
  if (textContent) el.textContent = textContent;
  if (type) el.type = type;

  return el;
};

export {
  $,
  cleanCtn,
  cleanInput,
  checkLocalStorage,
  createElement,
  saveToLocalStorage,
  getFromLocalStorage,
};
