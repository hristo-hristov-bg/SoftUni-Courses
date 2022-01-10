function areaOfFigures(input){

    let kindOfFigure = input[0];
    let area = 0;
    if (kindOfFigure === "square"){
        let a = Number(input[1]);
        area = a * a;
    } else if (kindOfFigure === "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = a * b;
    } else if (kindOfFigure === "circle"){
        let a = Number(input[1]);
        area = Math.PI * a * a;
    } else {
        let a = Number(input[1]);
        let h = Number(input[2]);
        area = (a * h) / 2;
    }

    console.log(area.toFixed(3));
}
areaOfFigures(["triangle","4.5","20"]);