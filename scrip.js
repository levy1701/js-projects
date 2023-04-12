
function loading() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var date = new Date()
    var hour = date.getHours()
    //var hour = 22
    msg.innerHTML = `Agora são ${hour} horas!`

    if (hour >= 0 && hour < 12) {
        //GOOD MORNING
       img.src = 'img/morning.jpg'
       document.body.style.background = '#FFD140'
    } else if (hour >= 12 && hour <= 18) {
        //GOOD AFTERNOON
        img.src = 'img/afternoon.jpg'
        document.body.style.background = '#FF6800'
    } else {
        //GOOD NIGHT
        img.src = 'img/night.jpg'
        document.body.style.background = '#001028'
    }
}