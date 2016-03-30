/**
 * Created by mac-pc on 12/15/15.
 */
extend(PatternBrush, Brush);

function PatternBrush(color) {
  Brush.apply(this, color);
}


PatternBrush.prototype.getPattern = function(ctx) {
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

PatternBrush.prototype.use = function (obj, ctx) {
  ctx.lineWidth = 25;
  ctx.lineJoin = ctx.lineCap = 'round';
  ctx.strokeStyle = this.getPattern(ctx);

  ctx.beginPath();
  ctx.moveTo(obj.x1, obj.y1);

  ctx.quadraticCurveTo(obj.x1, obj.y1, obj.x1 + 0.5 * (obj.x2 - obj.x1), obj.y1 + 0.5 * (obj.y2 - obj.y1));

  /*for (var i = 1, len = points.length; i < len; i++) {
    var midPoint = midPointBtw(p1, p2);
    ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);
    p1 = points[i];
    p2 = points[i+1];
  }*/
  ctx.lineTo(obj.x1, obj.y1);
  ctx.stroke();
};
