function solve(area, vol, input) {
   const data = JSON.parse(input);
   
   function calculator(obj) {
       let areaObj = Math.abs(area.call(obj));
       let volumeObj = Math.abs(vol.call(obj));
       return {
           area: areaObj,
           volume: volumeObj
       }
   }
   return data.map(calculator);
}

console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    ));

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};
