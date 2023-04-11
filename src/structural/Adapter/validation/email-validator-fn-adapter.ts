import { EmailValidatorFnProtocol } from './email-validator-protocol'
import isEmail from 'validator/lib/isEmail'

export const emailValidatorFnAdapter: EmailValidatorFnProtocol = (value) => {
  return isEmail(value)
}
