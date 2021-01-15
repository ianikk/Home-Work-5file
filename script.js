// //
// // /*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Exercitiu 1: Încălzire! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/
// //
// //
// // /*
// // Când efectuați aceste sarcini, vă recomandăm să
// //  utilizați console.log pentru a testa
// //  codul dvs. pentru a vă asigura că funcționează corect.*/
// //
// // /*
// // Sarcina 1a - Vârsta votului
// // Urmează următoarea instrucțiune:
// //     1. Creați o variabilă numită voteAge și
// //     atribuiți-i o valoare
// //     2. In consola va aparea true  dacă vârsta
// //     este de 18 ani sau mai mare
// //     SUGESTIE: nu este necesară nicio funcție
// // */
// //
let voteAge = prompt('Ani');
if(voteAge <= 18){
    console.log('True')
}else {
    console.log('False')
};
//
// //
// //
// // /*
// // Sarcina 1b - Valori
// // Urmează următoarele instrucțiuni:
// //     1. Declarați două variabile și
// //      atribuiți-le valori
// //     2. Folosiți o conditie pentru a modifica
// //     valoarea primei variabile pe baza
// //      valorii atribuite celei de-a doua variabila
// //     3. In consola va aparea  valoarea  primei variabile
// //     SUGESTIE: nu este necesară nicio funcție
// // */
let primaValoare = 10;
let aDouaValoare = 15;

console.log(primaValoare);
console.log(aDouaValoare);
{
    let local = primaValoare
    primaValoare = aDouaValoare;
    console.log(local);
    // console.log(primaValoare);
    // aDouaValoare = local;
}

//
//
// // /*
// // Sarcina 1c - Convert Strings to Numbers
// // Urmează următoarele instrucțiuni:
// //     1. Declarați o variabilă de tip
// //     string cu valoarea „1999”
// //     2. Convertiți valoarea stringului „1999”
// //     într-o valoare întreagă din 1999
// //     3. In consola va aparea rezultatul
// //     SUGESTIE: căutați metoda Number
// // */
//
let str = "1999";
    parseInt(str);
console.log(str);


// // /*
// // Sarcina 1d - Înmulțirea
// //
// // Urmează următoarele instrucțiuni:
// //     1. Creati funcția multiply de mai jos și transmiteți-i două numere
// //     2. Primiți numerele din parametrii: a și b
// //     3. Înmulțiți a și b și returnați rezultatul
// // */
//
function multiply(a,b){
    return a*b;

}

console.log(multiply(3, 3));
// //
// //
// // /*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Exercitiu 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
// //
// // //Vârsta în DogYears
// // /*
// // Urmează următoarele instrucțiuni:
// //     1. Invocați funcția dogYears de mai jos și transmiteți un parametru vârstă
// //     2. Folosiți valoarea primită pentru a calcula vârsta unui câine in ani (1 an uman este egal cu 7 ani la câini )
// //     3. Returnează vârsta  calculată
// // */
// //
function dogYears(virsta){
    return virsta*7
}
console.log(dogYears(13));
// //
// //
// //
// // /*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Exercitiu 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
// //
// // //Alimentator pentru câini - În funcție de
// // // greutatea și vârsta lor, trebuie să știm
// // // câte kilograme de alimente să ne
// // // hrănească câinele în fiecare zi!
// // // / *
// // // Utilizați funcția hungryDog și cerințele de hrănire de mai jos pentru a face următoarele:
// // //   1. Creati funcția hungryDog de mai jos și dați-i un parametru a greutății în kilograme
// // //   2. De asemenea, treceți la hungryDog un parametru de vârstă în ani (notă: dacă câinele este un cățeluș,
// // vârsta va fi zecimală. De exemplu: trei luni = 3/12 sau .25)
// // //   3. Faceți calculele corespunzătoare și returnați numărul de kilograme de hrană crudă
// // pentru a hrăni câinele / cățelușul într-o zi
// // //
// // //   REȚINEȚI: Acest program ar trebui să gestioneze corect vârstele și greutățile adulților ȘI cățelușilor
// // //
// // //   Cerințe de hrănire:
// // //   Câini adulți mai mare de un an are 5 lbs(Pounds) - 5% din greutatea lor corporală
// // //      6 - 10 lbs(Pounds) - 4% din greutatea lor corporală
// // //      11 - 15 lbs(Pounds) - 3% din greutatea lor corporală
// // //      > 15lbs(Pounds) - 2% din greutatea corporală
// // //   Puii sub 1 an
// // //      2 - 4 luni 10% din greutatea corporală
// // //      4 - 7 luni 5% din greutatea corporală
// // //      7 - 12 luni 4% din greutatea corporală
// // //
// // //   NOTĂ: Dacă se face corect, o greutate de 15 lbs și vârsta de 1 an ar reveni 0,44999999999999996*/
// //
function hungryDog(lbs, age) {
    if (age >= 1 && lbs === 5) {
        return lbs * 5 / 100;
    } else if (age >= 1 && lbs > 5 && lbs < 11) {
        return lbs * 4 / 100
    } else if (age >= 1 && lbs > 10 && lbs < 16) {
        return lbs * 3 / 100
    } else if (age >= 1 && lbs > 15) {
        return lbs * 2 / 100
    } else if (age >= 2 / 12 && age <= 4 / 12) {
        return lbs * 10 / 100
    } else if (age >= 4 / 12 && age <= 7 / 12) {
        return lbs * 5 / 100
    } else if (age >= 7 / 12 && age <= 12 / 12) {
        return lbs * 4 / 100
    } else {
        return false
    }
}

