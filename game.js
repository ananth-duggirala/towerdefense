var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Buildings - Roads, Houses, Commercial, Industrial, Military
class Building {
	width;
	height;
	constructor(x1, y1, x2, y2, HP, name, color) {
		// dimensions
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.height = y2 - y1;
		this.width = x2 - x1;
		// TODO: restrict these values to a multiple of tile size on a square grid

		// game attributes
		this.name = name
		this.HP = HP
		this.color = color
	}

	drawBuilding(ctx) {
		ctx.beginPath();
		ctx.rect(this.x1, this.y1, this.width, this.height);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();

		ctx.fillStyle = 'orange'
		ctx.font = '12px Verdana';
		ctx.fillText(this.name + ": " + this.HP + "HP", this.x1, this.y2);
	}
}

class Road extends Building {
}

class House extends Building {
}

class CommercialBuilding extends Building {
}

class IndustrialBuilding extends Building {
}

class MilitaryBuilding extends Building {
}

var building = new Building(0,0,100,100,80,"house1",'#398cb2');


function draw() {
	building.drawBuilding(ctx);
}

requestAnimationFrame(draw);