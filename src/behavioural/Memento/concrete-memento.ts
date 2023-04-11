import { Memento } from './memento'

export class ConcreteMemento implements Memento {
  constructor(
    private name: string,
    private date: Date,
    private readonly filePath: string,
    private readonly fileFormat: string
  ) {}
  getName(): string {
    return this.name
  }

  getDate(): Date {
    return this.date
  }

  getFilePath(): string {
    return this.filePath
  }

  getFileFormat(): string {
    return this.fileFormat
  }
}
