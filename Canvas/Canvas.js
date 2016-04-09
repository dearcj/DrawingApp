function Canvas(frontCtx, backCtx, canvasType) {
	this.canvasType = canvasType;
	this.actions = [];
	this.currentBrush = null;
	var el = document.getElementById('main-canvas');

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

	var dataURL = canvas.toDataURL("image/png");
	return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
};


Canvas.prototype.saveImage = function() {
	var canvas = document.getElementById('main-canvas');

	var dataURL = canvas.toDataURL("image/png");
	return dataURL;// dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
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
};

Canvas.prototype.resetCanvas = function () {
	this.state.backCtx.clearRect(0, 0, this.state.width, this.state.height);
	var ctx = this.state.backCtx;
	switch (this.canvasType) {
		case '1':
			var imageObj = new Image();
			imageObj.onload = function() {
				ctx.drawImage(this, 0, 0);
			};
			imageObj.src = relPath + 'Assets/Backgrounds/test1.jpg';
			break;
		case '2':

			break;
		case '3':

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



Canvas.prototype.sendPic = function() {
		data = {
			api_method: 'applyimagetogallery',
			user_id: 1,
			image: this.saveImage(),
			name: "פûגפûגפûג",
			description: "פûגפûג"
		};

		$.ajax({
			type: "POST",
			url: "http://188.227.16.35/wp-content/themes/mmoma/api/index.php",
			data: data,
			success: function cb(res) {
				console.log(res);
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