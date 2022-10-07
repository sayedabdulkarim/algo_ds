// 1 - twoSum

// twoSum([2,7, 11, 15], 9)

function twoSum(arr, target){
    var hashMap = {}; // here we store the array value as "key" with indexes as "value" { 2: 0, 7: 1, 11: 2, 15: 3 }

    for(i=0; i<arr.length; i++){
        var compare = target - arr[i] // comparator value after deducting from the target
        
        if(compare in hashMap){  /// if compare is present as key in hashMap obj 
            
            return [ i, hashMap[compare] ]          
        }

        hashMap[arr[i]] = i
    }

//    return hashMap
}

// 2 - fibonacci

// fib(2) =  [0, 1]
// fib(3) =  [0, 1, 1]
// fib(5) =  [0, 1, 1, 2, 3]
// fib(7) =  [0, 1, 1, 2, 3, 5, 8]

function fib(num){
    var res = []

    for(i = 0; i<=num; i++){

        if(res.length < 2 ){
            res.push(i)
        } else {
            res.push(res[res.length - 1] + res[res.length - 2])
        }
        
    }

    return res
    
}

// ==================================================================

// 3 - factorial    

//     factorial(4) - 24 
//     factorial(5) - 120 

function factorial(num){
    var res = 1

    for(i = 1; i<=num; i++){
          res *= i 
    }

    return res
    
}

//===============================================================

// 4 - isPrime

// //expect
// isPrime(1) - false
// isPrime(5) - true
// isPrime(4) - false

function isPrime(num){

    if(num < 2) return false;
    
    for(i = 2; i < num; i++){
        
          if(num % i === 0 ){
                return false      
          } 
        
    }

    return true
    
}

//==============================================================

// 5 - isPower2

// //expect
// isPower2(4) - true
// isPower2(6) - false
// isPower2(8) - true


function isPower2(num){

    while(num > 1){
        
        if(num % 2 !== 0) {
            return false
        }

        num = num / 2;        

    }

    return true
    
}

//=============================================================

//6 - best time to buy and sell Stock

//expect
// max([7,1,5,3,6,4]) = 5
// max([7,6,4,3,1]) = 0

function maxProfit(prices){
    var buyPrice = prices[0]
    var maxProfit = 0
    
    for(i of prices){
        var sellPrice = i;
        var profit = sellPrice - buyPrice
        maxProfit = (Math.max(maxProfit, profit))

        buyPrice = Math.min(buyPrice, i)
        
    }
    return maxProfit
}

//============================================================

// 7 - unique obj and arr

// var arr = [
//     { name: "One", id: 1 },
//     { name: "Two", id: 2 },
//     { name: "Three", id: 3 },
//     { name: "two", id: 2 },
//     { name: "Four", id: 4 },
// ]
// var arr = [ 1,2,2,5,6,6,7,8 ]

//uni obj 
arr.filter((a, i) => arr.findIndex((s) => a.id === s.id) === i)

// uni 
function uni(arr){
    var res = []

    for(i of arr){
        if(res.indexOf(i) == -1){
            res.push(i)
        }
    }
    return res;
}

// ============================================================

// 8 - inventory

//// add "this" keyword to "inventoryItems = [] ", to reflect in the new object;

a = new inventoryList()
  

function inventoryList() {
  // write your code here
   inventoryItems = [];
  
  const checkUnique = str => inventoryItems.find( i => i.itemName == str )
  
  this.add = (str) => {
      if(!checkUnique(str)){

        const obj  = {
              id: Math.random(),
              itemName: str
          }

        inventoryItems.push(obj)
      } else {
          console.log("existed")
      }
         
  }
  
  this.remove = str => {
      inventoryItems = inventoryItems?.filter( item => item.itemName != str ); 
  }
  
  this.getList = () => {
      inventoryItems?.forEach( item => console.log(item)) 
  }
  
}

// 9 - find index using binarySearch ( only for sorted Arr )

// * for finding element index in an array with sorted Arr

function binarySearchSortedArrayFindElementIndex(arr, target){

    
    var leftIndex = 0;
    var rightIndex = arr.length - 1

 
    while(leftIndex <= rightIndex){

        var midIndex = Math.floor((leftIndex + rightIndex) / 2 )

        if(target == arr[midIndex]) {
            
        console.log(midIndex, " midddd")
        
            return midIndex
        }
        if(target <  arr[midIndex]){
            rightIndex = midIndex -1
        }
        else {
            leftIndex = midIndex + 1
        }
    }

    return -1
}

// 10 -
function binaryUnSortedArrayFindElementIndex(arr,target){
    let oddNum = arr.length
    if(oddNum % 2 !== 0){
        for (let i = 0; i < arr.length; i++) {
            if(arr.includes(target)){
                let center = Math.ceil(arr.length/2) - 1
                let arrayCenter = arr[center]
                
                if(arrayCenter > target){
                    if(arr[i] === target) return i
                }
    
                if(arrayCenter === target){
                    return arrayCenter
                }
    
                if(arrayCenter < target){
                    if(arr[i] === target) return i
                }
            } else{
                return -1
            }

        }
    } else {
        console.log("length is even")
        return -1
    }
}

// 11 - sortArr 

function sortForDecending(arr){
    let swapped = false
    do{
        swapped = false
        for(i=0; i<arr.length-1; i++){

            if( arr[i] < arr[i+1] ){
                var temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
            
        }
        
    } while(swapped)
    
    return arr
}

// chunk 
// ====
 
// 12 - chunk(102, 50) - [ [50], [50], [2] ]
function chunk(num, count){

    var createArr = (num) => {
        var res = []

        for(i=1; i<=num; i++){
            res.push(i)
        }
        return res
    }


    var data = createArr(num)
    var chunkedData = []
    
    while(data.length) {
        
        // chunkedData.push(data.slice(0, count))
        // data = data.slice(count)
        
        // 2nd way using splice, if we use splice den we dont need to add " arr = arr.slice(num) "
        chunkedData.push(data.splice(0, count))
            
    }

    console.log(data,"dddd")
    return chunkedData
}


