function string (a,b,c) {
    let sum = a.length + b.length + c.length;
    let average = Math.round(sum / 3);

    console.log(sum);
    console.log(average);
}

string('chocolate', 'ice cream', 'cake');
string('pasta', '5', '22.3');