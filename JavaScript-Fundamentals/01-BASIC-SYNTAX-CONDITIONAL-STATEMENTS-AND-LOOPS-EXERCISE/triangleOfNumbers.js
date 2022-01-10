function triangleOfNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let eachLine = ''

        for (let j = 1; j <= i; j++) {
            eachLine += i + " "
        }
       
        console.log(eachLine);
    }
}
triangleOfNumbers(3)