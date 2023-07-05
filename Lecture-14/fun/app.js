

let PI = 3.145;
let magicNum = 7;

// console.log("samarth bhaiya teaching web");

function sqr(num){
    // console.log(num*num) ;
    return (num*num) ;
}


let obj = {
    first:"Samarth",
    last:"vohra",
    fullname:"Samarth" + "vohra",
    getName:function(){
        console.log(this.first + ' ' + this.last)
        // return (this.first + ' ' + this.last)
    }
}


console.log(obj.fullname);
console.log(obj.getName());

console.log(sqr(5)) 








