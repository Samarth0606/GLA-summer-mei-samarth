
// way 1
fetch('https://api.tvmaze.com/search/shows?q=girls')
.then(function(response){
    // console.log(response);
    return response.json(); //this also returns a promise
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error)
})


// ------------------- axios ------  3rd party library

axios.get('https://api.tvmaze.com/search/shows?q=girls')
.then(function(response){
    // console.log(response)
    console.log(response.data)
})
.catch(function(error){
    console.log(error)
})










