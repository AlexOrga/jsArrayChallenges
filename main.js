console.log('Hi');

// Challenge 1

// var challengeOneInput = "jumbo shrimp";
// var singleWord = challengeOneInput.split(' ');
// var jumbo = singleWord[0].split('');
// var shrimp = singleWord[1].split('');
// var alpha = "abcdefghijklmnopqrstuvwxyz";
// var alphaSplit = alpha.split('');
// var jumboScore = 0;
// var shrimpScore = 0;


// for ( var i=0; i<jumbo.length; i++){
//     var score = alphaSplit.indexOf(jumbo[i]) + 1;
//     jumboScore += score;
// }

// for (j=0; j<shrimp.length; j++){
//     var score = alphaSplit.indexOf(shrimp[j]) + 1;
//     shrimpScore += score;
// }

// var challenge1 = document.getElementById("challenge-1");

// if (jumboScore >= shrimpScore){
//     challenge1.innerHTML = '<p>' + jumbo.join('') + ' = ' + jumboScore + '</p>';
// } else {
//     challenge1.innerHTML = '<p>' + shrimp.join('') + ' = ' + shrimpScore + '</p>';
// }

// --------------------------------------------------------------------------------------

// Challenge 2

// var challengeTwoInputA = [1,2,3,4,5,6,7,8,9];  //[1,2,7,4,5,6,3,8,9];
// var challengeTwoInputB = [12,13,14];  //[12,17,14];
// var challengeTwoInputC = [9,2,4,7,3];  //[9,2,4,3,7];
// var output = [];

// Un-Comment This!!!!!!!!!!!!!!!!
// for(var i=0; i<challengeTwoInputC.length; i++){
//   var string = challengeTwoInputC[i].toString();
//   if(string === '3'){
//     string = string.replace('3', '7');
//   } else if(string === '7'){
//     string = string.replace('7', '3');
//   }
//   output.push(string * 1);
// }

// var string = challengeTwoInputB.toString();
// var split = string.split('');
// console.log(split);

// for(var i=0; i<split.length; i++){
//     var stringNew = split[i];
//     if(stringNew === '3'){
//         stringNew = stringNew.replace('3', '7');
//     } else if(stringNew === '7'){
//         stringNew = stringNew.replace('7', '3')
//     }
//     output.push(stringNew * 1);
// }

// Un-Comment This!!!!!!!!!!!!!!!!
// var challenge2 = document.getElementById("challenge-2");
// challenge2.innerHTML = output;

// for(var i=0; i<challengeTwoInputB.length; i++){
//   var string = challengeTwoInputB[i].toString();
//   var stringSplit = string.split('');
//   if(stringSplit[0] === '3'){
//     stringSplit = stringSplit[0].replace('3', '7');
//   } else if(stringSplit[1] === '3'){
//     stringSplit = stringSplit[1].replace('3', '7');
//   } else if(stringSplit[0] === '7'){
//     stringSplit = stringSplit[0].replace('7', '3');
//   } else if(stringSplit[1] === '7'){
//     stringSplit = stringSplit[1].replace('7', '3');
//   }
  
//   output.push(stringSplit * 1);
// }

// -----------------------------------------------------------
//  Challenge 3

// var challengeThreeInputA = [ 1, 1, 1, 2, 1, 1 ];  // 2
// var challengeThreeInputB = [ 0, 0, 0, 0, 0, 0, 0, 0.55, 0, 0 ];  // 0.55

// for(var i=0; i<challengeThreeInputA.length; i++){
    
// }

// -------------------------------------------------------------
// Challenge 4

// var challengeFourInputA = [ 1, 2, 3 ];  // [2, 4, 6]
// var challengeFourInputB = [ 3, 8, 1, 2, 4, 12 ];  // [ 6, 16, 2, 4, 8, 24 ]
// var arrayDouble = [];


// for(var i=0; i<challengeFourInputB.length; i++){
//     arrayDouble.push(challengeFourInputB[i] * 2);
// }

// document.getElementById("challenge-4").innerHTML = arrayDouble;

// --------------------------------------------------
// for(var i=0; i<challengeFourInputB.length; i++){
//     arrayDouble.push(challengeFourInputB[i] * 2);
// }


// document.getElementById("challenge-4").innerHTML = arrayDouble;

// ---------------------------------------------------------------
// Challenge 5

var array1 = [1,2];
var array2 = [1];
var display = [];
// display = [2]
for (var i = 0; i<array2.length; i++) {
    arraylength = array1.length
    for (var j = 0; j<arraylength; j++) {
        if (array2[i] === array1[j]) {
            array1 = array1.slice(0, j).concat(array1.slice(j+1, array1.length));
        }
    }
}

document.getElementById("challenge-5").innerHTML = array1;


// array1 = array1.slice(0, j).concat(array1.slice(j+1, array1.length));

// ----------------------------------------------------------------


// Challenge 6

var test1 = [1,3]; // 2
// var test2 = [2,3,4]; // 1
var test3 = [13,11,10,3,2,1,4,5,6,9,7,8]; // 12

test3 = test3.sort(function(a,b){
    return a - b;
});
console.log(test3);

for(var i=0; i<test1.length-1; i++){
    if(test1[i+1] === test1[i]+1){
        
    } else {
        var numMissing = test3[i]+1;
    }
}

document.getElementById("challenge-6").innerHTML = numMissing;

// ----------------------------------------------------------------

//Challenge 7

var numBeggers = 3;
var offerings = [1,2,3,4,5];
var counter = 0;
var beggers = [];
var firstTake = 0;
var secondTake = 0;
var thirdTake = 0;
// first one takes [1, 3, 5]=9
// second one takes [2, 4]=6

//display [9, 6]


for(var h=0; h<numBeggers.valueOf(); h++){
    counter += 1;
    beggers.push(counter);
}



for(var j=0; j<beggers.length; j++){
    if(beggers[j] === 1){
    for (var i=j; i<offerings.length; i+= numBeggers){
        firstTake += offerings[i];
    }
} else if(beggers[j] === 2){
    for (var i=j; i<offerings.length; i+= numBeggers){
        secondTake += offerings[i];
        }
    } else if(beggers[j] === 3){
        for (var i=j; i<offerings.length; i+= numBeggers){
            thirdTake += offerings[i];
        }
    }
}

var stringMaker = '<p> First begger takes: ' + firstTake + '</p>';
stringMaker += '<p> Second begger takes: ' + secondTake + '</p>';
if(thirdTake !== 0){
    stringMaker += '<p> Third begger takes: ' + thirdTake + '</p>';
}

document.getElementById("challenge-7").innerHTML = stringMaker;
