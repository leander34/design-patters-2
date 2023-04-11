import { LightIntensityCommand } from './light-intensity-command'
import { LightPowerCommand } from './light-power-command'
import { SmartHouseApp } from './smart-house-app'
import { SmartHouseLight } from './smart-house-light'
// receiver
const bedroomLight = new SmartHouseLight('Luz quarto')
const bathroomLight = new SmartHouseLight('Luz banheiro')
//command
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight)
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight)
const bedroomIntensityCommand = new LightIntensityCommand(bedroomLight)
// invoker
const smartHouseApp = new SmartHouseApp()
smartHouseApp.addCommand('btn-1', bedroomLightPowerCommand)
smartHouseApp.addCommand('btn-2', bathroomLightPowerCommand)
smartHouseApp.addCommand('btn-3', bedroomIntensityCommand)

smartHouseApp.executeCommand('btn-1')
smartHouseApp.undoCommand('btn-1')

smartHouseApp.executeCommand('btn-2')
smartHouseApp.undoCommand('btn-2')

smartHouseApp.executeCommand('btn-3')
smartHouseApp.undoCommand('btn-3')
