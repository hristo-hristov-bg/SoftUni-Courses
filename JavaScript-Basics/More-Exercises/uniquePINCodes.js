function uniquePINCodes(input){

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let n3 = Number(input[2]);
    let pin = "";

    for(let i = 1; i<=n1;i++){
        
        for(let j =2; j<= n2;j++){
            
            for(let k = 1; k<= n3;k++){
                if(i % 2 == 0){
                    pin+= i;
                }
                if(j % 1 == 0 && j /j == 0){
                    pin+=j;
                }
                if(k % 2 == 0){
                    pin+= k;
                }
            }
        }
        console.log(pin);
    }


}
uniquePINCodes(['3','5','5']);