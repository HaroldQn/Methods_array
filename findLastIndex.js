const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 const res =  numbers.findLastIndex(x => {
    console.log("x", x);
    return x === 3;
});
console.log(res);