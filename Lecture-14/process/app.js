



// let arr = process.argv;
// console.log(arr);

const arr = process.argv.slice(2);

for(let name of arr){
    console.log(`hello from ${name}`)
}