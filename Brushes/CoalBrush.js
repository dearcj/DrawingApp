/**
 * Created by mac-pc on 12/15/15.
 */
extend(CoalBrush, Brush);

function CoalBrush(color) {
	Brush.apply(this, color);

	var self = this;
	this.img=new Image();
	this.img.onload=function(){
		self.imgLoaded = true;
	};
	this.img.src='Assets/charcoaltrace.png';
}


CoalBrush.prototype.getPattern = function(ctx) {
	var patternCanvas = document.createElement('canvas'),
		dotWidth = 20,
		dotDistance = 5,
		patternCtx = patternCanvas.getContext('2d');

	patternCanvas.width = patternCanvas.height = dotWidth + dotDistance;

	patternCtx.fillStyle = 'red';
	patternCtx.beginPath();
	patternCtx.arc(dotWidth / 2, dotWidth / 2, dotWidth / 2, 0, Math.PI * 2, false);
	patternCtx.closePath();
	patternCtx.fill();
	return ctx.createPattern(patternCanvas, 'repeat');
}

CoalBrush.prototype.use = function (obj, ctx) {
	if (!this.imgLoaded) return;

	var render = function (x, y) {
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		var scale = 0.1*(Math.random() - 0.5) + 1;
		ctx.translate(x - scale*this.img.width/2, y - scale*this.img.height / 2);
		ctx.drawImage(this.img, 0, 0, this.img.width*scale, this.img.height*scale, 0, 0, this.img.width, this.img.height);
	};
	render.bind(this, obj.x1 + 0.5*(obj.x2 - obj.x1), obj.y1 + 0.5*(obj.y2 - obj.y1))();

	render.bind(this, obj.x2, obj.y2)();
};
