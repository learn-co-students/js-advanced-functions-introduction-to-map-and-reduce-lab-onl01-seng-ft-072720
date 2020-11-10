const mapToNegativize = (inputArray) => {
    let outputArray = [];
    for (let i=0; i<inputArray.length; i++) {
        outputArray.push(inputArray[i]*-1)
    }
    return outputArray;
}

const mapToNoChange = (inputArray) => (inputArray)

const mapToDouble = (inputArray) => {
    let outputArray = [];
    for (let i=0; i<inputArray.length; i++) {
        outputArray.push(inputArray[i]*2)
    }
    return outputArray;
}

const mapToSquare = (inputArray) => {
    let outputArray = [];
    for (let i=0; i<inputArray.length; i++) {
        outputArray.push(inputArray[i]**2)
    }
    return outputArray;
}


function reduceToTotal(inputArray, startingPoint=0) {
    let total = startingPoint;

    for (let i=0; i<inputArray.length; i++) {
        total += inputArray[i];
    }

    return total;
}

function reduceToAllTrue(inputArray) {
    let truthiness = true;

    for (let i=0; i<inputArray.length; i++) {
        if (!!inputArray[i] == false) {
            truthiness = false;
        }
    }

    return truthiness;
}

function reduceToAnyTrue(inputArray) {
    let truthiness = false;

    for (let i=0; i<inputArray.length; i++) {
        if (!!inputArray[i] == true) {
            truthiness = true;
        }
    }

    return truthiness;

}

