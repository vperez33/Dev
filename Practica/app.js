window.onload = () => {
  function aMayuscula() {
    let texto = document.getElementById("texto");
    texto.value = texto.value.toUpperCase();
  }

  function aMinuscula() {
    let texto = document.getElementById("texto").value;
    document.getElementById("texto").value = texto.toLowerCase();
  }

  function aMayusculaTiempoReal() {
    let texto = document.getElementById("texto").value;
    document.getElementById("texto").value = texto.toUpperCase();
    document.getElementById("textoTiempoReal").textContent =
      document.getElementById("texto").value;
  }

  function aMayusculaTiempoRealPropioElemento(element) {
    //let texto = element.value;
    element.value = element.value.toUpperCase();
    document.getElementById("textoTiempoReal").textContent = element.value;
  }

  let elemento = document.getElementById("texto");
  /*
Manera chapucera*/
  /*
elemento.addEventListener("keyup", function(){
    toUpperCase();
});
*/
  /*
elemento.addEventListener("keyup", function(event){
    //target es donde se ha producido el evento
    event.target
    event.target.value = target.value.toUpperCase();
});
*/
  /* Lamda */
  elemento.addEventListener("keyup", (event) => {
    event.target.value = target.value.toUpperCase();
  });
};
