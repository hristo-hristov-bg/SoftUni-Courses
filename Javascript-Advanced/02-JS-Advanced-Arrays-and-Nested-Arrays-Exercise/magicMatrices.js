function magicMatrices(arr) {
    let rowSum1 = 0;
    let rowSum2 = 0;
    let rowSum3 = 0;

    let colSum1 = 0;
    let colSUm2 = 0;
    let colSum3 = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j == 0) {
                rowSum1 += arr[i][j];
            } else if (j == 1) {
                rowSum2 += arr[i][j];
            } else if (j == 2){
                rowSum3 += arr[i][j];
            }

            if (i == 0) {
                colSum1 += arr[j][i];
            } else if (i == 1) {
                colSUm2 += arr[j][i];
            } else if (i == 2){
                colSum3 += arr[j][i];
            }
        }
    }

    if (rowSum1 == rowSum2 && rowSum2 == rowSum3 && rowSum3 == colSum1 && colSum1 == colSUm2 && colSUm2 == colSum3) {
        console.log('true');
    } else {
        console.log('false');
    }
}

magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   
   
)