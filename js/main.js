window.onload = function () {
  /*
        El carrusel realizado en este codigo, funciona aplicando margenes al contenedor de las imagenes, creanco la
        ilusion de que estas se van moviendo
     */
  var margin = 0;
  var slider = document.getElementById("slider"); //elemento contenedor
  var balls = document.getElementById("balls"); // las pequeñas esferas debajo de la imagen que indican la transicion
  function change(container) {
    container
      .addEventListener("click", function (evt) {
        //botones para realizar el movimiento
        let prev = container.querySelector(".previous");
        let next = container.querySelector(".next");
        let display = document.getElementById("display"); //elemento contenedor de las imagenes
        let target = evt.target;
        if (target == prev) {
          if (margin < 0) {
            margin += 100;

          }
        } else if (target == next) {
          if (margin > -300) {
            margin += -100;

          }
        }

        display.style.marginLeft = margin + "%";
        changeBalls();

      });
  }
  //esta funcion se encarga de crear el movimiento de las esferas
  function changeBalls() {
    let lis = balls.getElementsByTagName("li");
    switch (margin) {
      case 0:
        lis[0].style.background = "#0F0";
        lis[1].style.background = "#DDD";
        lis[2].style.background = "#DDD";
        lis[3].style.background = "#DDD";
        break;
      case - 100:
        lis[1].style.background = "#0F0";
        lis[0].style.background = "#DDD";
        lis[2].style.background = "#DDD";
        lis[3].style.background = "#DDD";
        break;
      case - 200:
        lis[2].style.background = "#0F0";
        lis[1].style.background = "#DDD";
        lis[0].style.background = "#DDD";
        lis[3].style.background = "#DDD";
        break;
      case - 300:
        lis[3].style.background = "#0F0";
        lis[1].style.background = "#DDD";
        lis[2].style.background = "#DDD";
        lis[0].style.background = "#DDD";
        break;
    }
  }

  change(slider);
  changeBalls();
}