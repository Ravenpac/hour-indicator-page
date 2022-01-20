function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()

  if (hora >= 1 && hora < 2) {
    msg.innerHTML = `Agora é 1 hora!`
  } else {
    msg.innerHTML = `Agora são ${hora} horas!`
  }

  if (hora >= 0 && hora < 12) {
    img.src = 'manhã.jpg'
    document.body.style.background = '#b97953'
  } else if (hora >= 12 && hora < 18) {
    img.src = 'tarde.jpg'
    document.body.style.background = '#fc8507'
  } else {
    img.src = 'noite.jpg'
    document.body.style.background = '#ffc89f'
  }
}
