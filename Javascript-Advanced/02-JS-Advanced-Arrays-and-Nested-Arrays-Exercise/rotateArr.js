function rotateArr(arr, n) {
     for (let i = 0; i < n; i++) {
         let tempArr = arr.pop();
         arr.unshift(tempArr);
     }
     console.log(arr.join(' '));
}

rotateArr(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15

)