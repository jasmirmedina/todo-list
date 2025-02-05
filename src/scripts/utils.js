const $ = (e) => document.querySelector(e);

const cleanCtn = (ctn) => {
  while (ctn.firstChild) {
    ctn.removeChild(ctn.firstChild);
  }
};

export { $, cleanCtn };
