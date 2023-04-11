import { DeliveryLocation } from './delivery-locatition'

export type DeliveryLocationData = {
  readonly street: string
  readonly city: string
}

export type DeliveryLocationDictionary = { [key: string]: DeliveryLocation }
