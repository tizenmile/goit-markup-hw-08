(() => {
  const refs = {
    body: document.querySelector("body"),
  };

  function toggleMenu() {
    refs.body.classList.toggle("[no-scroll]");
  }
})();
