import { SmartHouseCommand } from './smart-house-command'

export class SmartHouseApp {
  private commands: { [key: string]: SmartHouseCommand } = {}

  addCommand(key: string, command: SmartHouseCommand): void {
    if (key in this.commands) {
      return console.log('Botão já registrado no aplicativo')
    }
    this.commands[key] = command
  }

  executeCommand(key: string): void {
    if (!(key in this.commands)) {
      return console.log('Botão não registrado no aplicativo')
    }

    this.commands[key].execute()
  }

  undoCommand(key: string): void {
    if (!(key in this.commands)) {
      return console.log('Botão não registrado no aplicativo')
    }

    this.commands[key].undo()
  }
}
