//function declaration/defination
function sum(){
    let a = 10;
    let b = 20;
    console.log(a+b);
}

//function calling
// sum()
// sum()
// sum()
// sum()
// sum()
// sum()

// ------------ next -----------

// parameterised functions
function sum(c){
    let a = 100;
    let b = 200;
    console.log(a+b+c);
}

// sum(300)
// sum(600)
// sum(900)



// ---- return a value ----

function sum(){
    let a = 100;
    let b = 200;
    return (a+b);
}

// sum(); //300
// console.log(sum());

// --------- multiple arguments ------

function sum(a , b){
    return a+b;
}

// let ans = sum(10,20) //30
// console.log(ans) //30


// --------- default parameterised fucntions-------------

function sum(a , b , c = 10){
    return a+b+c;
}

// let ans = sum(10,20) //40
// console.log(ans) //40


// --------overiding paramters--------------


function sum(a , b , c = 10){
    return a+b+c;
}

// let ans = sum(10,20,30) //60
// console.log(ans) //60


// --------------

function sum(a , b){
    console.log(a)
    console.log(b)
    return a+b;
}
// sum();
console.log(sum())


