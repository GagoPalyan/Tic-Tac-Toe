const game = document.getElementById("Area");
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const x = `<i class="fa fa-close"></i>`;
const o = `<i class="fa fa-circle-o"></i>`;
let player = "Player 1";

function lose() {
  alert(`${player} lose!`);
  window.location.reload();
}

array.forEach((item) => {
  let square = document.createElement("div");
  square.className = "square";
  square.id = item;
  square.addEventListener("click", () => {
    if (player == "Player 1") {
      if (square.innerHTML == "") {
        square.innerHTML = x;
      } else {
        lose();
      }
      player = "Player 2";
    } else {
      if (square.innerHTML == "") {
        square.innerHTML = o;
      } else {
        lose();
      }
      player = "Player 1";
    }
  });
  game.appendChild(square);
});

game.addEventListener("click", () => {
  const area1 = document.getElementById("1");
  const area2 = document.getElementById("2");
  const area3 = document.getElementById("3");
  const area4 = document.getElementById("4");
  const area5 = document.getElementById("5");
  const area6 = document.getElementById("6");
  const area7 = document.getElementById("7");
  const area8 = document.getElementById("8");
  const area9 = document.getElementById("9");
  if (
    (area1.innerHTML == x && area2.innerHTML == x && area3.innerHTML == x) ||
    (area4.innerHTML == x && area5.innerHTML == x && area6.innerHTML == x) ||
    (area7.innerHTML == x && area8.innerHTML == x && area9.innerHTML == x) ||
    (area1.innerHTML == x && area4.innerHTML == x && area7.innerHTML == x) ||
    (area2.innerHTML == x && area5.innerHTML == x && area8.innerHTML == x) ||
    (area3.innerHTML == x && area6.innerHTML == x && area9.innerHTML == x) ||
    (area1.innerHTML == x && area5.innerHTML == x && area9.innerHTML == x) ||
    (area3.innerHTML == x && area5.innerHTML == x && area7.innerHTML == x)
  ) {
    setTimeout(() => {
      alert("Player 1 win!");
      window.location.reload();
    }, 50);
  } else if (
    (area1.innerHTML == o && area2.innerHTML == o && area3.innerHTML == o) ||
    (area4.innerHTML == o && area5.innerHTML == o && area6.innerHTML == o) ||
    (area7.innerHTML == o && area8.innerHTML == o && area9.innerHTML == o) ||
    (area1.innerHTML == o && area4.innerHTML == o && area7.innerHTML == o) ||
    (area2.innerHTML == o && area5.innerHTML == o && area8.innerHTML == o) ||
    (area3.innerHTML == o && area6.innerHTML == o && area9.innerHTML == o) ||
    (area1.innerHTML == o && area5.innerHTML == o && area9.innerHTML == o) ||
    (area3.innerHTML == o && area5.innerHTML == o && area7.innerHTML == o)
  ) {
    setTimeout(() => {
      alert("Player 2 win!");
      window.location.reload();
    }, 50);
  } else if (
    area1.innerHTML != "" &&
    area2.innerHTML != "" &&
    area3.innerHTML != "" &&
    area4.innerHTML != "" &&
    area5.innerHTML != "" &&
    area6.innerHTML != "" &&
    area7.innerHTML != "" &&
    area8.innerHTML != "" &&
    area9.innerHTML != ""
  ) {
    alert("Draw!");
    window.location.reload();
  }
});
