import { EmailValidatorClassAdaptor } from './validation/email-validator-class-adapter'
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter'
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol'

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Valido')
  } else {
    console.log('Invalido')
  }
}

validaEmailClass(
  new EmailValidatorClassAdaptor(),
  'leandersilveira@hotmail.com'
)

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string
): void {
  if (emailValidator(email)) {
    console.log('Valido')
  } else {
    console.log('Invalido')
  }
}
validaEmailFn(emailValidatorFnAdapter, 'leandersilveira@hotmail.com')
