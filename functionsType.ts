function add(n1:number,n2:number):number{
    return n1 + n2
}
function printResult(num:number):void{
    // it doesn't return anything, no return statement
    console.log('Result:' + num)
}
printResult(add(5,12))
function addAndHandle(n1:number,n2:number,cb:(num:number)=>void){
    const result = n1 + n2
    cb(result)
}
addAndHandle(10,20,(result)=>{
    console.log(result)
    // the function itself can have a return statement,but will not return anything
})
// functions as values
// ()=>number accept any functions that return a number type
let combineValues: (a:number,b:number)=> number;

combineValues = add;
// error  (a:number,b:number)=> number;
// combineValues = printResult
// combineValues = 5 ; - runtime error
// combineValues = printResult ; - expected error , Function type isn't precise
console.log(combineValues(8,10))