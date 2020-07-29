type Function = () => void

export class UserForm {
  constructor(public parent: Element) {}

  eventsMap = (): { [key: string]: Function} => {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover
    };
  }

  onButtonClick = (): void => {
    console.log('Hi there!');
  }

  onHeaderHover = (): void => {
    console.log('Hovering!')
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
        <input />
        <button> Click-me! </button>
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