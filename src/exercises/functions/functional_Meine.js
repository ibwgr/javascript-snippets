/*
1
Schreibe eine Funktion die alle Zahlen eines Arrays summiert. \
z.B. `sum([1,2,3]) => 6` \
Schreibe eine funktionale und eine imperative Variante.\
Schreibe die Signatur als Deklaration.
 */
{//imperativ
    //sumFunction::(arr)=>number
    //sumFunction(in: arr, (i => sum+i)):sum
    //sumFunction(in: arr, (i,sum => sum+i)):sum
    function sumFunction(arr) {
        let hilfszahl = 0;
        for (let i = 0; i < arr.length; i++) {
            hilfszahl = hilfszahl + arr[i];
        }
        return hilfszahl;
    }

    let arr1 = [1, 2, 3]
    console.log(sumFunction(arr1))      //6

}

{//funktional           lambda, reduse,filter, map, forOf, ForEach

    //Signatur als Dekleration:
    // reduce(Array<A>,(Summe,i_Array_currentvalue)=>Summe+i_Array_currentvalue):Summe
    // reduce(Array<A>,(sum,i)=>sum+i):sum

    function myfunction(total, arr) {
        return total + arr
    }

    let arr2 = [1, 2, 3]
    console.log(arr2.reduce(myfunction))    //6

    //oder so
    console.log(arr2.reduce((sum, i) => sum + i))    //6
}

//--------------------------------------------------------------------------------------------------
/* 2
Schreibe eine Funktion die einen Array von Zahlen entgegennimmt und einen Array mit Booleans zurückgibt. \
Die Funktion ermittelt für jede Zahl ob diese gerade ist oder nicht. \
z.B. `even([1,2,3]) => [false, true, false]`
*/

//imperative
{
    //myfunction::(arr)=>i,Boolean=>arrKopi
    //myfunction::(arr)=>arr
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
    //Signatur als Dekleration:
    //  map(Array<A>,(i=>A)): Array<A_kopie'>
    //`map(in: Array<A>, mapper: (value: A) => B): Array<B>`

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
    //imperativ
    //filter(in: Array<A>, predicate: (value: A) => Boolean): Array<A>`
    function filter(arr){
       for(let i = 0; i<arr.length;i++){
           arr[i] = true
       }
        return arr;
    }

    let arr1 = [1,2,3]
    console.log(filter(arr1));  //[true,true,true]

}

{
    //functional
    //filter(in: Array<A>, predicate: (value: A) => Boolean): Array<A>`
    let arr1 = [1,8,3,true,8,2];
    function myfunction(arr){
        return arr.filter(i => i === true)//8
    }
    //arr1.filter(function(arr[1]){return true === 1});
    //arr1.filter(Boolean);
    console.log(myfunction(arr1));//true
    //console.log(arr1);

}

{
    let containers = [2, 0, false, "", '12', true];

    function myInternet(arr) {
        let result = containers.filter(function (v) {
            return "boolean" === typeof v
        });
        return result;
    }

    console.log(myInternet(containers)); //[false, true]

}

//----------------------------------------------------------------------------------------------------
/*
3.2
Implementiere eine Funktion `map(in: Array<A>, mapper: (value: A) => B): Array<B>`. \
Teste ob diese funktioniert :). //
 */
{
    //imperative
    let arr1 = [1,2,3]
    function map(arr) {
        //let x = 'x'
        let arr2neu= [];
        for(let i = 0;i<arr.length;i++){
            arr2neu[i]=arr[i];
        }
        return arr2neu;
    }
    console.log(map(arr1)); //[1,2,3]    //[ 'x', 'x', 'x' ]

}

