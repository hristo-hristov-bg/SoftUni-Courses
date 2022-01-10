function housePainting(input){

    let xHouseHeight = Number(input[0]);
    let yHouseSideWallLenght = Number(input[1]);
    let hHouseRoofTriangleHeiht = Number(input[2]);

    let sideWallArea = xHouseHeight * yHouseSideWallLenght;
    let windowArea = 1.5 * 1.5;
    let bothSideWallsArea = (2 * sideWallArea) - (2 * windowArea);
    let backWallArea = xHouseHeight * xHouseHeight;
    let entranceArea = 1.2 * 2;
    let frontAndBackWallArea = 2 * backWallArea - entranceArea;
    let sumWallsArea = bothSideWallsArea + frontAndBackWallArea;
    let greenPaintNeeded = sumWallsArea / 3.4;

    let roofSquaresArea = 2 * (xHouseHeight * yHouseSideWallLenght);
    let roofTrianglesArea = 2 * ((xHouseHeight * hHouseRoofTriangleHeiht) / 2);
    let sumRoofArea = roofSquaresArea + roofTrianglesArea;
    let redPaintNeeded = sumRoofArea / 4.3;

    console.log(greenPaintNeeded.toFixed(2));
    console.log(redPaintNeeded.toFixed(2));

}
housePainting(['6','10','5.2']);