console.log(hungryDog(15, 1))
// //
// //
// //
// // /*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Exercitiu 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
// //
// // // Piatra, hârtie, foarfeca - Să ne jucăm împotriva
// // // computerului!
// // // / *
// // // Creați o variabilă globală care generează aleatoriu
// // // alegerea computerului
// // // Utilizați Math.random pentru a determina alegerea
// // // computerului (Math.random dă un număr aleatoriu
// // // între 0 și 1)
// // // SUGESTIE: Deși puteți completa acest lucru doar cu
// // // condițiile bazate pe string, vă poate ajuta să
// // // comparați alegerea cu un număr atunci când utilizați
// // // Math.random ()
// // // Utilizați funcția de joc de mai jos pentru a face
// // // următoarele:
// // //    1. Primiți 2 parametri alegerea utilizatorului și
// // //    alegerea computerului
// // //    2. Returnati dacă utilizatorul a câștigat, a pierdut
// // //    sau a egalat pe baza acestor reguli de joc descrise
// // //    mai jos - String-urile returnate trebuie să se
// // //    potrivească exact cu șirurile de mai jos.
// // //     - câștiga ar trebui să întoarcă "câștigi!"
// // //     - pierde ar trebui să întoarcă "pierzi!"
// // //     - Egal ar trebui să returneze "este egalitate"
// // //
// // //    REGULI JOCULUI: foarfeca bate hârtia |
// // //    Hârtia bate Piatra | Piatra bate foarfeca | Sau există o egalitate
// // //
// // //    SUGESTIE: Amintiți-vă că ordinea în care trecem
// // //    în argumentele noastre contează atunci când vine
// // //    vorba de parametri*/
// //
let joc = ['piatra', 'foarfece', 'hirtie'];
let raspuns = Math.round(Math.random(joc) * 2);
let aleator = joc[raspuns];
console.log(joc[raspuns]);


const utilizator = prompt('Alegeti un element: piatra, foarfece, hirtie!');
// // function game(user, computer){
// //     /*adauga cod aici*/
// // }
// //
// //
// //
// // /*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Exercitiu 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
// //
// // //Convertor Km
// // // // Sarcina 5a - KM in mile
// // // / *
// // // Folosind funcția miles de mai jos, faceți următoarele:
// // //    1. Primeste un numar de kilometri
// // //    2. Convertiți numărul de kiolmetre primite în mile
// // //    3. Returnati numărul de mile*/
// //
let mil = prompt('Numar de km pentru convertare in mile');
function miles(mil){
    return mil*0.62137;
}

console.log(miles(mil));

//
// //
// // //Sarcina 5b - Picioare in CM
// // // / *
// // // Folosind funcția feet de mai jos faceți următoarele:
// // //    1. Primeste un numar de cm
// // //    2. Convertiți numărul de cm în picioare
// // //    3. Întoarceți numărul de picioare*/
// //
let cm = prompt("Numar de centimetri")
function feet(x){

   return x*0.032808


}

console.log(feet(cm));

