function balls(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let color = input[index];

    let points = 0;
    let otherColors = 0;
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let black = 0;
    let others = 0;

    for (let i = index; i <= n; i++) {
        color = input[i];
        switch (color) {
            case "red":
                red++;
                points += 5;
                break;
            case "orange":
                orange++;
                points += 10;
                break;
            case "yellow":
                yellow++;
                points += 15;
                break;
            case "white":
                white++;
                points += 20;
                break;
            case "black":
                black++;
                points /= 2;
                break;
            default:
                otherColors++;
                break;
        }
    }
    console.log(`Total points: ${Math.floor(points)}`);
    console.log(`Points from red balls: ${red}`);
    console.log(`Points from orange balls: ${orange}`);
    console.log(`Points from yellow balls: ${yellow}`);
    console.log(`Points from white balls: ${white}`);
    console.log(`Other colors picked: ${otherColors}`);
    console.log(`Divides from black balls: ${black}`);
}
balls(['10',
    'white',
    'white',
    'ee',
    'red',
    'orange',
    'red',
    'black',
    'black',
    'black',
    'black']);