
var Disk = function()
{
	this.radius   = 10;
	this.color    = "black";
	this.location = {x:0,y:0};
};

Disk.prototype.setRayon = function(rayon)
{

	this.radius = rayon;
};

Disk.prototype.setColor = function(couleur)
{

	this.color = couleur;

};

Disk.prototype.setLocation = function(position)
{

	this.location = {x: position.x,y: position.y};

};



Disk.prototype.dessiner = function()
{

context.beginPath();  

context.fillStyle = this.color;

context.arc(this.location.x, this.location.y, this.radius, 0, Math.PI * 2); // Ici aussi

context.fill(); 

}

