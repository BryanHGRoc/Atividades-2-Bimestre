const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width  = 1000
canvas.height = 1000

//QUADRADO//
    ctx.fillStyle = 'blue';
    ctx.fillRect(65,250,110,110);

//RETANGULO//
    ctx.fillStyle = 'red';
    ctx.fillRect(65,100,110,50);

//LINHA//    
    ctx.beginPath();
    ctx.moveTo(300,100);
    ctx.lineTo(400,100);
    ctx.stroke();

//CURVA//
    ctx.beginPath();
    ctx.moveTo(75,25);
    ctx.quadraticCurveTo(25,25,25,62.5);
    ctx.stroke();

//CIRCULO//
    ctx.beginPath();
    ctx.arc(350,300,50,0, Math.PI * 2, true);
    ctx.moveTo(110,75);
    ctx.stroke();

//IMAGEM//
   var imagem = document.getElementById('img2');

 