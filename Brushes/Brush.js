/**
 * Created by KURWINDALLAS on 14.12.2015.
 */

function Brush(color) {
	this.color = color;
}

Brush.prototype.onSelect = function () {

}

Brush.prototype.setMode = function (mode) {
	this.mode = mode;
};

Brush.prototype.use = function (obj, ctx) {};

Brush.prototype.onDown = function (ctx, x, y) {};

Brush.prototype.onFinish = function () {

	if (window.mainCanvasObject.tags.indexOf(this.name) < 0) {
		window.mainCanvasObject.tags.push(this.name);
	}

};

//