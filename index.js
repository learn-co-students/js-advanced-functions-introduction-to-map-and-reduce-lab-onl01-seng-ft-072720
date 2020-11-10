// Your code here
function mapToNegativize(sourceArray){
    const neg = sourceArray.map(x => -x)
    return neg
}

const mapToNoChange = function(sourceArray){
    return sourceArray.map(x => x)
    
}

const mapToDouble = function(sourceArray){
    return sourceArray.map(x => x*2)
    
}

const mapToSquare = function(sourceArray){
    return sourceArray.map(x => x**2)
    
}

const reduceToTotal = function(sourceArray, startingPoint=0){
    let total = startingPoint 
    for(let i=0; i<sourceArray.length; i++){
        total += sourceArray[i]
    }
    return total
}

const reduceToAllTrue = function(sourceArray){
    let result = true;
    for(let i=0;i<sourceArray.length;i++){
        if(!sourceArray[i]){
            result = false;
        }
    }
    return result;
}

const reduceToAnyTrue = function(sourceArray){
    let result1 = false;
    for(let i=0;i<sourceArray.length;i++){
        if(sourceArray[i]){
            result1 = true;
        }
    }
    return result1;
}