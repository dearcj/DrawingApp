/**
 * Created by KURWINDALLAS on 08.01.2016.
 */
/**
 * Created by mac-pc on 12/15/15.
 */
extend(ThreadBrush, Brush);

function ThreadBrush(color) {
	Brush.apply(this, color);
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
	ctx.lineWidth = 2;
	ctx.strokeStyle = 'rgba(0,0,120,0.1)';

	ctx.moveTo(obj.x1, obj.y1);
	ctx.lineTo(obj.x2, obj.y2);
	ctx.stroke();


	var	len = action.objects.length;
	for (var i = Math.round(len*0.9); i < len; i++) {

		var x1 = action.objects[i].x1;
		var y1 = action.objects[i].y1;
		dx = x1 - obj.x2;
		dy = y1 - obj.y2;
		d = dx * dx + dy * dy;
		ctx.strokeStyle = 'rgba(0,0,120,0.05)';

		var nearPoint = action.objects[i-3];
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

};

//


