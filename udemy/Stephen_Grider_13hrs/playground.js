/////////////   QUESTIONS   //////////////////////

// to watch
// ===================

/**
 * 1 - whatsdev algo ques - ( https://www.youtube.com/watch?v=miiM5JJgrQo&list=PLkBfv4fGBau-q9tGBUgVoGClRsSBiiZm8 )
 */


/**
 * 1 - string reversal
 * 2 - is Palindrome 
 * 3 - Reversing an int
 * 4 - maxChar in a string
 * 5 - fizzBuzz
 * 6 - chunk
 */



// 1 -

// const stringRevEs6 = (str) => str.split("").reverse().join("")

const stringRev = str => {
    var revStr = ""

    for (i of str) {
        revStr = i + revStr
    }

    debugger;

    console.log(revStr, " rvv")
}

// console.log(stringRevEs6("hello"))

// stringRev("hello")

// 2

const isPalindrome = str => {
    return str === str.split("").reverse().join("")
}

// console.log(isPalindrome("qwerty"))

const isPalindromeEveryMethod = str => {
    return [...str].every((val, i) => val === str[ str.length - i - 1]
    )
}


// console.log(isPalindromeEveryMethod("aadaa"))

// 3
const reverseInt = num => {

    const revNum = parseInt(num.toString().split("").reverse().join(""));

    // console.log(revNum, " revNum")
    
    // way 1 

    // return num < 0 ? revNum * -1 : revNum

    // way 2

    return revNum * Math.sign(num)
}

// console.log(reverseInt(0))


// 4

function maxChar(str){

    var obj = {};
    var count = 0;
    var char = "";
    
    for( i of str ){
        obj[i] = obj[i] + 1 || 1
    }

    for(i in obj){
        // console.log(i, " iii")
        if(obj[i] > count ){
            count = obj[i]
            char = i
        }
    }

    console.log(count, char, " cc")
    // return obj[count]
    
}

// 5
function fizzbuzz(num){
    var x = 1;
    while(x <= num) {
        if(x % 3  == 0) console.log(x, " fizzz")
        if(x % 5  == 0) console.log(x, " buzz")
        if(x % 3  == 0 && x % 5 == 0) console.log(x, " fizzz buzzz")
        x++
    }
    
}

function fizzbuzz(num){
    var x = 1;
    while(x <= num) {
         (x % 3  == 0 &&  x % 5 == 0) ? console.log(x, " fizzz buzzz") : (x % 3  == 0) ? console.log(x, " fizzz") : (x % 5  == 0) ? console.log(x, " buzz") : ""
        x++
    }
    
}

// 6
function chunk(arr, num){
    var res = []

    while(arr.length > 0) {
        res.push(arr.slice(0, num))
        arr = arr.slice(num)
        
        // 2nd way using splice, if we use splice den we dont need to add " arr = arr.slice(num) "
        // res.push(arr.splice(0, num))
            
    }

    return res
    
}