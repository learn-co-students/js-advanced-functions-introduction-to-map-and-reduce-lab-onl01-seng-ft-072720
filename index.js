// Your code here
function mapToNegativize(sourceArray) {
    for (let i=0; i<sourceArray.length; i++) {
        sourceArray[i] = sourceArray[i] * -1
    }
  return sourceArray
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    for (let i=0; i<sourceArray.length; i++) {
        sourceArray[i] = sourceArray[i] * 2
    }
  return sourceArray
}

function mapToSquare(sourceArray) {
    for (let i=0; i<sourceArray.length; i++) {
        sourceArray[i] = sourceArray[i] * sourceArray[i]
    }
  return sourceArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let result = startingPoint
    for (let i=0; i<sourceArray.length; i++) {
        result = sourceArray[i] + result
    }
    return result 
}

function reduceToAllTrue(sourceArray) {
    for(let arr of sourceArray){
        if (arr == false) {
           return false
        }
    }
    return true
}

function reduceToAnyTrue(sourceArray) {
    for(let arr of sourceArray) {
        if (arr == true)
        return true
    }
    return false
}