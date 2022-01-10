function password(input) {

    let index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    index++;

    let currentPass = input[index];
    index++;


    while (true) {
        if (currentPass = password) {
            console.log(`Welcome ${username}!`);
            break;
        }
    }

}
password(["Gosho",
    "secret",
    "secret"])

