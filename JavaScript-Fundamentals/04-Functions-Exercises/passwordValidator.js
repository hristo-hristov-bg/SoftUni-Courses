function passwordValidator(password) {

    let isValid = true;
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }

    if (format.test(password)) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }

    if (password.search(/[0-9]/) < 1) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }

    if (isValid) {
        console.log('Password is valid');
    }
}

passwordValidator('logIn');
console.log('------');
passwordValidator('MyPass123');
console.log('-----');
passwordValidator('Pa$s$s');