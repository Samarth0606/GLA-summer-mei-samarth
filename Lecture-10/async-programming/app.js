


// console.log('start');
// console.log('4 secs baad run kro')
// console.log('end');




// console.log('start');

// setTimeout(function(){
//     console.log('after 4 seconds')
// } , 4000)


// console.log('end');


// ------------interviews--------
// console.log('start');

// setTimeout(function(){
//     console.log('after 0 seconds')
// } , 0)


// console.log('end');


// function step1(fn){
//     setTimeout(function(){
//         console.log("after 2 secs")
//         fn();
//     } , 2000)
// }

// function step2(){
//     setTimeout(function(){
//         console.log("after 4 secs")
//     } , 4000)
// }

// step1(function(){
//     step2();
// });

// step1(step2);


// --------- challenge insta -----------


function step1(cb){
    setTimeout(function(){
        console.log("selecting image")
        cb("selecting image");
    },2000)
}

function step2(image , cb){
    setTimeout(function(){
        console.log(`filter applied on ${image}`)
        cb('filtered image')
    },2000)
}
function step3(filteredImage , cb){
    setTimeout(function(){
        console.log(`adding caption to ${filteredImage}`)
        cb('filtered image with caption')
    } , 2000)
}
function step4(final){
    setTimeout(function(){
        console.log(`uploading you ${final}...`)
    } , 2000)
}

// callback hell (horizontally grow)
step1(function(image){
    step2(image , function(filteredImage){
        step3(filteredImage , function(final){
            step4(final)
        });
    });
});



