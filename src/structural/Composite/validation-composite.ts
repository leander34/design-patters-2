export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean
}

export class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') {
      return false
    }
    return /@/.test(value)
  }
}

export class ValidateString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string'
  }
}

export class ValidateNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'number'
  }
}

export class ValidateStringWithNumbers extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') {
      return false
    }
    return /\d+/.test(value)
  }
}

export class ValidationComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = []
  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validate = child.validate(value)
      if (!validate) return false
    }
    return true
  }

  add(validation: ValidationComponent[]): void {
    this.children.push(...validation)
  }
}

const validateEmail = new ValidateEmail()
const validateNumber = new ValidateNumber()
const validateString = new ValidateString()
const validateStringWithNumbers = new ValidateStringWithNumbers()

const validationComposite = new ValidationComposite()

// validationComposite.add([validateEmail, validateNumber, validateString])
validationComposite.add([
  validateString,
  validateStringWithNumbers,
  validateEmail,
])
console.log(validationComposite.validate('dadada@31'))
