interface Observable {
  subscribe(...observers: Observer[]): void
  unsubcribe(observer: Observer): void
  notify(): void
}

interface Observer {
  update(...args: unknown[]): void
}

class InputObservable implements Observable {
  private observers: Observer[] = []

  constructor(public element: HTMLInputElement) {
    console.log(element)
  }
  subscribe(...observers: Observer[]): void {
    observers.forEach((observer) => {
      if (!this.observers.includes(observer)) this.observers.push(observer)
    })
  }

  unsubcribe(observer: Observer): void {
    const index = this.observers.indexOf(observer)

    if (index === -1) return
    this.observers.splice(index, 1)
  }

  notify(): void {
    this.observers.forEach((observer) => observer.update(this))
  }
}

class ParagraphObsever implements Observer {
  constructor(public element: HTMLParagraphElement) {}

  update(observable: InputObservable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value
    }
  }
}

class DivObsever implements Observer {
  constructor(public element: HTMLDivElement) {}

  update(observable: InputObservable): void {
    if (observable instanceof InputObservable) {
      this.element.innerText = observable.element.value
    }
  }
}

// client-code

function makeInput(): HTMLInputElement {
  const input = document.createElement('input')
  input.id = 'leander'
  //   input.className = 'lean'
  //   input.setAttribute('', 'lee')
  //   console.log(input.classList.contains('lean'))
  //   input.classList.toggle('lean')
  //   input.classList.toggle('lean')
  //   console.log(input.classList.contains('lean'))
  document.body.appendChild(input)
  return input
}

function makeParagraph(): HTMLParagraphElement {
  const paragraph = document.createElement('p')
  paragraph.innerText = 'Inicial'
  document.body.appendChild(paragraph)
  return paragraph
}

function makeDiv(): HTMLDivElement {
  const div = document.createElement('div')
  div.innerText = 'Texto da div'
  document.body.appendChild(div)
  return div
}
// makeInput()
// const input = document.querySelector('#leander') as HTMLInputElement
// const paragraph = document.querySelector('#paragraph') as HTMLParagraphElement
const inputObservable = new InputObservable(makeInput())
const p1 = new ParagraphObsever(makeParagraph())
const p2 = new ParagraphObsever(makeParagraph())
const div1 = new DivObsever(makeDiv())
inputObservable.subscribe(p1, p2, div1)
inputObservable.unsubcribe(p2)
inputObservable.element.addEventListener('keyup', function (e) {
  inputObservable.notify()
})
