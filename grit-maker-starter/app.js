document.addEventListener('DOMContentLoaded', function(){
  // Add code here
  const board = document.getElementById('board');
  //
  const table = document.createElement('table');

  const tbody = document.createElement('table');
  table.appendChild(tbody);

  const tsound = document.createElement('audio');
  tsound.setAttribute('src','bubbles.mp3')

  let rows = prompt('How many rows would you like to have?');
  let cols = prompt('How many columns would you like to have?');

  for (i = 0; i < rows; i++) {
    let tr = document.createElement('tr');
    tr.setAttribute('class', 'row');
    tbody.appendChild(tr);

    for (var j = 0; j < cols; j++) {
      let td = document.createElement('td')
      td.setAttribute('class', 'col');

      td.addEventListener('click', (e) => {
      e.target.style.background = '#' + (Math.floor(Math.random()*16777215).toString(16))
      e.target.style.background = tsound.play();
      });


      tr.appendChild(td);


    }
  }

  board.appendChild(table);
}); //close addEventListener