//
// // /*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
// //
// // //Calculator de note
// // // / *
// // // Folosind funcția de grade de mai jos faceți următoarele:
// // //    1. Primește un scor din 100
// // //    2. Returnați nota corespunzătoare literei urmând
// // //    această scală de note:
// // //     90-100 ar trebui să returneze „ai un A”
// // //     80-89 ar trebui să returneze „ai un B”
// // //     70-79 ar trebui să returneze „ai un C”
// // //     60-69 ar trebui să returneze „ai un D”
// // //     mai jos ar trebui să returneze „ai un F”*/
let nota = prompt("Ce punctaj ai acumulat???")
function grade(scor){
    let litera;
    if(scor>= 90 && scor <= 100){
        litera ="A";
    }else if(scor >= 80 && scor <= 89){
        litera = "B";
    }else if(scor >= 70 && scor <= 79) {
        litera = "D";
    }else if (scor >= 60 && scor <= 69){
        litera = "D";
    }else if(scor >= 59 ){
        litera = "F";
    }
    return litera;
}

console.log(grade(nota));

// //
// // /*💪💪💪💪💪💪💪💪💪💪 Puternic 💪💪💪💪💪💪💪💪💪💪*/
// //
// // //Contor vocal - Câte vocale există?
// // // / *
// // // Folosind funcția VowelCounter de mai jos, faceți
// // // următoarele:
// // //    1. Primiți un string ca parametru
// // //    2. Numărați și returnați numărul de vocale din
// // //    stringul respectiv.
// // //    Ar trebui să se ia atât  vocale cu majuscule, cât
// // //    și de vocale minuscule.
// // //    SUGESTIE - poate fi necesar să studiați Array
// // //    SUGESTIE - încercați să căutați metoda .includes ()*/
// //
// //
//
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function vowelCounter(str) {
    let counter = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)){
            counter++
        }

    }
    console.log(`Aici e u text in care apare ${counter} vocale`)
    return counter
}

vowelCounter('Cred ca sa primit cu aproximatie ce este in Acesta frAzA');


// // // Nu modificați nimic din numele
// // // funcțiilor
// //

const multiplyByTen = (num) => {
    const  numa  = num * 10;
    return numa;
};
console.log(multiplyByTen())

const subtractFive = (num) => {return num - 5
    // returnează num după scăderea cu cinci
    // cod aici
};


const areSameLength = (str1, str2) => {
    if (str1.length === str2.length){
        return 'True';
    }else{
        return 'False';
    }
    // returnează true dacă cele două
// string-uri au aceeași lungime
    // altfel returnează false
    // cod aici

};

// //
const areEqual = (x, y) => {
// //     // returnează adevărat dacă x și y sunt egale
// //     // altfel returnează false
// //     // cod aici
if (x === y){
    return 'true';
}else {
    return 'false';
}
};

//
const lessThanNinety = (num) => {
// //     // returnează adevărat dacă num este mai mic de nouăzeci
// //     // altfel returnează false
// //     // cod aici
    if (num < 50){
        return "True";
    }else {
        return "False";
    }
};

//
const greaterThanFifty = (num) => {
// //     // returnează true dacă num este mai mare de cincizeci
// //     // altfel returnează false
// //     // cod aici
    if(num > 50){
        return "True";
    }else {
        return 'false'
    }
};

// //
const add = (x, y) => {
// //     // adăugați x și y împreună și returnați valoarea
// //     // cod aici
    const sum = x+y;
    return  sum;
};

// //
const subtract = (x, y) => {
// //     // scade y din x și returnează valoarea
// //     // cod aici
    let scade =  y - x;
    return scade;
};

// //
const divide = (x, y) => {
// //     // împarte x cu y și returnează valoarea
// //     // cod aici
    let imparte = x/y;
    return imparte;

};

// //
const multiply = (x, y) => {
// //     // înmulțiți x cu y și returnați valoarea
// //     // cod aici
    const inmultire = x * y;
    return inmultire;
};
console.log(multiply(5, 3));
// //
const getRemainder = (x, y) => {
// //     // returnează restul de la împărțirea x la y
// //     // cod aici
    let rest = x / y;
    return rest;
};
console.log(getRemainder(18, 6));
// //
const number = prompt('Indica un numar')
const isEven = (number) => {
// //     // returnează true dacă num este par
// //     // altfel returnează false
// //     // cod aici
    if (number %2 === 0){
        return "True"
    }else{
      return "False"
    }

};
console.log(isEven(number));
// //
const number1 = prompt('Indica un numar')
const isOdd = (num) => {
// //     // return true if num is odd
// //     // otherwise return false
// //     // code here
    if (number1 %2 == 0){
        return "False"
    }else {
        return "True"
    }
};
console.log(isOdd(number1));
// //


let x = prompt("Indica numar!!!")
const square = (num) => {
// //     // num la pătrat și returnează noua valoare
// //     // cod aici
 return num * num;

};


