/**
 * Created by mac-pc on 12/12/15.
 */

var initApplication = function() {
  lcg.setSeed(100);
  var el = document.getElementById('back-canvas');
  var elDraw = document.getElementById('main-canvas');
  var backCtx = el.getContext('2d');
  var frontCtx = elDraw.getContext('2d');

  var canvas = new Canvas(frontCtx, backCtx, getParameterByName('c'));

//  history.replaceState( {} , null, this.location.pathname );

  window.mainCanvasObject = canvas;

  var brushScotch = new ScotchBrush();
  var brushCoal = new CoalBrush();
  var brushOrange = new PatternBrush();
  var brushDenim = new DenimBrush();
  var brushGrass = new GrassBrush();
  var brushThread = new ThreadBrush();
  var brushPistol = new PistolBrush();
  var brushCatchup = new CatchupBrush();

  canvas.currentBrush = brushScotch;

  var btnScotch = document.getElementById('btn-scotch');
  var btnCoal = document.getElementById('btn-coal');
  var btnOrange = document.getElementById('btn-orange');
  var btnDenim = document.getElementById('btn-denim');
  var btnGrass = document.getElementById('btn-grass');
  var btnCatchup = document.getElementById('btn-catchup');
  var btnThread = document.getElementById('btn-thread');
  var btnPistol= document.getElementById('btn-pistol');

  btnScotch.addEventListener('click', function () {canvas.currentBrush = brushScotch;});
  btnCoal.addEventListener('click', function () {canvas.currentBrush = brushCoal;});
  btnOrange.addEventListener('click', function () {canvas.currentBrush = brushOrange;});
  btnDenim.addEventListener('click', function () {canvas.currentBrush = brushDenim;});
  btnGrass.addEventListener('click', function () {canvas.currentBrush = brushGrass;});
  btnCatchup.addEventListener('click', function () {canvas.currentBrush = brushCatchup;});
  btnPistol.addEventListener('click', function () {canvas.currentBrush = brushPistol;});
  btnThread.addEventListener('click', function () {canvas.currentBrush = brushThread;});
  canvas.redraw(backCtx);
  elDraw.onmousedown = function(e) {
    console.log('start action');
    canvas.startAction(e);
  };

  elDraw.onmousemove = function(e) {
    canvas.mouseMoveAction(e);
  };

  elDraw.onmouseup = function(e) {
    canvas.finishAction(e);
  };

  window.document.addEventListener()
};

initApplication();