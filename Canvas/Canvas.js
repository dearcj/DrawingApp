function Canvas(frontCtx, backCtx, canvasType) {
	this.canvasType = canvasType;
	this.actions = [];
	this.currentBrush = null;
	var el = document.getElementById('main-canvas');
	this.cursImg=new Image();
	this.cursorSrc = window.basePath + 'imgs/tools/orange.png';

	this.state = {
		width: el.width,
		height: el.height,
		drawState: null,
		ctx: frontCtx,
		backCtx: backCtx
	};
}

Canvas.prototype.savePattern = function() {
	var canvas = document.getElementById('main-canvas');
	//resize issue

	var dataURL = canvas.toDataURL("image/jpg");
	return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
};


Canvas.prototype.saveImage = function() {
	var canvas = document.getElementById('back-canvas');

	var dataURL = canvas.toDataURL("image/jpg", 0.85);
	return  dataURL;//.replace(/^data:image\/(png|jpg);base64,/, "");
};

Canvas.prototype.mouseMoveAction = function(e) {
	if (this.state.drawState == 'insideAction') {
		this.state.mouseX = e.layerX;
		this.state.mouseY = e.layerY;

		var action = this.actions[this.actions.length - 1];
		var obj = action.addObject(this.state.prevMouseX, this.state.prevMouseY, this.state.mouseX, this.state.mouseY);
		action.brush.use(obj, this.state.ctx, action);

		this.state.prevMouseX = this.state.mouseX;
		this.state.prevMouseY = this.state.mouseY;
	}
	if (this.cursImg.src != this.cursorSrc)
	this.cursImg.src = this.cursorSrc;

	var cursCanv =   document.getElementById('cursor-canvas');
	var ctx = cursCanv.getContext('2d');
	ctx.clearRect(0, 0, this.state.width, this.state.height);
	ctx.drawImage(this.cursImg,  e.layerX - this.cursImg.width / 2,  e.layerY - this.cursImg.height/2);

};

Canvas.prototype.resetCanvas = function () {
	this.state.backCtx.clearRect(0, 0, this.state.width, this.state.height);
	var ctx = this.state.backCtx;

	this.tags = [];

	var pathToSurfaces = 'http://188.227.16.35/wp-content/themes/mmoma/img/textures/';
	switch (this.canvasType) {
		case 1:
			var imageObj = new Image();
			imageObj.onload = function() {
				ctx.drawImage(this, 0, 0);
			};
			this.tags.push('дерево');
			imageObj.src = pathToSurfaces + 'wood.jpg';
			break;
		case 2:
			var imageObj = new Image();
			imageObj.onload = function() {
				ctx.drawImage(this, 0, 0);
			};
			imageObj.src = pathToSurfaces + 'board.jpg';
			this.tags.push('доска');
			break;
		case 3:
			var imageObj = new Image();
			imageObj.onload = function() {
				ctx.drawImage(this, 0, 0);
			};
			imageObj.src = pathToSurfaces + 'canvas.jpg';
			this.tags.push('полотно');

			break;
		case 4:
			var imageObj = new Image();
			imageObj.onload = function() {
				ctx.drawImage(this, 0, 0);
			};
			imageObj.src = pathToSurfaces + 'brick.jpg';
			this.tags.push('кирпич');

			break;
		case 5:
			var imageObj = new Image();
			imageObj.onload = function() {
				ctx.drawImage(this, 0, 0);
			};
			imageObj.src = pathToSurfaces + 'cardboard.jpg';
			this.tags.push('картон');

			break;
		case 6:
			var imageObj = new Image();
			imageObj.onload = function() {
				ctx.drawImage(this, 0, 0);
			};
			imageObj.src = pathToSurfaces + 'wallpaper.jpg';
			this.tags.push('обои');

			break;
		case 7:
			var imageObj = new Image();
			imageObj.onload = function() {
				ctx.drawImage(this, 0, 0);
			};
			this.tags.push('металл');

			imageObj.src = pathToSurfaces + 'metal.jpg';
			break;
	}
};

Canvas.prototype.redraw = function (ctx){
	this.resetCanvas(this.state.backCtx);

	var len = this.actions.length;
	for (var i = 0; i < len; ++i) {
		var br = this.actions[i].brush;
		var olen = this.actions[i].objects.length;
		for (var j = 0; j < olen; ++j) {
			br.use(this.actions[i].objects[j], this.state.backCtx);
		}
	}
};

//

Canvas.prototype.sendPic = function(cbbbb, img) {
		data = {
			api_method: 'applyimagetogallery',
			user_id: 1,
			image: img,
			name: $('#in-author').val(),
			description: $('#in-label').val(),
			tags: this.tags.join(';')
		};

		$.ajax({
			type: "POST",
			url: "http://188.227.16.35/wp-content/themes/mmoma/api/index.php",
			data: data,
			success: function cb(res) {
				localStorage.setItem('imageId', res.imageId);
				console.log(res);
				cbbbb();
			}
		});
};


Canvas.prototype.finishAction = function (e) {
	var el = document.getElementById('main-canvas');
	this.state.backCtx.drawImage(el, 0, 0);
	this.state.ctx.canvas.width = this.state.ctx.canvas.width;
	this.state.ctx.clearRect(0, 0, this.state.width, this.state.height);
	this.state.drawState = null;
	this.actions[this.actions.length - 1].brush.onFinish();
};

Canvas.prototype.startAction = function (e) {
	this.state.prevMouseX = e.layerX;
	this.state.prevMouseY = e.layerY;
	this.state.drawState = 'insideAction';
	this.actions.push(new Action(this.currentBrush));

	this.state.ctx.clearRect(0, 0, window.mainCanvasObject.state.width, window.mainCanvasObject.state.height);
	this.state.ctx.canvas.width = this.state.ctx.canvas.width;

	this.actions[this.actions.length - 1].brush.onDown(this.state.ctx, this.state.prevMouseX, this.state.prevMouseY);
};