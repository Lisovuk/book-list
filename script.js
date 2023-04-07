// Создать html-страницу со списком книг. 
// При щелчке на книгу, цвет фона должен
//  меняться на оранжевый. Учтите, 
// что при повторном щелчке на другую книгу, 
// предыдущей – необходимо возвращать прежний цвет. 
// Использовать делегирование событий.

let list = document.getElementById('strongDiv')
let colorList

list.onclick = function(event) {
  console.log(event.target.tagName);
   if (event.target.tagName != 'DIV' ) {
      return;
   }
   newcolor(event.target)
}

function newcolor(div) {
   if (colorList) {
      colorList.classList.remove('newcolor')
   }
   colorList = div
   colorList.classList.add('newcolor')
}


