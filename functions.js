const QRGenerator = document.getElementById('QRcode')
const form = document.getElementById('URL')
const QRbox = document.getElementById('QRbox')
const QR = new QRCode(QRGenerator)
const box = document.getElementById('box')
const parraf = document.getElementById('warnings')
const URL = document.getElementById('submitURL')
const download = document.getElementById('download')
const copy = document.getElementById('share')
let imgElement = QRGenerator.querySelector("img")

QRbox.style.display = "none"
form.addEventListener('submit', (e)  => {
    e.preventDefault()
    let warnings = ""
    parraf.innerHTML = ""
    if(submitURL.value < 1){
        warnings += `please insert a valid URL`
        parraf.innerHTML = warnings
        QRbox.style.display = "none"
    }
    else{
        box.style.display = "none"
        QRbox.style.display = "flex"
        form.style.display = "none"
        QR.makeCode(form.submitURL.value)
    }
})

imgElement.onload = function(){
    download.href = imgElement.src
}
function getlink() {
    var aux = document.createElement('input');
    aux.setAttribute('value', imgElement.src.split('?')[0].split('#')[0]);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);
    var css = document.createElement('style');
    var estilo = document.createTextNode('#aviso {position:fixed; z-index: 9999999; top: 50%;left:50%;margin-left: -70px;padding: 20px; background: gold;border-radius: 8px;font-family: sans-serif;}');
    css.appendChild(estilo);
    document.head.appendChild(css);
    var aviso = document.createElement('div');
    aviso.setAttribute('id', 'aviso');
    var contenido = document.createTextNode('URL copiada');
    aviso.appendChild(contenido);
    document.body.appendChild(aviso);
    window.load = setTimeout('document.body.removeChild(aviso)', 2000);
  }
