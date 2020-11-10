function mapToNegativize(sourceArray) {
    return sourceArray.map(value => value * -1)
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    return sourceArray.map(value => value * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(value => value ** 2)
}




function reduceToTotal(sourceArray, startingPoint = 0) {
    return sourceArray.reduce( function(a, b) {
        return (a + b)
    }, startingPoint)
}

function reduceToAllTrue(sourceArray) {
    const reducer = function(acc, current) {
        if (!!acc == true && !!current == true) {
            return true
        } else {
            return false
        }
    }
    return sourceArray.reduce(reducer, true)
}

function reduceToAnyTrue(sourceArray) {
    const reducer = function(acc, current) {
        if (acc == true) {
            return true
        } else {
            return !!current
        }
    }
    return sourceArray.reduce(reducer, false)
}