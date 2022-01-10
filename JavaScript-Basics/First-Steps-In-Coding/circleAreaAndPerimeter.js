function circleAreaAndPerimeter(input){

    let rOfCircle = Number(input[0]);

    let circleArea = rOfCircle * rOfCircle * Math.PI;

    let circlePerimeter = 2 * Math.PI * rOfCircle;

    console.log(circleArea.toFixed(2));
    console.log(circlePerimeter.toFixed(2));

}
circleAreaAndPerimeter(['4.5']);