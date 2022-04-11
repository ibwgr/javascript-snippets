
import {Person, Store} from './admin.mjs'

const person1 = new Person("Martinez", "Claudia")
const person2 = new Person("Martinez", "Marco")
const person3 = new Person("Martinez", "Antonio")
const person4 = new Person("Rumhold", "Eva")
const person5 = new Person("Germann", "Simon")
let persons = [person1, person2, person3]

const store = new Store(persons)

store.add(person4)
console.log(persons)

store.remove(person1)
console.log(persons)
console.log("*********************************")

let found = store.findAll((person) => person.nachname === "Martinez")
console.log(found)

