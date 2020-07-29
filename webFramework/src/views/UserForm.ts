type Function = () => void

export class UserForm {
  constructor(public parent: Element) {}

  eventsMap = (): { [key: string]: Function} => {
    return {
      'click:button': this.onButtonClick
    }
  }

  onButtonClick = (): void => {
    console.log('Hi there!');
  }

  template(): string {
    return `
      <div> 
        <h1>User form</h1>
        <input />
      </>
    `
  }

  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}