const  express = require('express'); //returns a function
const app = express(); //returns an object


// middleware --> harr incoming request chleg
// app.use((req,res)=>{
//     console.log("sam")
//     res.send('hi sent sccessfully');
// })

app.get('/' , function(req,res){
    res.send('hi i am base url ');
})

app.get('/cat' , (req,res)=>{
    res.send('<h1>hi i am h1</h1>')
})

app.get('/dog' , (req,res)=>{
    res.send('<h1>woof woof</h1>')
})

app.get('*' , (req,res)=>{
    res.send('<h1>sorry wrong url</h1>')
})

app.listen(8080 , function(){
    console.log("server connect hogya at port 8080")
} )





