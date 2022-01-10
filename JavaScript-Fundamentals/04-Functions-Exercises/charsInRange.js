function charsInRange(firstChar, secondChar) {

    let min = firstChar.charCodeAt(0);
    let max = secondChar.charCodeAt(0);

    let firstCharAsNum = firstChar.charCodeAt(0);
    let secondCharAsNum = secondChar.charCodeAt(0);

    if (firstCharAsNum > secondCharAsNum) {
        min = secondChar.charCodeAt(0);
        max = firstChar.charCodeAt(0);
    }

    let result = '';

    for (let i = min + 1; i < max; i++) {
        let character = String.fromCharCode(i);
        result += character + ' ';
    }

    return result;
}

console.log(charsInRange('#',
    ':'
));