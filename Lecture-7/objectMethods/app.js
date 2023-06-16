
// let marks = {
//     web : "samarth" , 
//     java : 20 , 
//     nalr : 50 ,
//     // method
//     totalMarks : function(){
//         return 90 + 20 +50
//     }
// }

// console.log(marks.java)
// console.log(marks.web)
// console.log(marks.nalr)
// // console.log(marks.totalMarks)
// console.log(marks.totalMarks())



// --------advance this keyword-------


let marks = {
    web : 90 , 
    java : 20 , 
    nalr : 50 ,
    // method
    totalMarks : function(){
        return 90 + 20 + 50
    } ,
    total: function(){
        return marks.web + marks.java
    }
}

console.log(marks.total());


// ----- this keyword -------

let marks2 = {
    web : 90 , 
    java : 20 , 
    nalr : 50 ,
    // method
    totalMarks : function(){
        return 90 + 20 + 50
    } ,
    total: function(){
        console.log(this);
        return this.web + this.java
    }
}

console.log(marks2.total());
