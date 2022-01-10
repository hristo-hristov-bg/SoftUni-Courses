function solution(num) {
    let f = (x, y) => x + y;
    let sum = (x) => f(num, x)
    return sum;

}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
