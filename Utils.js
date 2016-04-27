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

function getLastImage(iid, cb) {
  data = {
    api_method: 'getimagefromgallery',
    image_id: iid
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



function applyOverFilter(saveImgCB, src, canvId, imgData, dx, dy, remove) {
  cb = function () {
    var myCanvas = document.getElementById(canvId);
    var ctx = myCanvas.getContext('2d');

    //if (remove) 	ctx.globalCompositeOperation = 'destination-out';


    var img = new Image();
    img.src = src;

    if (!dx) dx = 0;
    if (!dy) dy = 0;
    img.onload = function () {
      ctx.drawImage(img, dx, dy);

      //if (remove) ctx.globalCompositeOperation = null;
      saveImgCB(myCanvas);
      //  ctx.canvas.width = ctx.canvas.width;
    }

  }
  return cb;
}

function getInv (saveImgCB, canvId, imgData) {
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
    saveImgCB(myCanvas);

  }
}

function kaleidoscope(saveImgCB, canvId, imgData) {


  return function(img) {
    var myCanvas = document.getElementById(canvId);
    var ctx = myCanvas.getContext('2d');
    var data = ctx.getImageData(0,0,myCanvas.width, myCanvas.height)

    JSManipulate.kaleidoscope.filter(data);
    ctx.putImageData(data,0,0);
    saveImgCB(myCanvas);

  }


}

function distortion(saveImgCB, canvId, imgData) {


  return function(img) {
    var myCanvas = document.getElementById(canvId);
    var ctx = myCanvas.getContext('2d');
    var data = ctx.getImageData(0,0,myCanvas.width, myCanvas.height)

    JSManipulate.sineripple.filter(data,{xAmplitude:6,yAmplitude:6,xWavelength:44,yWavelength:44});
    ctx.putImageData(data,0,0);
    saveImgCB(myCanvas);

  }


}


function getPattern(saveImgCB, canvId, imgData) {

  var n = 3;
  var m = 3;
  return function(img) {

    var myCanvas = document.getElementById(canvId);
    var ctx = myCanvas.getContext('2d');

    var
      w = myCanvas.width / n,
      h = myCanvas.height / m;
    for (var i = 0; i < n; ++i) {
      for (var j = 0; j < m; ++j) {
        ctx.drawImage(img, i*w, j*h, w, h );
      }
    }
    saveImgCB(myCanvas);

// enlarge the minimized image to full size
  }
}

function getPixelate(saveImgCB, canvId, imgData) {

  return function(img) {

    var myCanvas = document.getElementById(canvId);
    var ctx = myCanvas.getContext('2d');

    var size = 3.96 /100,
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

    saveImgCB(myCanvas);

  }
}

filterOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function fbpost(t, im, imPath) {
  FB.ui(
    {  method: 'feed',
      picture: 'http://188.227.16.35/wp-content/themes/mmoma/api/' + imPath,
      name: '',//"���� ������ � ����: ��-�-�-������ �����������",
      caption: "asdasd",
      description: '' //"����� � ����, ��������� ���������� �������� � ������ ���� �������� ������ ����� �� ���������� ����������� ������ � ����: ��-�-�-������ �����������",

    },

    function(response) {
      if (response && response.post_id) {
        alert('Post was published.');
      } else {
        alert('Post was not published.');
      }
    }
  );
}

function vkpost(t, im, imPath) {
  var img;
 // ga('send', 'event', 'Social', 'click-postvk');


  function authInfo(response) {
    if (response.session) {


      VK.api('photos.getWallUploadServer', {uid:  response.session.user.id},
        function (data) {
        if (data.response) {
          var uploadUrl = data.response.upload_url;
          console.log(imPath);

          $.ajax({
            type: "post",
            url: "http://188.227.16.35/wp-content/themes/mmoma/api/index.php",
            data: {
              api_method: 'uploadpic',

              upload_url: uploadUrl,
              file: imPath},
            success: function callback(res) {
              if (res.photo) {
                var p = JSON.parse(res.photo);

                VK.api("photos.saveWallPhoto", res, onSaveWallPhoto);

                function onSaveWallPhoto(data) {
                  console.log(data);
                  VK.api("wall.post", {"attachments": data.response[0].id}, function cb(res) {

                    console;
                  });   }

              }
              console.log(res);
            }
          });


        }
      });


    /*  VK.api('wall.post', {
        message: t,
      //  attachments: [img, "https://vk.com/app5374624"]

      },function(data) {
        console.log(JSON.stringify(data));

        if (data.response) {
        }
      });*/

    } else {
    }
  }
  VK.Auth.login(authInfo, 8192 + 4);

}

function applyFilter(canvId, imgData, filterNumber) {
  var cb;
  ZSound.Play('filter');
  var saveImgCB = function (canvas) {
    window.savedImage = canvas.toDataURL("image/png", 0.8);
  }
  if (filterNumber == 1) {
   var src = relPath + 'filters/diptih.png';
   cb = applyOverFilter(saveImgCB, src, canvId, imgData, 0, 0, true);
   }
  if (filterNumber == 2) {
    var src = relPath + 'filters/modern.png';
    cb = applyOverFilter(saveImgCB, src, canvId, imgData);
  }
  if (filterNumber == 3) {
    var src = relPath + 'filters/poliptih.png';
    cb = applyOverFilter(saveImgCB, src, canvId, imgData, 0, 0, true);
  }
  if (filterNumber == 4) {
    var src = relPath + 'filters/vintage.png';
    cb = applyOverFilter(saveImgCB, src, canvId, imgData);
  }
  if (filterNumber == 5) {
    cb = getPixelate(saveImgCB, canvId, imgData);
  }
  if (filterNumber == 6) {
    cb = getInv(saveImgCB, canvId, imgData);
  }

  if (filterNumber == 7) {
    cb = distortion(saveImgCB, canvId, imgData);
  }

  if (filterNumber == 8) {
    cb = kaleidoscope(saveImgCB, canvId, imgData);
  }

  if (filterNumber == 9) {
    cb = getPattern(saveImgCB, canvId, imgData);
  }

  if (filterNumber == 10) {
    var src = relPath + 'filters/bubble1.png';
    cb = applyOverFilter(saveImgCB, src, canvId, imgData, Math.random()*200, Math.random()*200);
  }
  if (filterNumber == 11) {
    var src = relPath + 'filters/bubble2.png';
    cb = applyOverFilter(saveImgCB, src, canvId, imgData, Math.random()*200, Math.random()*200);
  }
  if (filterNumber == 12) {
    var src = relPath + 'filters/bubble3.png';
    cb = applyOverFilter(saveImgCB, src, canvId, imgData, Math.random()*200, Math.random()*200);
  }
  var dw = 1;
  var dh = 1;
  if (filterNumber == 2 || filterNumber == 4) {
    dw = 0.95;
    dh = 0.95;
  }
    drawImageToCanvas(canvId, imgData, cb, dw, dh);
}



function drawImageToCanvas (canvId, imgData, cb, dw, dh) {
  var myCanvas = document.getElementById(canvId);
  var ctx = myCanvas.getContext('2d');

  if (!dw) dw = 1;
  if (!dh) dh = 1;
  var img = new Image();
  img.src = imgData;
  img.onload = function(){
    ctx.drawImage(img, (1 - dw)*img.width, (1 - dh)*img.height, img.width*dw, img.height*dh);
    if (cb) cb(img);
  //  ctx.canvas.width = ctx.canvas.width;
  }
//  ctx.drawImage(img, 0 ,0 );

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
