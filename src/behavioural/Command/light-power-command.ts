import { SmartHouseCommand } from './smart-house-command'
import { SmartHouseLight } from './smart-house-light'

export class LightPowerCommand implements SmartHouseCommand {
  constructor(private readonly smartHouseLight: SmartHouseLight) {}

  execute(): void {
    this.smartHouseLight.on()
  }
  undo(): void {
    this.smartHouseLight.off()
  }
}
