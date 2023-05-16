const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//QUADRADO//
    ctx.fillStyle = 'blue';
    ctx.fillRect(50,50,150,150);

//RETANGULO//
    ctx.fillStyle = 'red';
    ctx.fillRect(100,100,50,50);

//LINHA//    
    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(200, 100);
    ctx.stroke();

//CURVA//
    ctx.beginPath();
    ctx.moveTo(75,25);
    ctx.quadraticCurveTo(25,25,25,62.5);
    ctx.stroke();

//CIRCULO//
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2, true);

//IMAGEM//
    var imagem = new image();
    imagem.onload =function() {
        canvas.drawImage(imagem,50,38);
    };
    imagem.src = 'img/capi.jpg';