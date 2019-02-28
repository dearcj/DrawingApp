/**
 * Created by dearcj on 14.12.2015.
 */

extend(Pencil, Brush);

function Pencil(color) {
	Brush.apply(this, color);
}

Pencil.prototype.use = function (obj, ctx) {
	ctx.moveTo(obj.x1, obj.y1);
	ctx.lineTo(obj.x2, obj.y2);
	ctx.strokeStyle="red";
	ctx.stroke();
	ctx.lineWidth = 5;
};

//
