# Functions

## Basic

### 1

Erstelle ein Modul namens `admin`, dass
- eine Klasse Person
- und eine Klasse Store
zur Verfügung stellt.

So soll die Klassen-struktur aussehen:

```
Person(name, vorname) // nur zwei Felder, keine Methoden

Store(items) // items kann z.B. ein Array von Personen sein
Store.add(item)
Store.remove(item)
Store.findAll(item => boolean): Array<item>
```

Erläuterung zur `findAll`-Signatur: Die Methode `findAll` erwartet als Argument eine Funktion,
welche als Argument ein item entgegennimmt und ein Boolean retourniert. Eine sogenannte Prädikatfunktion oder einfach nur Prädikat (predicate auf engl.).

### 2
Schreibe ein Programm client.js, welches einen `Store` verwendet, um Personen darin zu speichern, löschen und suchen.
