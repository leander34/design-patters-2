import { ImageEditor } from './image-editor'
import { Memento } from './memento'

export class ImageEditorBackupManager {
  private mementos: Memento[] = []
  private mementosRedo: Memento[] = []
  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    console.log(`BACKUP: salvando o estado de ImageEditor`)
    this.mementos.push(this.imageEditor.save())
  }

  undo(): void {
    const memento = this.mementos.pop()

    if (!memento) {
      return console.log('BACKUP: No mementos')
    }
    this.mementosRedo.push(memento)
    this.imageEditor.restore(memento)
    console.log(`BACKUP: ${memento.getName()} foi restaurado com sucesso.`)
    // console.log(this.mementosRedo)
  }

  redo(): void {
    const memento = this.mementosRedo.pop()

    if (!memento) {
      return console.log('BACKUP: No mementos')
    }
    this.mementos.push(memento)
    this.imageEditor.restore(memento)
    console.log(`BACKUP: ${memento.getName()} foi restaurado com sucesso.`)
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento)
    }
  }
}
