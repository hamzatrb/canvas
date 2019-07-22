var canvas;
var context;







/**********************function************************************/

function getMouseLocation(event)
{

var position = {};

var rect = canvas.getBoundingClientRect();

 	 x = rect.left;
 	 y = rect.top;

 	 var styles = window.getComputedStyle(canvas);


 	 posx = event.clientX;

 	 posy = event.clientY;

 	 position.x = ( posx - x ) - parseInt(styles.borderLeftWidth);

 	 position.y = ( posy - y ) - parseInt(styles.borderTopWidth);

// alert ("Left: " + x + ", Top: " + y + " clientX "+ posx +" clientY "+posy);



console.log(position);


return position;



}

//on doivent utiliser l'objet event pour bien recuperer le clientx et clienty
function onClickCanvas(event)

{

	//alert('canvas fonctionne');

var radius ,
	color,
	location;




    radius = getRandomInteger(10,30);

	color  = getRandomColor();

	location = getMouseLocation(event);

var disk = new Disk();

disk.setColor(color);

disk.setRayon(radius);

disk.setLocation(location);

disk.dessiner();

/*
context.beginPath(); // cercle 

context.fillStyle = color;

context.arc(location.x, location.y, radius, 0, Math.PI * 2); // Ici aussi

context.fill(); //remplir le cercle avec context.fill()*/




}














/**********************programme principale************************************/

document.addEventListener('DOMContentLoaded',function()

{

canvas  = document.querySelector('#canvas');

context = canvas.getContext('2d');

canvas.addEventListener('click',onClickCanvas);





});

//console.log(getRandomColor());