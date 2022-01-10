function solution(collection) {
    let str = [];
    for (let collect of collection) {
        let [command, word] = collect.split(' ');
        switch (command) {
            case 'add':
                str += word;
                break;
            case 'remove':
                str.filter((word) => delete str['word']);
                break;
            case 'print':
                console.log(str.split(','));
                break;

        }
        //     function add() {
        //         str += word;
        //     }
        //     function remove() {
        //         str.filter((word) => delete str[word]);
        //     }
        //     function print(){
        //         console.log(str.split(','));
        //     }
    }
}

solution(['add hello', 'add again', 'remove hello', 'add again', 'print'])