import { CreateEnterpriseVehicleCustomerFactory } from './factories/enterprise-customer-vehicle-factory'
import { CreateIndividualVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory'

const enterpriseFactory = new CreateEnterpriseVehicleCustomerFactory()
const individualFactory = new CreateIndividualVehicleCustomerFactory()

const car1 = enterpriseFactory.createVehicle('Porsche', 'Leander')
const car2 = individualFactory.createVehicle('Jetta', 'Leticia')

car1.pickUp()
car2.pickUp()
