/**
 * Created by KURWINDALLAS on 14.12.2015.
 */
extend(SmoothBrush, Brush);

function SmoothBrush(color) {
	Brush.apply(this, color);
	this.w = 40;
}

SmoothBrush.prototype.use = function (obj, ctx) {
	var renderCircle = function(x, y) {
		var radgrad = ctx.createRadialGradient(
			x, y, 10, x, y, this.w / 2);

			var colorObj = intToRgb(this.color);
			var colorStr =  colorObj.r + ',' + colorObj.g + ',' + colorObj.b ;
			radgrad.addColorStop(0, '#000');
			radgrad.addColorStop(0.8, 'rgba(' + colorStr + ',0.3)');
			radgrad.addColorStop(1, 'rgba(' + colorStr + ',0)');
			ctx.fillStyle = radgrad;

			ctx.fillRect(x - this.w / 2, y - this.w / 2, this.w, this.w);
	};

	renderCircle.bind(this)(obj.x2, obj.y2);
	renderCircle.bind(this)(obj.x1 + 0.5 * (obj.x2 - obj.x1), obj.y1 + 0.5 * (obj.y2 - obj.y1));
};

//
