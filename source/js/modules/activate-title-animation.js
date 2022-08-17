import {LetterAnimation} from "./letter-animation";

export default () => {
  window.addEventListener(`load`, () => {
    const mainTitleAnimation = new LetterAnimation(`.intro__title`, 500, `active`, `transform`);
    setTimeout(() => {
      mainTitleAnimation.runAnimation();
    }, 500);
  });

  const headerNavMenu = document.querySelector(`.page-header__nav`);

  headerNavMenu.addEventListener(`click`, (e) => {

    if (e.target.getAttribute(`data-href`) === `story`) {
      const storyTitleAnimation = new LetterAnimation(`.slider__item-title`, 500, `active`, `transform`);
      setTimeout(() => {
        storyTitleAnimation.runAnimation();
      }, 100);
    }

    if (e.target.getAttribute(`data-href`) === `prizes`) {
      const storyTitleAnimation = new LetterAnimation(`.prizes__title`, 500, `active`, `transform`);
      setTimeout(() => {
        storyTitleAnimation.runAnimation();
      }, 1100);
    }

    if (e.target.getAttribute(`data-href`) === `rules`) {
      const storyTitleAnimation = new LetterAnimation(`.rules__title`, 500, `active`, `transform`);
      setTimeout(() => {
        storyTitleAnimation.runAnimation();
      }, 100);
    }

    if (e.target.getAttribute(`data-href`) === `game`) {
      const storyTitleAnimation = new LetterAnimation(`.game__title`, 500, `active`, `transform`);
      setTimeout(() => {
        storyTitleAnimation.runAnimation();
      }, 100);
    }
  });
};
