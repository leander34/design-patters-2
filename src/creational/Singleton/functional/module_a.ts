import { MyDatabaseFunction } from '../db/my-database-function'

const myDatabase = MyDatabaseFunction
myDatabase.add({ name: '11', age: 12 })
myDatabase.add({ name: '33', age: 43 })
myDatabase.add({ name: '44', age: 23 })
// myDatabase.show()

export { myDatabase }
