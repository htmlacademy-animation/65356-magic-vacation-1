export class LetterAnimation {
  constructor(selector, time, activeClass, prop) {
    this._TIME_SPACE = 100;

    this._selector = selector;
    this._time = time;
    this._activeClass = activeClass;
    this._prop = prop;

    this._element = document.querySelector(this._selector);
    this._transitionDelay = 0;

    this.prepareText();
  }

  createSpan(letter) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    span.style.transition = `${this._prop} ${this._time}ms ease-in-out ${this._transitionDelay}ms`;
    this._transitionDelay += 20;
    return span;
  }

  prepareText() {
    if (!this._element) {
      return;
    }

    const text = this._element.textContent.trim().split(` `).filter((latter) => latter !== ``);

    const content = text.reduce((parent, word) => {
      const wordElement = Array.from(word).reduce((fragment, latter) => {
        fragment.appendChild(this.createSpan(latter));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`text-word`);
      wordContainer.appendChild(wordElement);
      parent.appendChild(wordContainer);
      return parent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._activeClass);
  }

  destroyAnimation() {
    this._element.classList.remove(this._activeClass);
  }
}
