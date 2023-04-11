import { ImageEditor } from './image-editor'
import { ImageEditorBackupManager } from './image-editor-backup-manager'

const imageEditor = new ImageEditor('/images/leander.png', 'png')
const backupManager = new ImageEditorBackupManager(imageEditor)

backupManager.backup()

imageEditor.convertFormatTo('gif')
backupManager.backup()

imageEditor.convertFormatTo('bmp')
backupManager.backup()

imageEditor.convertFormatTo('jpg')
backupManager.backup()

// console.log(imageEditor)
backupManager.undo()
// backupManager.undo()
console.log(imageEditor)
// console.log(imageEditor)

// console.log('redo')
backupManager.redo()
// console.log(imageEditor)

backupManager.showMementos()
