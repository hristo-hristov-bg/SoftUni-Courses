function pipesInPool(input) {

    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);
    let sumLitres = 0;
    let p1Percents = 0;
    let p2Percents = 0;
    let vPercent = 0;

    p1 = p1 * h;
    p2 = p2 * h;
    sumLitres = p1 + p2;
    vPercent = (sumLitres / v) * 100;
    p1Percents = (p1 / sumLitres) * 100;
    p2Percents = (p2 / sumLitres) * 100;
    if (sumLitres <= v) {
        console.log(`The pool is ${vPercent.toFixed(2)}% full. Pipe 1: ${p1Percents.toFixed(2)}%. Pipe 2: ${p2Percents.toFixed(2)}%.`);
    } else {
        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${(sumLitres - v).toFixed(2)} liters.`);
    }
}
pipesInPool(['100', '100', '100', '2.5']);