// //
const cube = (num) => {
// //     // num la cub și returnează noua valoare
// //     // cod aici
return Math.pow(num,3);
};
// //

// este identic cu exercitiul de mai sus ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
const raiseToPower = (num, exponent) => {
// //     // ridicați numărul la orice putere este trecută ca exponent
// //     // cod aici
return Math.pow(num,exponent);
};
// //

const roundNumber = (num) => {
// //     // rotunjește num și returnează-l
// //     // cod aici

    return Math.round(num);

};
// console.log(roundNumber(y));
// //
const roundUp = (num) => {
// //     // rotunjește numărul in sus și returnează-l
// //     // codează aici
return Math.ceil(num)
};
// //
const addExclamationPoint = () => {
// //     // adaugă un semn de exclamare la sfârșitul str și returnează noul string
// //     // 'hello world' -> 'hello world!'
// //     // cod aici
  return `${str}`;

};
//
const combineNames = (firstName, lastName) =>{

// // // // returnează firstName și lastName combinate ca un șir și separate printr-un spațiu.
// // // // 'Scoala', 'LearnIt' -> 'Scoala LearnIt'
// // //     // cod aici
return (`${firstName}${lastName}`)
};


// //
const getGreeting = (name) => {

// //     // Luați string-ul  name și concatenați alte string-uri pe el, astfel încât să ia următoarea formă:
// //     // 'Sam' -> 'Salut Sam!'
// //     // cod aici
    return(`Salut ${name} ! `);
};

// //
// //
const getRectangleArea = (length, width) => {
// //     // returnează aria dreptunghiului folosind length si width
// //     // cod aici
return length * width;
};
// //
const getTriangleArea = (base, height) => {
// //     // returnează aria triunghiului folosind base și base
// //     // cod aici
return(base * height)/2;
};
// //
const getCircleArea = (radius) => {
// //     // returnează zona rotunjită a cercului dată de radius
// //     // cod aici
const area = Math.PI * (radius * radius);
return Math.round(area);
};
// //
const getRectangularPrismVolume = (length, width, height) => {
// //     // returnează volumul prismei dreptunghiului 3D, având în vedere length, width și height
// //     // cod aici
return (length * width) * height;
};
// //
// // // Nu modificați  numele funcțiilor
// //
const getBiggest = (x, y) => {
// //     // x și y sunt numere întregi. Returnează numărul întreg mai mare
// //     // dacă sunt aceleași returnează fie unul
if( x > y){
    return x;
}if(x < y){
    return y;
}
return x || y;
};
// //
const greeting = (language) => {
// // // returnează o felicitare pentru trei limbi diferite:
//           language: 'German' -> 'Guten Tag!'
// //     // limba: 'Spanish' -> 'Hola!'
// //     // limba: 'Chinese' -> 'Ni Hao!'
// //     // dacă limba este nedefinită, return 'Hello!'
const limba = {
    German : 'Guten Tag!',
    Spanish : 'Hola!',
    Chinese : 'Ni Hao!',
}
};
// //
let num = prompt("Introduce numar")
const isTenOrFive = () => {
// //     // returnează true dacă num este 10 sau 5
// //     // altfel returnează false
    if(num === 10 && num === 5){
        return "True"
    }else{
        return "False"
    }
};
console.log(isTenOrFive(10));
// //
const isInRange = (num) => {
    if (num <= 50 && num >= 20){
        return true;
    }else {
        return false;
    }
// // //     // returnează adevărat dacă num este mai mic de 50 și mai mare de 20
//
};
// //
const isInteger = (num) => {
// //     // returnează adevărat dacă num este un număr întreg
// //     // 0,8 -> fals
// //     // 1 -> adevărat
// //     // -10 -> adevărat
// //     // altfel returnează false
// //     // sugestie: puteți rezolva acest lucru folosind Math.floor
    if (isNaN(num)){
        return false;
    }
    const x = parseFloat(num);
    if(x > 0 && x < 1) {
        return false;
    }
    return ( x || 0) === x ;
};
// //
const fizzBuzz = (num) => {
// //     // returnează adevărat dacă num este un număr întreg
// //     // 0,8 -> fals
// //     // 1 -> adevărat
// //     // -10 -> adevărat
// //     // altfel returnează false
// //     // sugestie: puteți rezolva acest lucru folosind Math.floor
if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzBuzz';
}else if (num % 3 === 0){
    return 'fizz'
}else if (num % 5 === 0){
    return 'Buzz'
}
return num;
};
// //
const isPrime = (num) => {
// //     // returnează adevărat dacă num este prim.
// //     // altfel returnează false
// //     // sugestie: un număr prim este doar divizibil în mod egal prin el însuși și 1
// //     // sugestie2: puteți rezolva acest lucru folosind un ciclu for
// //     // notă: 0 și 1 NU sunt considerate numere prime
if(num === 1){
    return false;
}else if( num === 0){
    return false;
}else if(num === 2){
    return true;
}
  for(let x = 2; x <= num ;x++)
  if(num % x == 0){
      return false;
  }
  return true;

};

