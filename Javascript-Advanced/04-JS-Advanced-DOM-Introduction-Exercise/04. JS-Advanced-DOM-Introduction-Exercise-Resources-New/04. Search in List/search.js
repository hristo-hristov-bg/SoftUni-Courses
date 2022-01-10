function search() {
   const elements = Array.from(document.querySelectorAll('ul li'));

   const text = document.getElementById('searchText').value;

   let matches = 0;

   elements.forEach(element => {
      if (element.innerHTML.includes(text)) {
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
         matches ++;
      } else {
         element.style.fontWeight = 'normal';
         element.style.textDecoration = '';
      }
   });

   document.getElementById('result').textContent = `${matches} matches found`;
}
