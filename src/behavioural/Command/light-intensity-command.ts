import { SmartHouseCommand } from './smart-house-command'
import { SmartHouseLight } from './smart-house-light'

export class LightIntensityCommand implements SmartHouseCommand {
  constructor(private readonly smartHouseLight: SmartHouseLight) {}

  execute(): void {
    const intensity = this.smartHouseLight.increaseIntensity()
    console.log(`A intensidade de ${this.smartHouseLight.name} é ${intensity}`)
  }

  undo(): void {
    const intensity = this.smartHouseLight.decreaseIntensity()
    console.log(`A intensidade de ${this.smartHouseLight.name} é ${intensity}`)
  }
}
