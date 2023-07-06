

function check(a , fn){
    return fn(a);
}

function checkForBool(num){
    return typeof num === "boolean"
}

function checkForNum(num){
    return typeof num === "number"
}


console.log(check(true , checkForBool ))
console.log(check(20 , checkForNum ));











