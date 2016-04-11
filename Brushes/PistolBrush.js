/**
 * Created by KURWINDALLAS on 09.01.2016.
 */
/**
 * Created by KURWINDALLAS on 09.01.2016.
 */
/**
 * Created by mac-pc on 12/15/15.
 */
extend(PistolBrush, Brush);

function PistolBrush(color) {
	Brush.apply(this, color);
	this.name = 'пистолет';

	var self = this;
	this.img=new Image();
	this.img.onload=function(){
		self.imgLoaded = true;
	};
	this.img.src = relPath + 'charcoaltrace.png';
}

PistolBrush.prototype.onFinish = function () {
	clearTimeout(this.timeout); this.timeout = null;
	Brush.prototype.onFinish.call(this);

}

PistolBrush.prototype.onDown = function (ctx, x, y) {
	ctx.setTransform(1, 0, 0, 1, 0,  0);
	ctx.clearRect(0, 0, window.mainCanvasObject.state.width, window.mainCanvasObject.state.height);
	ctx.canvas.width = ctx.canvas.width;
	//this.scale = 1;
	// Math.cos(this.rotation)*this.scale*this.img.width*0.4
	// - Math.sin(this.rotation)*this.scale*this.img.width*0.4


	ctx.translate(x,  y);
	ctx.translate( -this.img.width*0.5,   -this.img.height*0.5);

	ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, 0, 0, this.img.width, this.img.height);

}

PistolBrush.prototype.use = function (obj, ctx) {
	if (!this.imgLoaded) return;

};

//

