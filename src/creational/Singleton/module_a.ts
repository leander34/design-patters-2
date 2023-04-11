import { MyDatabaseClassic } from './db/my-database-classic'

const db1 = MyDatabaseClassic.instance

db1.add({ name: '11', age: 12 })
db1.add({ name: '33', age: 43 })
db1.add({ name: '44', age: 23 })
db1.show()
// db2.show()

export { db1 }
