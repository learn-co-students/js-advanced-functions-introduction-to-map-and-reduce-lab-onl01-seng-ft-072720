function mapToNegativize(array){
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * -1)
    }
    return newArray
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2)
    }
    return newArray
}

function mapToSquare(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] ** 2)
    }
    return newArray
}

function reduceToTotal(array, start = 0) {
    for (let i = 0; i < array.length; i++) {
        start += array[i]
    }
    return start
}

function reduceToAllTrue(array) {
    let answer = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == false) {
            answer = false
        }
    }
    return answer
}

function reduceToAnyTrue(array) {
    let answer = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == true) {
            answer = true
        }
    }
    return answer
}

