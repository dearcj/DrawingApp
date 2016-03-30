/**
 * Created by KURWINDALLAS on 14.12.2015.
 */

function Action(brush) {
	this.objects = [];
	this.brush = brush;
}

Action.prototype.addObject = function(x1, y1, x2, y2, size) {
	var obj = {x1: x1, y1: y1, x2: x2, y2: y2, size: size};
	this.objects.push(obj);
	return obj;
};
