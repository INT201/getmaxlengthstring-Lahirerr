const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
 if(arrayOfString === undefined || arrayOfString === null){
  return undefined
 }
 let maxLengthString = []

 for(arr of arrayOfString){
    if(maxLengthString.length === 0){
        maxLengthString = [arr]
    }
    else if(arr.length >= maxLengthString[0].length){
        if(arr.length == maxLengthString[0].length){
            maxLengthString.push(arr)
        }
        else{
            maxLengthString = [arr]
        }
    }
 }
 return maxLengthString
}
console.log(getMaxLengthString(['hello', 'hi', 'hey']))
module.exports = getMaxLengthString
