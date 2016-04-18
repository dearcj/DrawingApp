/**
 * Created by mac-pc on 12/14/15.
 */
function extend(Child, Parent) {
  var F = function() { };
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
  Child.superclass = Parent.prototype;
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}




function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getLastImage(uid, cb) {
  data = {
    api_method: 'getimagefromgallery',
    user_id: uid
  };

  $.ajax({
    type: "GET",
    url: "http://188.227.16.35/wp-content/themes/mmoma/api/index.php",
    data: data,
    success: function callback(res) {
      cb(res);
      console.log(res);
    }
  });


}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function applyOverFilter(src, canvId, imgData) {
  cb = function () {
    var myCanvas = document.getElementById(canvId);
    var ctx = myCanvas.getContext('2d');

    var img = new Image();
    img.src = src;
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      if (cb) cb();
      //  ctx.canvas.width = ctx.canvas.width;
    }
    ctx.drawImage(img, 0, 0);
  }
  return cb;
}

function getInv (canvId, imgData) {
  return function (img) {
    var myCanvas = document.getElementById(canvId);
    var ctx = myCanvas.getContext('2d');
  var imageData = ctx.getImageData(0,0, img.width, img.height);
  var data = imageData.data;

  for(var i = 0; i < data.length; i += 4) {
    // red
    data[i] = 255 - data[i];
    // green
    data[i + 1] = 255 - data[i + 1];
    // blue
    data[i + 2] = 255 - data[i + 2];
  }

  // overwrite original image
    ctx.putImageData(imageData, 0,0);
  }
}

function getPixelate(canvId, imgData) {

  return function(img) {

    var myCanvas = document.getElementById(canvId);
    var ctx = myCanvas.getContext('2d');

    var size = 4 /100,
      w = myCanvas.width * size,
      h = myCanvas.height * size;
    ctx.drawImage(img, 0, 0, w, h);
// turn off image aliasing
    ctx.msImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

// enlarge the minimized image to full size
    ctx.drawImage(myCanvas, 0, 0, w, h, 0, 0, myCanvas.width, myCanvas.height);

    ctx.msImageSmoothingEnabled = true;
    ctx.mozImageSmoothingEnabled = true;
    ctx.webkitImageSmoothingEnabled = true;
    ctx.imageSmoothingEnabled = true;
  }
}

function applyFilter(canvId, imgData, filterNumber) {
  var cb;

  cb = getPixelate(canvId, imgData);
 // cb = getInv(canvId, imgData);
  /*
  if (filterNumber == 1) {
   var src = relPath + 'filters/diptih.png';
   cb = applyOverFilter(src, canvId, imgData);
   }
  if (filterNumber == 2) {
    var src = relPath + 'filters/modern.png';
    cb = applyOverFilter(src, canvId, imgData);
  }
  if (filterNumber == 3) {
    var src = relPath + 'filters/poliptih.png';
    cb = applyOverFilter(src, canvId, imgData);
  }
  if (filterNumber == 4) {
    var src = relPath + 'filters/vintage.png';
    cb = applyOverFilter(src, canvId, imgData);
  }
  if (filterNumber == 5) {
    cb = getPixelate(canvId, imgData);
  }
  if (filterNumber == 6) {
    cb = getInv(canvId, imgData);
  }
*/

  drawImageToCanvas(canvId, imgData, cb);
}



function drawImageToCanvas (canvId, imgData, cb) {
  var myCanvas = document.getElementById(canvId);
  var ctx = myCanvas.getContext('2d');

  var img = new Image();
  img.src = imgData;
  img.onload = function(){
    ctx.drawImage(img, 0, 0);
    if (cb) cb(img);
  //  ctx.canvas.width = ctx.canvas.width;
  }
  ctx.drawImage(img, 0 ,0 );

}

var lcg = (function() {
  // Set to values from http://en.wikipedia.org/wiki/Numerical_Recipes
  // m is basically chosen to be large (as it is the max period)
  // and for its relationships to a and c
  var m = 4294967296,
  // a - 1 should be divisible by m's prime factors
    a = 1664525,
  // c and m should be co-prime
    c = 1013904223,
    seed, z;
  return {
    setSeed : function(val) {
      z = seed = val || Math.round(Math.random() * m);
    },
    getSeed : function() {
      return seed;
    },
    rand : function() {
      // define the recurrence relationship
      z = (a * z + c) % m;
      // return a float in [0, 1)
      // if z = m then z / m = 0 therefore (z % m) / m < 1 always
      return z / m;
    }
  };
}());


function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function intToRgb(bigint) {
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return {r: r, g: g, b: b};
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
