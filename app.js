function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    // it doesn't return anything, no return statement
    console.log('Result:' + num);
}
printResult(add(5, 12));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
// functions as values
// ()=>number accept any functions that return a number type
var combineValues;
combineValues = add;
// error  (a:number,b:number)=> number;
// combineValues = printResult
// combineValues = 5 ; - runtime error
// combineValues = printResult ; - expected error , Function type isn't precise
console.log(combineValues(8, 10));
