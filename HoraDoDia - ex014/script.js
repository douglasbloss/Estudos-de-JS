function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("foto");
  var data = new Date();
  var hora = data.getHours()
  // var hora = 19;
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    // BOM DIA!
    foto.innerHTML = '<img src="manha.png">'
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora < 18) {
    // BOA TARDE!
    foto.innerHTML = '<img src="tarde.png">'
    document.body.style.background = "#b9846f";
  } else {
    // BOA NOITE!
    foto.innerHTML = '<img src="noite.png">'
    document.body.style.background = "#515154";
  }
}
