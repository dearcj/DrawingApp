/**
 * Created by mac-pc on 12/15/15.
 */
extend(OrangeBrush, Brush);

function OrangeBrush(color) {
	Brush.apply(this, color);
	this.name = 'кетчуп';

	var self = this;
	this.img=new Image();
	this.img.onload=function(){
		self.imgLoaded = true;
	};
	this.img.src = relPath + 'Catchup/ketch1.png';
}

OrangeBrush.prototype.onFinish = function () {
	clearTimeout(this.timeout); this.timeout = null;

	Brush.prototype.onFinish.call(this);
};

OrangeBrush.prototype.drawCatchupPart = function (ctx, x, y, scale) {
	ctx.setTransform(1, 0, 0, 1, 0,  0);

	ctx.translate(x,  y);
	ctx.translate( -this.img.width*0.5*scale,   -this.img.height*0.5*scale);
	ctx.scale(scale, scale);

	this.lastX = x;
	this.lastY = y;
	ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, 0, 0, this.img.width, this.img.height);
};


OrangeBrush.prototype.onDown = function (ctx, x, y) {
	this.drawCatchupPart(ctx, x, y, 1 + Math.random());
};

OrangeBrush.prototype.use = function (obj, ctx) {
	if (!this.imgLoaded) return;
	if ((obj.x2 - this.lastX)*(obj.x2 - this.lastX) + (obj.y2 - this.lastY)*(obj.y2 - this.lastY) > 1800)
		this.drawCatchupPart(ctx, obj.x2, obj.y2, 1 + Math.random());
};

//

