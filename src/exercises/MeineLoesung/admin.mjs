export class Person {
    nachname
    vorname

    constructor(nachname, vorname) {
        this.nachname = nachname
        this.vorname = vorname
    }
}

export class Store {
    items = []

    constructor(items) {
        this.items = items
    }

    add(item) {
        this.items.push(item)
    }

    remove(item) {
        let indexToRemove = this.items.indexOf(item)
        this.items.splice(indexToRemove, 1)
    }

    findAll(matcher) {
        let found = false
     if (matcher.length > 0){
         found = true
     }
        return found
    }
}
