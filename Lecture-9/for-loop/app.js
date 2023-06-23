
let todo = ['assignment' , 'spotify' , 'clone' , 'burger' , 'pizza']

// for
// for(let i=0 ; i<todo.length ; i++){
//     console.log(todo[i]);
// }


// for-of (iterable entites)
// for(let i of todo){
//     console.log(i);
// }


// for-in (objects)
// let obj = {
//     web: 80 , 
//     c: 70 , 
//     maths: 75,
//     hindi: 50
// }

// for(let i in obj){
//     console.log(i);
//     console.log(obj[i]);
// }


// break and continue

// let arr = [90,80,70,60,50,40,30,20,10];
// // way-1 (for-of)
// for(let i of arr){
//     if(i<40){
//         break;
//     }
//     console.log(i);
// }

// // way2 (for)
// for(let i=0; i<arr.length ; i++){
//     if(arr[i] < 40){
//         break;
//     }
//     console.log(arr[i]);
// }


// continue

let arr = [90,80,70,60,50,40,30,20,10];
// way-1 (for-of)
for(let i of arr){
    if(i == 40){
        continue;
    }
    console.log(i);
}

// way2 (for)
for(let i=0; i<arr.length ; i++){
    if(arr[i] == 40){
        continue;
    }
    console.log(arr[i]);
}