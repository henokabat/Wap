

// exercise one
function max(num1, num2){
    if (num1>=num2){
        return num1;
    }else if (num2>num1){
        return num2;
    }
}


// exercise number two
function maxOfThree(num1,num2,num3){
    if (num1>num2){
        if (num1>num3){
            return num1;
        }else {
            return num2
        }
    }else if (num2>num3){
        return num2;
    }else{
        return num3;
    }
}

// exercise 3
function isVowel(ch){
    let letter=ch.charAt(0);

   switch (letter){
       case "a":
       case "e":
       case "i":
       case "o":
       case "u":
       case "A":
       case "E":
       case "I":
       case "O":
       case "U":return true;
       default: return false;

   }



}

// exercise 4
function sum(nums){
    let sum=0;
    for (let i=0; i<nums.length;i++){
        sum=sum+nums[i];
    }
    return sum
}


function multiply(nums){
    let result=1;
    for (let i=0; i<nums.length;i++){
        result=result*nums[i];
    }
    return result
}

//exercise 5
function reverse(phrase){
    let newPhrase="";
    for (let i=phrase.length-1; i>=0;i--){
       newPhrase=newPhrase+phrase.charAt(i);
    }

    return newPhrase;
}

// exercise 6


function findLongestWord(phrases){
    let largestLength=0;
    for (let i=0; i<phrases.length; i++){
        if (phrases[i].length>largestLength){
            largestLength=phrases[i].length;
        }
    }
    return largestLength;
}

//exercise 7
function filterLongWord(words,minWordLength){
    let newWords=[];
    for (let i=0; i<words.length;i++){
        if (words[i].length>minWordLength){
            newWords.push(words[i]);
        }
    }

    return newWords;
}

//exercise 8

function computeSumOfSquares(nums){
    let sum=0;
    for (let i=0; i<nums.length;i++){
        sum += (nums[i]*nums[i]);
    }

    return sum;
}
//exercise 9

function printOddNumbersOnly(nums){
    for (let i=0; i<nums.length;i++){
        if (nums[i]%2!==0){
            console.log("odd number found"+nums[i]);
        }
    }
}

//exercise 10
function computeSumOfSquaresOfEvenOnly(nums){
    let sum=0;
    for (let i=0; i<nums.length;i++){
        if (nums[i]%2===0){
            sum += (nums[i]*nums[i]);
        }

    }

    return sum;
}

//exercise 11




console.log("max of 23 and 92="+max(24,92));
console.log("max of -67, 23, 64="+maxOfThree(-67,23,64));
console.log("is e vowel? "+isVowel("e"));
console.log("sum of 1 2 3 4 10 ="+sum([1,2,3,4,10]));
console.log("multiplication o 1 2 3 4 10 =f"+multiply([1,2,3,4,10]));
console.log("reverse hello world: "+reverse("hello world"));
console.log("longest word "+findLongestWord(["hello","henock","Abatihun","knowledge"]));
console.log(filterLongWord(["hello","henock","Abatihun","knowledge"],5));
console.log("compute some of square of 7,3 54, 3= "+computeSumOfSquares([7,3,54,3]));
printOddNumbersOnly([6,4,3,2,5]);
console.log("compute some of even number square= "+computeSumOfSquaresOfEvenOnly([8,7,6,5,4,3,2,1,2]));
