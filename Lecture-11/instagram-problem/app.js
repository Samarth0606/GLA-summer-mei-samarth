
let step1 = function(){
    return new Promise(function(resolve , reject){
        console.log("plz wait we are selecting the image");
        setTimeout(function(){
            resolve('photo selected')
        } , 3000)
    })
}



let step2 = function(foto){
    return new Promise(function(resolve , reject){
        console.log(`adding filter to ${foto}`)
        setTimeout(function(){
            resolve('filter applied on the foto')
        } , 4000)
    })
}

let step3 = function(filter){
    return new Promise(function(resolve , reject){
        console.log(`adding caption to ${filter}`)
        setTimeout(function(){
            resolve('caption added to the foto')
        } , 2000)
    })
}

let step4 = function(caption){
    return new Promise(function(resolve , reject){
        console.log(`uploading the final image where ${caption}`)
        setTimeout(function(){
            resolve('photo added successfully...');
            // reject()
        } , 5000)
    })
}


step1()
.then(function(foto){
    console.log(foto);
    return step2(foto);
})
.then(function(filter){
    console.log(filter);
    return step3(filter);
})
.then(function(caption){
    console.log(caption);
    return step4(caption)
})
.then(function(final){
    console.log(final);
})








