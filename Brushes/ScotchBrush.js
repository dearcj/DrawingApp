/**
 * Created by mac-pc on 12/15/15.
 */
extend(ScotchBrush, Brush);

function ScotchBrush(color) {
	Brush.apply(this, color);
	this.name = 'скотч';


}


ScotchBrush.prototype.onSelect = function () {
	var self = this;
	this.imgs = [];
	for (var i = 1; i <= 6; ++i) {
		this.img = new Image();
		this.img.onload = function () {
			self.imgLoaded = true;
		};
		this.img.src = relPath + 'Orange/orange' + i + '.png';
		this.imgs.push(this.img);
	}
}

ScotchBrush.prototype.onDown = function (ctx, x, y) {
	this.startPoint = {x: x, y: y};
};

ScotchBrush.prototype.use = function (obj, ctx) {
	if (!this.imgLoaded) return;
this.img = this.imgs[getRandomArbitrary(1, 6)];
		var len = Math.sqrt((obj.x2 - this.startPoint.x)*(obj.x2 - this.startPoint.x) + (obj.y2 - this.startPoint.y)*(obj.y2 - this.startPoint.y));
		var angle = Math.atan2((obj.y2 - this.startPoint.y) / len, (obj.x2 - this.startPoint.x) / len);
		var dx = (obj.x2 - this.startPoint.x) / len;
		var dy = (obj.y2 - this.startPoint.y) / len;

	ctx.clearRect(0, 0, window.mainCanvasObject.state.width, window.mainCanvasObject.state.height);
	ctx.canvas.width = ctx.canvas.width;

	var count = len / this.img.height;
		var invCount = 0;
		while (count > 0) {
		//	ctx.setTransform(1,0,0,1,this.startPoint.x + dx*this.img.height*invCount,this.startPoint.y + dy*this.img.height*invCount);
			ctx.setTransform(1, 0, 0, 1, 0, 0);

			ctx.translate(this.startPoint.x + dx*this.img.height*invCount - dy*this.img.width / 2, this.startPoint.y + dy*this.img.height*invCount + dx*this.img.width / 2);
			ctx.rotate(angle - Math.PI/2);

			var scaleY = 1;
			if (count < 1) scaleY = count;

			ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height * scaleY, 0, 0, this.img.width, this.img.height * scaleY);

			count -= 1;

			invCount++;
		}
		// draw multiple times to fill gaps on outside of rope slices
};

//

