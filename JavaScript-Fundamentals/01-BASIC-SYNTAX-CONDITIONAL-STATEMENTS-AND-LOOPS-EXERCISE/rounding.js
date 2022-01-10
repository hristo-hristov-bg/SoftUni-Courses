function rounding(num, rounded) {
    if (rounded > 15) {
        rounded = 15;
    }
    const result = num.toFixed(rounded);
    const numWithoutZeros = parseFloat(result);
    console.log(numWithoutZeros);
}
rounding(10.5,3)