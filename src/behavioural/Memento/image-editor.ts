//originator

import { ConcreteMemento } from './concrete-memento'
import { Memento } from './memento'

export class ImageEditor {
  constructor(private filePath: string, private fileFormat: string) {}

  convertFormatTo(format: string): void {
    this.fileFormat = format
    this.filePath = `${this.filePath.split('.')[0]}.${format}`
  }

  save(): Readonly<Memento> {
    const date = new Date()
    return new ConcreteMemento(
      date.toISOString(),
      date,
      this.filePath,
      this.fileFormat
    )
  }

  restore(memento: Memento) {
    const concreteMemento = memento as ConcreteMemento
    this.fileFormat = concreteMemento.getFileFormat()
    this.filePath = concreteMemento.getFilePath()
  }
}
