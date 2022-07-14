export default () => {
  const headerNavMenu = document.querySelector(`.page-header__nav`);
  const prizesLink = headerNavMenu.querySelector(`.js-menu-link[data-href="prizes"]`);
  const contentCoverBlock = document.querySelector(`.cover-block`);

  headerNavMenu.addEventListener(`click`, (e) => {
    const {hash} = window.location;

    if (e.target === prizesLink && hash === `#story`) {
      e.preventDefault();
      contentCoverBlock.classList.add(`cover-block--visible`);

      setTimeout(() => {
        contentCoverBlock.classList.remove(`cover-block--visible`);
      }, 1400);

      setTimeout(() => {
        window.location.href = e.target.href;
      }, 1000);
    }
  });

};
