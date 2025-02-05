const $ = (e) => document.querySelector(e);

const cleanCtn = (ctn) => {
  while (ctn.firstChild) {
    ctn.removeChild(ctn.firstChild);
  }
};

const checkLocalStorage = (item) => localStorage.getItem(item) === null;

export { $, cleanCtn, checkLocalStorage };
