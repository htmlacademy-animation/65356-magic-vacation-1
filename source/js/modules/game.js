/* eslint-disable no-console */
export default () => {

  const gameLink = document.querySelector(`a[data-href='game']`);
  const counter = document.querySelector(`.game__counter`);
  let time = 300;

  const updateCount = () => {
    const minutes = `0` + Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? `0` + seconds : seconds;
    counter.textContent = `${minutes}:${seconds}`;
    time--;
  }

  const startCount = () => {

    const timer = setInterval(() => {

      updateCount();

      if (time <= 0) {
        clearInterval(timer);
        counter.textContent = `00:00`;
      }


    }, 1000);
  };

  gameLink.addEventListener(`click`, () => {
    requestAnimationFrame(startCount);
  });

  document.addEventListener(`DOMContentLoaded`, () => {
    if (window.location.hash === `#game`) {
      requestAnimationFrame(startCount);
    }
  });
};


// /* eslint-disable no-console */
// export default () => {

//   const gameLink = document.querySelector(`a[data-href='game']`);
//   const htmlTimer = document.querySelectorAll(`.game__counter span`);
//   const htmlTimerMin = htmlTimer[0];
//   const htmlTimerSec = htmlTimer[1];

//   const startCount = () => {
//     const start = Date.now();

//     let min = String(4).padStart(2, 0);
//     let sec = String(59).padStart(2, 0);

//     htmlTimerMin.textContent = min;
//     htmlTimerSec.textContent = sec;

//     const timer = setInterval(() => {
//       const timeLeft = start + 299000;
//       const timePassed = Date.now() - start;
//       const roundSecs = Math.round(timePassed / 1000);

//       switch (true) {
//         case htmlTimerSec.textContent <= 0:
//           htmlTimerSec.textContent = 59;
//           break;

//         case htmlTimerSec.textContent <= 10:
//           htmlTimerSec.textContent = sec - roundSecs;
//           break;

//         default:
//           htmlTimerSec.textContent = sec - roundSecs;
//       }

//       if (htmlTimerSec.textContent <= `00`) {
//         htmlTimerMin.textContent = min - 1;
//       }

//       if (new Date() >= timeLeft) {
//         clearInterval(timer);
//       }


//     }, 1000);
//   };

//   gameLink.addEventListener(`click`, () => {
//     requestAnimationFrame(startCount);
//   });

//   document.addEventListener(`DOMContentLoaded`, () => {
//     if (window.location.hash === `#game`) {
//       requestAnimationFrame(startCount);
//     }
//   });
// };
