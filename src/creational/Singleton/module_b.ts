import { MyDatabaseClassic } from './db/my-database-classic'
import { db1 as myDatabase } from './module_a'
const db1 = MyDatabaseClassic.instance

db1.add({ name: 'leander', age: 12 })
db1.add({ name: 'maria', age: 43 })
db1.add({ name: 'reafl', age: 23 })
db1.show()

console.log(db1 === myDatabase)
