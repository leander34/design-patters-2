import { MyDatabaseModule } from '../db/my-database-module'

const myDatabase = MyDatabaseModule
myDatabase.add({ name: '11', age: 12 })
myDatabase.add({ name: '33', age: 43 })
myDatabase.add({ name: '44', age: 23 })
// myDatabase.show()

export { myDatabase }
