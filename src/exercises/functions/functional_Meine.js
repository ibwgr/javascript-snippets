/*
1
Schreibe eine Funktion die alle Zahlen eines Arrays summiert. \
z.B. `sum([1,2,3]) => 6` \
Schreibe eine funktionale und eine imperative Variante.\
Schreibe die Signatur als Deklaration.
 */
{//imperativ

    function sum(arr) {
        let hilfszahl = 0;
        for (let i = 0; i < arr.length; i++) {
            hilfszahl = hilfszahl + arr[i];
        }
        return hilfszahl;
    }

    let arr1 = [1, 2, 3]
    console.log(sum(arr1))      //6

}

{//funktional           lambda, reduse,filter, map, forOf, ForEach

    function myfunction(total, arr) {
        return total + arr
    }

    let arr2 = [1, 2, 3]
    console.log(arr2.reduce(myfunction))    //6

    //oder so
    console.log(arr2.reduce((sum, val) => sum + val))    //6
}

//--------------------------------------------------------------------------------------------------
/* 2
Schreibe eine Funktion die einen Array von Zahlen entgegennimmt und einen Array mit Booleans zurückgibt. \
Die Funktion ermittelt für jede Zahl ob diese gerade ist oder nicht. \
z.B. `even([1,2,3]) => [false, true, false]`
*/

//imperative
{
    let arr1 = [1, 2, 3, 4];

    function myfunction(arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                result.push(true);
            } else {
                result.push(false);
            }
        }
        return result;
    }

    console.log(myfunction(arr1));      //[false, true, false, true]
}


//funktional
{
    let arr1 = [1, 2, 3, 4];

    function myfunction(arr) {
        return arr.map((i, arr) => i % 2 === 0)
    }

    console.log(myfunction(arr1));      //[false, true, false, true]
}
//funktional
{
    // let arr1 = [1,2,3,4];
    //
    // function myfunction(arr){
    //     let result = arr.filter(i => i%2===0);
    //     return result;
    // }
    //
    // console.log(myfunction(arr1));      //[2,4]
}


//---------------------------------------------------------------------------------------------------
/*
3.1
Implementiere eine Funktion `filter(in: Array<A>, predicate: (value: A) => Boolean): Array<A>`. \
Teste ob diese funktioniert :).
 */
{


    let containers = [2, 0, false, "", '12', true];

    function myfunction(arr) {
        let result = containers.filter(function (v) {
            return "boolean" === typeof v
        });
        return result;
    }

    console.log(myfunction(containers)); //[false, true]

    // var containers = [2,0, false ,"", '12', true];
    // var containers = containers.filter(function(v) { return "boolean" === typeof v});
    // console.log(containers); //[false, true]


    //
    //
    // function myfunction(arr) {
    //     let resullt = arr.filter(1, 2)
    //     return result;
    // }
    //
    // arr1 = [1, 2, 3];
    // console.log(myfunction(arr1))

}

//----------------------------------------------------------------------------------------------------
/*
3.2
Implementiere eine Funktion `map(in: Array<A>, mapper: (value: A) => B): Array<B>`. \
Teste ob diese funktioniert :).
 */
{
    function map(arr) {

    }


}

