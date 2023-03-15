document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "carros",
      img: "images/1.jpg"
    },
    {
      name: "carros",
      img: "images/2.jpg"
    },
    {
      name: "carros",
      img: "images/3.jpg"
    },
    {
      name: "carros",
      img: "images/4.jpg"
    },
    {
      name: "carros",
      img: "images/5.jpg"
    },
    {
      name: "carros",
      img: "images/6.jpg"
    },
    {
      name: "carros",
      img: "images/1.jpg"
    },
    {
      name: "carros",
      img: "images/2.jpg"
    },
    {
      name: "carros",
      img: "images/3.jpg"
    },
    {
      name: "carros",
      img: "images/4.jpg"
    },
    {
      name: "carros",
      img: "images/5.jpg"
    },
    {
      name: "carros",
      img: "images/6.jpg"
    }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  //----------------- lecture_03 ----------------------------------//
  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "images/reverso.png");

      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);

      cuadricula.appendChild(carta);
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  crearTablero();
});
