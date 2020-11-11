const { template } = require("babel-core")

//mapToNegativize returns an array with all values made negative
function mapToNegativize(sourceArray) {
    let neg = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        neg.push(-1 * sourceArray[i])
    }
    return neg
}

// mapToNoChange returns an array with the original values
function mapToNoChange(sourceArray) {
    let arr = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        arr.push(sourceArray[i])
    }
    return arr
}

//mapToDouble returns an array with the original values multiplied by 2
function mapToDouble(sourceArray) {
    let arr = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        arr.push(2 * sourceArray[i])
    }
    return arr
}

//mapToSquare returns an array with the original values squared
function mapToSquare(sourceArray) {
    let arr = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        arr.push(sourceArray[i] ** 2)
    }
    return arr
}

//reduceToTotal returns a running total when not given a starting point
//reduceToTotal returns a running total when given a starting point
function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++ ) {
        total = total + sourceArray[i]
    }
    return total
}

//reduceToAllTrue returns true when all values are truthy
//reduceToAllTrue returns false when any value is falsy
function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (!sourceArray[i]) return false
    }
    return true
}

// reduceToAnyTrue returns true when a true value is present
// reduceToAnyTrue returns false when no true value is present
function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i]) return true
    }
    return false
}