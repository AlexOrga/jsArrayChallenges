console.log('Hi');

// Challenge 1

var challengeOneInput = "jumbo shrimp";
var singleWord = challengeOneInput.split(' ');
var jumbo = singleWord[0].split('');
var shrimp = singleWord[1].split('');
var alpha = "abcdefghijklmnopqrstuvwxyz";
var alphaSplit = alpha.split('');
var jumboScore = 0;
var shrimpScore = 0;


for ( var i=0; i<jumbo.length; i++){
    var score = alphaSplit.indexOf(jumbo[i]) + 1;
    jumboScore += score;
}

for (j=0; j<shrimp.length; j++){
    var score = alphaSplit.indexOf(shrimp[j]) + 1;
    shrimpScore += score;
}

var challenge1 = document.getElementById("challenge-1");

if (jumboScore >= shrimpScore){
    challenge1.innerHTML = '<p>' + jumbo.join('') + ' = ' + jumboScore + '</p>';
} else {
    challenge1.innerHTML = '<p>' + shrimp.join('') + ' = ' + shrimpScore + '</p>';
}

// --------------------------------------------------------------------------------------

// Challenge 2

var challengeTwoInputA = [1,2,3,4,5,6,7,8,9];  //[1,2,7,4,5,6,3,8,9];
var challengeTwoInputB = [12,13,14];  //[12,17,14];
var challengeTwoInputC = [9,2,4,7,3];  //[9,2,4,3,7];
var output = [];


for(var i=0; i<challengeTwoInputC.length; i++){
  var string = challengeTwoInputC[i].toString();
  if(string === '3'){
    string = string.replace('3', '7');
  } else if(string === '7'){
    string = string.replace('7', '3');
  }
  output.push(string * 1);
}

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

var challenge2 = document.getElementById("challenge-2");
challenge2.innerHTML = output;

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