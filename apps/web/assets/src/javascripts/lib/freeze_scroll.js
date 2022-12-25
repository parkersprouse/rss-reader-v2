const freeze = () => {
  window.Turbo.navigator.currentVisit.scrolled = true;
  document.removeEventListener('turbo:render', freeze);
};

export const freezeScrollOnNextRender = () => {
  document.addEventListener('turbo:render', freeze);
};