// //
const returnFirst = (arr) => {
// //     // returnează primul element din array
return (arr[0]);
};
// //
const returnLast = (arr) => {
// //     // returnează ultimul element din array
const last = arr.slice(-1)[0];
return last;
};
// //
const getArrayLength = (arr) => {
// //     // returnează lungimea din array
return (arr.length);
};
// //
const incrementByOne = (arr) => {
// //     // arr este un array de numere întregi
// //     // măriți fiecare număr întreg cu unu
// //     // returnează array-ul
const addOne = arr.map((x) =>{
    return x + 1;
})
return addOne;
};
// //
const addItemToArray = (arr, item) => {
// //     // adăugați elementul la sfârșitul array-ului
// //     // returnează matricea
arr.push(item);
return arr;
};
// //
const addItemToFront = (arr, item) => {
// //     // adăugați elementul în partea din față a array-ului
// //     // returnează array-ului
// //     // sugestie: utilizați metoda array .unshift
arr.unshift(item);
return arr;
};
// //
const wordsToSentence = (words) => {
// //     // words este un array de string-uri
// //     // returnează un string care conține toate cuvintele concatenate împreună
// //     // spațiile trebuie să fie între fiecare cuvânt
// //     // exemplu: ['Hello', 'world!'] -> 'Hello world!'
return world.join(' ');
};
// //
let arr5 = ['h','e','l']
const contains = (arr, item) => {
// //     // verificați dacă item se află în interiorul arr
// //     // returnează true dacă este,
// //     // în caz contrar returnează false
 if(arr.includes(item)){
     return true;
 }
 else {
     return false;
 }
}
 console.log(contains(arr5,"e"));

// //
const addNumbers = (numbers) => {
// //     // numbers este un array de numere întregi.
// //     // aduna toate numerele întregi și returnează valoarea
const sum = numbers.reduce((a,b) => a+b, 0)
return sum;
};
// //
const averageTestScore = (testScores) => {
// //     // testScores este un array.
// //     // mergi prin  testScores și
// //     // calculează media.
// //     // returnează media
let sum = 0;
for (let i = 0; i < testScores.length; i++){
    sum +=parseInt(testScores[i], 10);
}
const aVerangetEstScore = sum / testScores.length;
return aVerangetEstScore;
};
// //


// //     // numbers este un array de numere întregi
// //     // returnează cel mai mare număr întreg
let arr = [1,5,48,15,31, 6664, 11,54,1154,488];

const largestNumber = numbers => Math.max.apply(null, numbers);

console.log(largestNumber(arr));


// //
// //
// //
// // // Do not change any of the function names
// //
const makeCat = (name, age) => {
// //     // create a new object with a name property with the value set to the name argument
// //     // add an age property to the object with the value set to the age argument
// //     // add a method called meow that returns the string 'Meow!'
// //     // return the object
    let cat ={};
    cat.name = name;
    cat.age = age;
    cat.meow = function (){
        return "Meow";

    };
    return cat;

};
// //
const addProperty = (object, property) => {
// //     // add the property to the object with a value of null
// //     // return the object
// //     // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
      object[property] = null;
      return object;
};
// //
const invokeMethod = (object, method) => {
// //     // method is a string that contains the name of a method on the object
// //     // invoke this method
// //     // nothing needs to be returned
object[method] ();
};
// //
const multiplyMysteryNumberByFive = (mysteryNumberObject) => {
// //     // mysteryNumberObject has a property called mysteryNumber
// //     // multiply the mysteryNumber property by 5 and return the product
return mysteryNumberObject.mysteryNumber*5;
};
// //
const deleteProperty = (object, property) => {
// //     // remove the property from the object
// //     // return the object
delete object[property];
return object;
};
// //
const newUser = (name, email, password) => {
// //     // create a new object with properties matching the arguments passed in.
// //     // return the new object
let user = {
 name,
 email,
 password,
};
return user;
};
// //
const hasEmail = (user) => {
// //     // return true if the user has a value for the property 'email'
// //     // otherwise return false
if (user.email){
    return true;
}else{
return false
}
};

