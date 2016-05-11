/**
 * Created by mac-pc on 12/12/15.
 */
//
var initApplication = function() {
  lcg.setSeed(100);
  window.brushMode = 0;
  var el = document.getElementById('back-canvas');
  var elDraw = document.getElementById('main-canvas');
  var backCtx = el.getContext('2d');
  var frontCtx = elDraw.getContext('2d');

  var canvas = new Canvas(frontCtx, backCtx, window.selectedSurface);

//  history.replaceState( {} , null, this.location.pathname );

  window.mainCanvasObject = canvas;

  var brushScotch = new ScotchBrush();
  var brushCoal = new CoalBrush();
  var brushOrange = new OrangeBrush();
  var brushDenim = new DenimBrush();
  var brushGrass = new GrassBrush();
  var brushThread = new ThreadBrush();
  var brushPistol = new PistolBrush();
  var brushCatchup = new CatchupBrush();

  canvas.currentBrush = brushOrange;
  brushOrange.mode = 1;

  document.getElementById('btn-scotch').addEventListener(window.eventType, function() {
    canvas.cursorSrc = window.relPath + 'cursors/c_scotch.png';
    brushScotch.mode = 3;
    canvas.currentBrush = brushScotch;
    brushScotch.onSelect();
  });

  document.getElementById('btn-scotch-1').addEventListener(window.eventType, function() {
    canvas.cursorSrc = window.relPath + 'cursors/c_scotch-1.png';
    brushScotch.mode = 1;
    canvas.currentBrush = brushScotch;
    brushScotch.onSelect();
  });

  document.getElementById('btn-scotch-2').addEventListener(window.eventType, function() {
    canvas.cursorSrc = window.relPath + 'cursors/c_scotch-2.png';
    brushScotch.mode = 2;
    canvas.currentBrush = brushScotch;
    brushScotch.onSelect();
  });

/*  document.getElementById('btn-scotch-3').addEventListener(window.eventType, function() {
    brushScotch.mode = 3;
    canvas.currentBrush = brushScotch;
    brushScotch.onSelect();
  })*/

  document.getElementById('btn-coal-1').addEventListener(window.eventType, function() {
    canvas.cursorSrc = window.relPath + 'cursors/c_chalk-1.png';
    brushCoal.mode = 1;
    canvas.currentBrush = brushCoal;
    brushCoal.onSelect();
  });

  document.getElementById('btn-coal-2').addEventListener(window.eventType, function() {
    canvas.cursorSrc = window.relPath + 'cursors/c_chalk-2.png';
    brushCoal.mode = 2;
    canvas.currentBrush = brushCoal;
    brushCoal.onSelect();
  });

  document.getElementById('btn-grass').addEventListener(window.eventType, function() {
    canvas.cursorSrc = window.relPath + 'cursors/c_grass.png';
    brushGrass.mode = 1;
    canvas.currentBrush = brushGrass;
    brushGrass.onSelect();

  });

  document.getElementById('btn-orange').addEventListener(window.eventType, function() {
    canvas.cursorSrc = window.relPath + 'cursors/c_orange.png';
    brushOrange.mode = 1;
    canvas.currentBrush = brushOrange;
    brushOrange.onSelect();

  });

  document.getElementById('btn-denim-1').addEventListener(window.eventType, function() {
    canvas.cursorSrc = window.relPath + 'cursors/c_denim-1.png';
    brushDenim.mode = 1;
    canvas.currentBrush = brushDenim;
    brushDenim.onSelect();

  });

  document.getElementById('btn-denim-2').addEventListener(window.eventType, function() {
    canvas.cursorSrc = window.relPath + 'cursors/c_denim-2.png';
    brushDenim.mode = 2;
    canvas.currentBrush = brushDenim;
    brushDenim.onSelect();

  });

  document.getElementById('btn-denim-3').addEventListener(window.eventType, function() {
    canvas.cursorSrc = window.relPath + 'cursors/c_denim-3.png';
    brushDenim.mode = 3;
    canvas.currentBrush = brushDenim;
    brushDenim.onSelect();

  });

  document.getElementById('btn-catchup').addEventListener(window.eventType, function() {
    canvas.cursorSrc = window.relPath + 'cursors/c_ketchup.png';
    brushCatchup.mode = 1;
    canvas.currentBrush = brushCatchup;
    brushCatchup.onSelect();
  });

  document.getElementById('btn-needle').addEventListener(window.eventType, function() {
    canvas.cursorSrc = window.relPath + 'cursors/c_needle.png';
    brushThread.mode = 1;
    canvas.currentBrush = brushThread;
    brushThread.onSelect();

  });

  document.getElementById('btn-thread-1').addEventListener(window.eventType, function() {
    canvas.cursorSrc = window.relPath + 'cursors/c_needle.png';
    brushThread.mode = 1;
    canvas.currentBrush = brushThread;
    brushThread.onSelect();

  });

  document.getElementById('btn-thread-2').addEventListener(window.eventType, function() {
    canvas.cursorSrc = window.relPath + 'cursors/c_needle.png';
    brushThread.mode = 2;
    canvas.currentBrush = brushThread;
    brushThread.onSelect();

  });

  document.getElementById('btn-thread-3').addEventListener(window.eventType, function() {
    canvas.cursorSrc = window.relPath + 'cursors/c_needle.png';
    brushThread.mode = 3;
    canvas.currentBrush = brushThread;
    brushThread.onSelect();

  });

  document.getElementById('btn-thread-4').addEventListener(window.eventType, function() {
    canvas.cursorSrc = window.relPath + 'cursors/c_needle.png';
    brushThread.mode = 4;
    canvas.currentBrush = brushThread;
    brushThread.onSelect();

  });

  document.getElementById('btn-thread-5').addEventListener(window.eventType, function() {
    canvas.cursorSrc = window.relPath + 'cursors/c_needle.png';
    brushThread.mode = 5;
    canvas.currentBrush = brushThread;
    brushThread.onSelect();

  });

  document.getElementById('btn-thread-6').addEventListener(window.eventType, function() {
    canvas.cursorSrc = window.relPath + 'cursors/c_needle.png';
    brushThread.mode = 6;
    canvas.currentBrush = brushThread;
    brushThread.onSelect();

  });

  document.getElementById('btn-thread-7').addEventListener(window.eventType, function() {
    canvas.cursorSrc = window.relPath + 'cursors/c_needle.png';
    brushThread.mode = 7;
    canvas.currentBrush = brushThread;
    brushThread.onSelect();

  });


  document.getElementById('btn-pistol').addEventListener(window.eventType, function() {
    canvas.cursorSrc = window.relPath + 'cursors/c_gun.png';
    brushPistol.mode = 1;
    canvas.currentBrush = brushPistol;
    brushPistol.onSelect();

  });
/*

  btnScotch.addEventListener(window.eventType, function () {canvas.currentBrush = brushScotch;});
  btnCoal.addEventListener(window.eventType, function () {canvas.currentBrush = brushCoal;});
  btnOrange.addEventListener(window.eventType, function () {canvas.currentBrush = brushOrange;});
  btnDenim.addEventListener(window.eventType, function () {canvas.currentBrush = brushDenim;});
  btnGrass.addEventListener(window.eventType, function () {canvas.currentBrush = brushGrass;});
  btnCatchup.addEventListener(window.eventType, function () {canvas.currentBrush = brushCatchup;});
  btnPistol.addEventListener(window.eventType, function () {canvas.currentBrush = brushPistol;});
  btnThread.addEventListener(window.eventType, function () {canvas.currentBrush = brushThread;});*/
  canvas.redraw(backCtx);
  /*elDraw.onmousedown = function(e) {
    console.log('start action');
    e.preventDefault();
    canvas.startAction(e);
  };
  */

  elDraw.ontouchstart = function(e) {
    console.log('start action');
    e.preventDefault();
    canvas.startAction(e);
  };

/*  elDraw.ontouchmove = function(e) {
    console.log('touchmove eldraw');
    canvas.mouseMoveAction(e);
  };*/


  elDraw.onmousedown = function(e) {
    console.log('mousemove');
    canvas.startAction(e);
  };

  document.body.onmousemove = function(e) {
    console.log('mousemove');
    canvas.mouseMoveAction(e);
  };

  document.body.onmouseup = function(e) {
    if (canvas.state.drawState)
    canvas.finishAction(e);
  };


  document.body.addEventListener( 'touchstart', function( e ) {
    canvas.startAction(e);
  }, false );

  document.body.addEventListener( 'touchmove', function( e ) {
    canvas.mouseMoveAction(e);
  }, false );

  document.body.addEventListener( 'touchend', function( e ) {
    if (canvas.state.drawState)
      canvas.finishAction(e);  }, false );

};

var goToTools = document.getElementById('go-to-tools');

goToTools.addEventListener(window.eventType, function () {initApplication();});