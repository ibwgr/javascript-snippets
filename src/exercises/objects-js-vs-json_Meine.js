/*
# Objects vs JSON

# 1
Definiere ein Array von mehreren User Objekten. Jeder User hat einen Namen und eine Punktezahl. \
Sortiere den Array anhand der Punktezahl aufsteigend.

Tip: Dokumentation von Array auf MDN studieren, um herauszufinden wie man sortiert :)
 */
{
    let arrUser = [];

    user1 = { name: "Hans", punkte: 33}
    user2 = { name: "Dori", punkte: 46}
    user3 = { name: "zoro", punkte: 2}

    arrUser.push(user1);
    arrUser.push(user2);
    arrUser.push(user3);

    console.log(arrUser);

    arrUser.sort(function(a, b) {
        return a.punkte - b.punkte;
    });
    console.log(arrUser)
    //oder
    console.log(arrUser.sort((a, b) => a.punkte - b.punkte))


    //----------------------------------------------------------
    /*
    # 2
Erstelle einen JSON String der 3 top Scorer. \
Finde mehrere Varianten, um die Top 3 auszulesen
     */





    //console.log(arrUser.sort(function (a,b)=>a-b))
    //console.log(arrUser.sort(punkte))


    function compareNumbers(a, b) {
        return a.punkte - b.punkte;
    }
    console.log(arrUser.sort(compareNumbers))
    console.log(arrUser.sort((a, b) => a.punkte - b.punkte))




    arrUser.sort((a, b) => {
        return a.age - b.age;
    });

    arrUser = (a, b) => {
        log(a, b)
        return summ(a.punkte, b.punkte)
    }
    console.log(arrUser)


    var stringArray = ['Blue', 'Humpback', 'Beluga'];
    var numericStringArray = ['80', '9', '700'];
    var numberArray = [40, 1, 5, 200];
    var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

    function compareNumbers(a, b) {
        return a - b;
    }

    console.log('stringArray:', stringArray.join());
    console.log('Sorted:', stringArray.sort());

    console.log('numberArray:', numberArray.join());
    console.log('Sorted without a compare function:', numberArray.sort());
    console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));

    console.log('numericStringArray:', numericStringArray.join());
    console.log('Sorted without a compare function:', numericStringArray.sort());
    console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers));

    console.log('mixedNumericArray:', mixedNumericArray.join());
    console.log('Sorted without a compare function:', mixedNumericArray.sort());
    console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));
}