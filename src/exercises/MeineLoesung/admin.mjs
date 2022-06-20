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
        const foundItems = []
        for (const item of this.items) {
            //matcherfunktion = true, dann push item in foundItems Array
            if (matcher(item)){
              foundItems.push(item)
            }
        }
     return foundItems
    }
}
