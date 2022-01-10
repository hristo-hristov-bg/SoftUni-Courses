function login(input) {
    let passWord = input[0];
    let enteredPassword = '';
    let reversedPass = '';
    let count = 0;

    for (let i = 1; i < input.length; i++) {
        enteredPassword = input[i];
        for (let j = input[i].length - 1; j >= 0; j--) {
            reversedPass += enteredPassword[j];
        }
        if (reversedPass == passWord) {
            console.log(`User ${passWord} logged in.`)
        } else {
            console.log('Incorrect password. Try again.');
            count++;
        }
        if (count >= 3) {
            console.log(`User ${passWord} blocked!`)
            break;
        }
        reversedPass = '';
    }
}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);