function delimeter(arr, string) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i <= arr.length - 2){
            result[result.length] = arr[i] + string;
        } else {
            result[result.length] = arr[i];
        }
    }
    
    console.log(result.join(''));
}

delimeter(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
)