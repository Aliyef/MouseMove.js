let foto = document.getElementById('foto')

// qutunun ölçüsü -----
const height = foto.clientHeight
const width = foto.clientWidth



//foto Event --------

foto.addEventListener('mousemove',handhover)

function handhover(e){

     //layer olcusu --------
    const xVal = e.layerX
    const yVal = e.layerY


    //hesablama ----------
    const yRotation = 20 * ((xVal - width / 2) / width)

    const xRotation = -20 * ((yVal - height / 2) / height)


    const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
    // hazır dəyəri elavə etmə' --------
    foto.style.transform = string

    
}


//mouseout ------
foto.addEventListener('mouseout',function(){
  foto.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'

})

//mousedown ------
foto.addEventListener('mousedown', function() {
    foto.style.transform = 'perspective(500px) scale(0.7) rotateX(360deg)'
    foto.style.transition = '0.8s'
  })
  
  //mouseup ------
  foto.addEventListener('mouseup', function() {
    foto.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
    foto.style.transition = '.15s'
  })
