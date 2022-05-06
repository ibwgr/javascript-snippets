let zahlen = [5,6,7,8]

// 1
{
    // Funktional
    function sum(array){
        // Startwert || vorangegangener Wert:sum
        // Aktuelle Zahl im Array:val
        return array.reduce((sum,val) =>sum + val, 0);
    }
    console.log(sum(zahlen))

    // Imperativ
    let summe = zahlen.reduce((sum, val) =>sum + val)
    console.log(summe)
}

//2
{
    //Funktional
    function even(array){
        // Current number in iteration:value
        return array.map(value => value%2 === 0 )
    }

    console.log(even(zahlen))

    // Imperativ
    // Current number in iteration:v
    let isEvenArr = zahlen.map(v => v%2 === 0)
    console.log(isEvenArr)
}

// 3.1
{
    /**
     *
     * @param arr   Array das gefiltert werden soll
     * @param fn    Funktion die mitgegeben wird um zu prüfen ob Kriterium erfüllt wird
     */

    function myFilter(arr,fn){
        let ret = []
        arr.forEach(v =>{
            if(fn(v)) ret.push(v)
        })
        return ret
    }

    let filtered = myFilter(zahlen,(n)=>n>6)
    console.log(filtered)
}



