import { MyDatabaseFunction } from '../db/my-database-function'
import { myDatabase as myDatabaseA } from './module_a'
const myDatabase = MyDatabaseFunction

myDatabase.add({ name: 'leander', age: 12 })
myDatabase.add({ name: 'maria', age: 43 })
myDatabase.add({ name: 'reafl', age: 23 })
myDatabase.show()

console.log(myDatabase === myDatabaseA)
