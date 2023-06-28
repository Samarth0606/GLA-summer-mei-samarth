
// callback
// function getData(cb){
//     setTimeout(function(){
//         let data = 'hello world from callback'
//         cb(data , error);
//     } , 4000)
// }

// getData(function(data , error){
//     if(error){
//         console.log(error)
//     } else{
//         console.log(data)
//     }
// })


// promise

let mypromise = new Promise(function(resolve , reject){
    setTimeout(function(){
        let data = 'hello world from promise';
        resolve(data);
        // reject('opps no data');
    } , 4000)
})



mypromise
.then(function(data){
    console.log(data);
})
// .catch()




