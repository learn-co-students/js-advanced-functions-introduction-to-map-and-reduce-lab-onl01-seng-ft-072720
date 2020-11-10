// Your code here
function mapToNegativize(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let val = array[i] * -1
        newArray.push(val)
    }
    return newArray
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array){
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let val = array[i] * 2
        newArray.push(val)
    }
    return newArray
}

function mapToSquare(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        let val = array[i] * array[i]
        newArray.push(val)
    }
    return newArray
}

function reduceToTotal(array, start = 0) {
    let total = start
    for (let i = 0; i < array.length; i++) {
        total = array[i] + total
    }
    return total
}

function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++) {
       if (!array[i]) return false
    }
    return true
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++) {
        if (!!array[i]) return true
     }
    return false
}