import { User } from "../models/User";

type Function = () => void

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  eventsMap = (): { [key: string]: Function} => {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover,
      'click:.set-age': this.onSetAgeClick
    };
  }

  onButtonClick = (): void => {
    console.log('Hi there!');
  }

  onHeaderHover = (): void => {
    console.log('Hovering!');
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  }

  bindEvents = (fragment: DocumentFragment): void => {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      // Destructuring array:
      // 'click:button' --> [click, button]
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach( element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  template(): string {
    return `
      <div> 
        <h1>User form</h1>
        <div> User name: ${this.model.get('name')} </div>
        <div> User age: ${this.model.get('age')} </div>
        <input />
        <button> Click-me! </button>
        <button class="set-age"> Set Random Age </button>
      </>
    `
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}