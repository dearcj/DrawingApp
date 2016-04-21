/**
 * Created by mac-pc on 12/12/15.
 */

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

  document.getElementById('btn-scotch').addEventListener('click', function() {
    document.getElementById('btn-scotch').css({'-webkit-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', '-moz-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', 'box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)'});
    brushScotch.mode = 3;
    canvas.currentBrush = brushScotch;
    brushScotch.onSelect();
  });

  document.getElementById('btn-scotch-1').addEventListener('click', function() {
    this.css({'-webkit-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', '-moz-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', 'box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)'});
    brushScotch.mode = 1;
    canvas.currentBrush = brushScotch;
    brushScotch.onSelect();
  })

  document.getElementById('btn-scotch-2').addEventListener('click', function() {
    this.css({'-webkit-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', '-moz-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', 'box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)'});
    brushScotch.mode = 2;
    canvas.currentBrush = brushScotch;
    brushScotch.onSelect();
  })

/*  document.getElementById('btn-scotch-3').addEventListener('click', function() {
    brushScotch.mode = 3;
    canvas.currentBrush = brushScotch;
    brushScotch.onSelect();
  })*/

  document.getElementById('btn-coal-1').addEventListener('click', function() {
    this.css({'-webkit-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', '-moz-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', 'box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)'});
    brushCoal.mode = 1;
    canvas.currentBrush = brushCoal;
    brushCoal.onSelect();
  })

  document.getElementById('btn-coal-2').addEventListener('click', function() {
    this.css({'-webkit-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', '-moz-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', 'box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)'});
    brushCoal.mode = 2;
    canvas.currentBrush = brushCoal;
    brushCoal.onSelect();
  })

  document.getElementById('btn-grass').addEventListener('click', function() {
    this.css({'-webkit-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', '-moz-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', 'box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)'});
    brushGrass.mode = 1;
    canvas.currentBrush = brushGrass;
    brushGrass.onSelect();

  })

  document.getElementById('btn-orange').addEventListener('click', function() {
    this.css({'-webkit-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', '-moz-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', 'box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)'});
    brushOrange.mode = 1;
    canvas.currentBrush = brushOrange;
    brushOrange.onSelect();

  });

  document.getElementById('btn-denim-1').addEventListener('click', function() {
    this.css({'-webkit-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', '-moz-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', 'box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)'});
    brushDenim.mode = 1;
    canvas.currentBrush = brushDenim;
    brushDenim.onSelect();

  });

  document.getElementById('btn-denim-2').addEventListener('click', function() {
    this.css({'-webkit-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', '-moz-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', 'box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)'});
    brushDenim.mode = 2;
    canvas.currentBrush = brushDenim;
    brushDenim.onSelect();

  });

  document.getElementById('btn-denim-3').addEventListener('click', function() {
    this.css({'-webkit-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', '-moz-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', 'box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)'});
    brushDenim.mode = 3;
    canvas.currentBrush = brushDenim;
    brushDenim.onSelect();

  });

  document.getElementById('btn-catchup').addEventListener('click', function() {
    this.css({'-webkit-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', '-moz-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', 'box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)'});
    brushCatchup.mode = 1;
    canvas.currentBrush = brushCatchup;
    brushCatchup.onSelect();

  });

  document.getElementById('btn-needle').addEventListener('click', function() {
    this.css({'-webkit-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', '-moz-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', 'box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)'});
    brushThread.mode = 1;
    canvas.currentBrush = brushThread;
    brushThread.onSelect();

  });

  document.getElementById('btn-thread-1').addEventListener('click', function() {
    this.css({'-webkit-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', '-moz-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', 'box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)'});
    brushThread.mode = 1;
    canvas.currentBrush = brushThread;
    brushThread.onSelect();

  });

  document.getElementById('btn-thread-2').addEventListener('click', function() {
    this.css({'-webkit-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', '-moz-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', 'box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)'});
    brushThread.mode = 2;
    canvas.currentBrush = brushThread;
    brushThread.onSelect();

  });

  document.getElementById('btn-thread-3').addEventListener('click', function() {
    this.css({'-webkit-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', '-moz-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', 'box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)'});
    brushThread.mode = 3;
    canvas.currentBrush = brushThread;
    brushThread.onSelect();

  });

  document.getElementById('btn-thread-4').addEventListener('click', function() {
    this.css({'-webkit-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', '-moz-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', 'box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)'});
    brushThread.mode = 4;
    canvas.currentBrush = brushThread;
    brushThread.onSelect();

  });

  document.getElementById('btn-thread-5').addEventListener('click', function() {
    this.css({'-webkit-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', '-moz-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', 'box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)'});
    brushThread.mode = 5;
    canvas.currentBrush = brushThread;
    brushThread.onSelect();

  });

  document.getElementById('btn-thread-6').addEventListener('click', function() {
    this.css({'-webkit-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', '-moz-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', 'box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)'});
    brushThread.mode = 6;
    canvas.currentBrush = brushThread;
    brushThread.onSelect();

  });

  document.getElementById('btn-thread-7').addEventListener('click', function() {
    this.css({'-webkit-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', '-moz-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', 'box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)'});
    brushThread.mode = 7;
    canvas.currentBrush = brushThread;
    brushThread.onSelect();

  });


  document.getElementById('btn-pistol').addEventListener('click', function() {
    this.css({'-webkit-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', '-moz-box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)', 'box-shadow': '0 0 25px 5px rgba(255,221,0,0.9)'});
    brushPistol.mode = 1;
    canvas.currentBrush = brushPistol;
    brushPistol.onSelect();

  });
/*

  btnScotch.addEventListener('click', function () {canvas.currentBrush = brushScotch;});
  btnCoal.addEventListener('click', function () {canvas.currentBrush = brushCoal;});
  btnOrange.addEventListener('click', function () {canvas.currentBrush = brushOrange;});
  btnDenim.addEventListener('click', function () {canvas.currentBrush = brushDenim;});
  btnGrass.addEventListener('click', function () {canvas.currentBrush = brushGrass;});
  btnCatchup.addEventListener('click', function () {canvas.currentBrush = brushCatchup;});
  btnPistol.addEventListener('click', function () {canvas.currentBrush = brushPistol;});
  btnThread.addEventListener('click', function () {canvas.currentBrush = brushThread;});*/
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
};

var goToTools = document.getElementById('go-to-tools');

goToTools.addEventListener('click', function () {initApplication();});