/**
 * Created by KURWINDALLAS on 08.01.2016.
 */
/**
 * Created by mac-pc on 12/15/15.
 */
extend(ThreadBrush, Brush);

function ThreadBrush(color) {
	Brush.apply(this, color);

	this.name = ['нитки', 'нитки', 'нитки', 'нитки', 'нитки', 'нитки', 'нитки', 'нитки'];
	this.innerName = ['нитки-1', 'нитки-1', 'нитки-1', 'нитки-2', 'нитки-2', 'нитки-2', 'нитки-2'];

}

ThreadBrush.prototype.onSelect = function () {
	var self = this;
	this.img=new Image();
	this.img.onload=function(){
		self.imgLoaded = true;
	};
	switch (this.mode) {
		case 1:
			this.color = '#d83610';
			break;
		case 2:
			this.color = '#d87c10';
			break;
		case 3:
			this.color = '#d8b910';
			break;
		case 4:
			this.color = '#2cd810';
			break;
		case 5:
			this.color = '#1094d8';
			break;
		case 6:
			this.color = '#0a34cf';
			break;
		case 7:
			this.color = '#870fdb';
			break;
	}
}


ThreadBrush.prototype.onDown = function (ctx, x, y) {
Brush.prototype.onDown.call(this, ctx, x, y);
	ZSound.Play('needle');


}
ThreadBrush.prototype.getPattern = function(ctx) {
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

ThreadBrush.prototype.use = function (obj, ctx, action) {
	ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.strokeStyle = this.color;//'rgba(0,0,120,0.1)';
	ctx.globalAlpha = 0.3;
	ctx.moveTo(obj.x1, obj.y1);
	ctx.lineTo(obj.x2, obj.y2);
	ctx.stroke();


	var	len = action.objects.length;
	for (var i = Math.round(len*0.4); i < len; i++) {

		var x1 = action.objects[i].x1;
		var y1 = action.objects[i].y1;
		dx = x1 - obj.x2;
		dy = y1 - obj.y2;
		d = dx * dx + dy * dy;
		ctx.globalAlpha = 0.05;

		var nearPoint = action.objects[i-4];
		if (nearPoint) {
			ctx.moveTo(nearPoint.x1, nearPoint.y1);
			ctx.lineTo(x1, y1);
		}
	}
	ctx.stroke();


	/*	if (d > 300 && d < 1000) {
	 ctx.beginPath();
	 ctx.strokeStyle = 'rgba(0,0,120,0.3)';
	 ctx.moveTo( obj.x2 + (dx * 0.2), obj.y2 + (dy * 0.2));
	 ctx.lineTo( x1 - (dx * 0.2), y1 - (dy * 0.2));
	 ctx.stroke();
	 }*/


	/*	if (d > 300 && d < 1000) {
			ctx.beginPath();
			ctx.strokeStyle = 'rgba(0,0,120,0.3)';
			ctx.moveTo( obj.x2 + (dx * 0.2), obj.y2 + (dy * 0.2));
			ctx.lineTo( x1 - (dx * 0.2), y1 - (dy * 0.2));
			ctx.stroke();
		}*/

};

//


