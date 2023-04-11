import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol'

export class AdminUser implements SystemUserProtocol {
  firstName: string
  userName: string
  constructor(firstName: string, userName: string) {
    this.firstName = firstName
    this.userName = userName
  }
  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve, reject) =>
      setTimeout(
        () =>
          resolve([
            {
              street: 'Guaporé',
              number: 127,
            },
            {
              street: 'Av. Brasil',
              number: 1272,
            },
          ]),
        2000
      )
    )
  }
}
