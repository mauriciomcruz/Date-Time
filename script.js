const image = document.getElementById('centerImg');

var res = document.getElementById('res')
var hour = document.getElementById('time')
var hourChange = new Date()
var dayHour = hourChange.getHours()

function refresh() {
  var date = new Date().toLocaleString('pt-BR')
  var dateFormat = date.replace(',', ' - ')
  hour.innerHTML = `Data e hora atual: ${dateFormat}`
}
setInterval(refresh, 1000)


if (dayHour >= 6 && dayHour < 12) {
    document.body.style.backgroundColor = "#F2EEAC"
    image.src = 'img/morning-image.jpg'
    res.innerHTML = 'O periodo atual é <strong>Manhã</strong>'
 
} else if (dayHour >= 12 && dayHour < 18) {
    document.body.style.backgroundColor = "#F2916D"
    image.src = 'img/afternoon-image.jpg'
    res.innerHTML = 'O periodo atual é <strong>Tarde</strong>'
} else if (dayHour >= 18 && dayHour < 24) {
    document.body.style.backgroundColor = "#38385A"
    image.src = 'img/night-image.png'
    res.innerHTML = 'O periodo atual é <strong>Noite</strong>'
} else {
    document.body.style.backgroundColor = "#1E2E3C"
    image.src = 'img/afternoon-image.jpg'
    res.innerHTML = 'O periodo atual é <strong>Madrugada</strong>'
}

