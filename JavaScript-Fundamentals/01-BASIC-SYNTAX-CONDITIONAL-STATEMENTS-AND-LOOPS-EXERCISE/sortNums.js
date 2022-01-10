function sortNums(array) {
   let numbers = array;

   numbers.sort(function(a, b) {
      return b - a;
    });

   for (let i = 0; i < array.length; i ++) {
      console.log(array[i])
   }
}
sortNums([0,0, 2]);