// //
const hasProperty = (object, property) => {
// //     // return true if the object has the value of the property argument
// //     // property is a string
// //     // otherwise return false
if(object.hasProperty(property)){
    return true;
}else return false;
};
// //
const verifyPassword = (user, password) => {
// //     // check to see if the provided password matches the password property on the user object
// //     // return true if they match
// //     // otherwise return false
    if (password === user.password){
        return true;
    }else return false;
};
// //
const updatePassword = (user, newPassword) => {
// //     // replace the existing password on the user object with the value of newPassword
// //     // return the object
    user.password = newPassword;
    return user;
};
//
const addFriend = (user, newFriend) => {
// //     // user has a property called friends that is an array
// //     // add newFriend to the end of the friends array
// //     // return the user object
    user.friends.push(newFriend);
    return user;
};
// //
const setUsersToPremium = (users) => {
// //     // users is an array of user objects.
// //     // each user object has the property 'isPremium'
// //     // set each user's isPremium property to true
// //     // return the users array
    for (let i = 0; i < users.length; i++) {
        users[i].isPremium = true;
        return users;

    }
};
// //
const sumUserPostLikes = (user) => {
// //     // user has an array property called 'posts'
// //     // posts is an array of post objects
// //     // each post object has an integer property called 'likes'
// //     // sum together the likes from all the post objects
// //     // return the sum
    let postLikeSum = 0;
    user.posts.forEach(function (post){
          postLikeSum += post.likes;
    });
    return postLikeSum;
};



// //
const addCalculateDiscountPriceMethod = (storeItem) => {
// //     // Add a method to the storeItem object called 'calculateDiscountPrice'
// //     // This method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
// //     // The method then subtracts the discount from the price and returns the discounted price
// //     // example:
// //     // price -> 20
// //     // discountPercentage -> .2
// //     // discountPrice = 20 - (20 * .2)
// //     // Make sure you return storeItem after adding the method to it
// //     // hint: arrow functions don't bind a this
    storeItem.calculateDiscountPrice = function () {
        let discountPrice = this.price - (this.price * this.discoutPercentage);
        return discountPrice;
    };
    return storeItem;
};
// //
// // // Do not modify code below this line.
// // // --------------------------------
// //
// module.exports = {
//     makeCat,
//     addProperty,
//     invokeMethod,
//     multiplyMysteryNumberByFive,
//     deleteProperty,
//     newUser,
//     hasEmail,
//     hasProperty,
//     verifyPassword,
//     updatePassword,
//     addFriend,
//     setUsersToPremium,
//     sumUserPostLikes,
//     addCalculateDiscountPriceMethod
// };
//
// //
// //
const getFirstItem = (collection, cb) => {
//     // invoke the callback function and pass the first item from the collection in as an argument
cb(collection[0]);
};
// //
const getLength = (collection, cb) => {
    // Write a function called getLength that passes the length of the array into the callback
return cb(collection.length);
};
// //
const getLastItem = (collection, cb) => {
// //     // Write a function called getLastItem which passes the getLastItem item of the array into the callback
cb(collection[collection.length - 1]);
};
// //
const sumNums = (x, y, cb) => {
// //     // Write a function called sumNums that adds two numbers and passes the result to the callback
cb(x+y);
};
// //
const multiplyNums = (x, y, cb) => {
// //     // Write a function called multiplyNums that multiplies two numbers and passes the result to the callback
cb (x * y);
};
// //
const contains = (collection, item, cb) => {
// //     // Write a function called contains that checks if an item is present inside of the given array.
// //     // Pass true to the callback if it is, otherwise pass false
for (let i = 0; i < collection.length; i++) {
    if (collection[i] === item) {
        cb(true);
    }
}
cb(false);

};
contains([2, 3, 4, 5], 5, (x) => { console.log(x); })
// //
const removeDuplicates = (collection, cb) => {
    // Write a function called removeDuplicates that removes all duplicate values from the given array.
    // Pass the array to the callback function.  Do not mutate the original array.
    for (let i = 0; i < collection.length; i++){
        if (collection[i] === collection[i]) {

        }
    }
};
// //
// module.exports = {
//     getFirstItem,
//     getLength,
//     getLastItem,
//     sumNums,
//     multiplyNums,
//     contains,
//     removeDuplicates
// }
