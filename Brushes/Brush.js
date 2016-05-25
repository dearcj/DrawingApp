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


	var tag = '';
	if (this.mode > 0)
		tag = this.name[this.mode - 1]; else
		tag = this.name[0];

	if (window.mainCanvasObject.tags.indexOf(tag) < 0) {
		window.mainCanvasObject.tags.push(tag);
	}

	var innerTag = '';
	if (this.mode > 0)
		innerTag = this.innerName[this.mode - 1]; else
		innerTag = this.innerName[0];

	if (window.mainCanvasObject.innerTags.indexOf(innerTag) < 0) {
		window.mainCanvasObject.innerTags.push(innerTag);
	}

};

//