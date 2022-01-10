function distinctArray(arr) {
   
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let nextDigit = arr[j];
            if (current == nextDigit) {
                let index = Number(j);
                arr.splice(index,1);
                j--;
            }
        }
    }
    console.log(arr.join(' '));
    
}

distinctArray([1, 2, 1, 3, 1,5]);