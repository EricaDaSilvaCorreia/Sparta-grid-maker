# Sparta-grid-maker
**By : Erica P da Silva Correia**

####Work description :

1. Make a grid using only JavaScript to create and edit.
2. grid tiles must change to a random color whenever clicked.
3. (BONUS) Use OOP/put grid in OOP.
4. (BONUS) grid tiles also emit sound when clicked.


####Tech Used :
**JavaScript, HTML DOM**

-----
#####how to download :


1. go to the github page [**https://github.com/EricaDaSilvaCorreia**](https://github.com/EricaDaSilvaCorreia)
2. Click repositories and select the repository [**Sparta-grid-maker**](https://github.com/EricaDaSilvaCorreia/Sparta-grid-maker)
3. Click 'Clone or Download'
4. Choose between **Open in Desktop**, **Download ZIP**, **Clone with SSH**, **Clone with HTTPs**

-----


#####Challenges :

The main issue I had with the assignment was that I went about it completely wrong. I tried to make the grid with the OOP instead of trying a basic version first which was incredibly time consuming in retrospect. I had sketched it out at the beginning and thought of making the grid as if I was making a table only a bit more dynamic, but since I switched out the words (table for grid etc) it only confused me and I ended up wasting a lot of time organising a mess which could've been avoided had I just not changed the words around.

Once I realised this, I just scrapped everything and started from scratch and everything worked fine.

I did try my hand at the OOP route but I seem to be going about it the wrong way. I tried to essentialy apply the structure of tht OOP Calculator to the grid
but I get an error for unexpected token at the bottom. There might be something I'm missing or overlooking.

~~~javascript
const grid = {};

    grid.board = document.getElementById('board');
    grid.table = () => {
      const table = document.createElement('table');
    grid.tbody = () => {
      const tbody = document.createElement('tbody');
      table.appendChild(tbody);
    }
    grid.tsound = () => {
      const tsound = document.createElement('audio');
      tsound.setAttribute('src','bubbles.mp3');
    }
    grid.trows = () => {
      let rows = prompt('How many rows would you like to have?');
    }
    grid.tcols = () => {
      let rows = prompt('How many rows would you like to have?');
    }
    grid.tgetTable = () => {
      
      grid.tbody();
      grid.trows();
      grid.tcols();
      grid.tsound();
      grid.tgetTable();

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


        }//close colsloop
      }//close rowloop

      board.appendChild(table);
    }//close get table

}); //close addEventListener
~~~


-----

#####Take-Aways :

Overall I'm very happy with how the grid turned out. I'm pretty happy with my progress so far, though it's been challenging I'm getting a better grasp on the subject the more I practice and experiment with it. I need to work on the time issue regarding the above mentioned challenges but overall I give this asignment 6/10.

-----

