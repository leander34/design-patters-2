import { EmailValidatorProtocol } from './email-validator-protocol'
import isEmail from 'validator/lib/isEmail'

export class EmailValidatorClassAdaptor implements EmailValidatorProtocol {
  isEmail(value: string): boolean {
    return isEmail(value)
  }
}
