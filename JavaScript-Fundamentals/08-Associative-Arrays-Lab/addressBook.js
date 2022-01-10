function addressBook(input) {
    let book = {};

    for (let line of input) {
        let [name, address] = line.split(':');
        book[name] = address;
    };

    let bookAsArr = Object.entries(book);
    bookAsArr.sort((a, b) => a[0].localeCompare(b[0]))
    
   for (let i = 0 ; i < bookAsArr.length; i++) {
       let element = bookAsArr[i];
       console.log(`${element[0]} -> ${element[1]}`);
   }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);