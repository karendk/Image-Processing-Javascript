//==============================style input=========================================
$(function() {
    $('#profile-image').on('click', function() {
        $('#profile-image-upload').click();
    });
});

//aaaaaaaaaaaa
var defaultscr;
var img = new Image();

//==============================style input=========================================
window.onload = function() {
    var fileInput = document.getElementById('profile-image-upload');
    fileInput.addEventListener('change', 
      function(e) {
        var file = fileInput.files[0];
        var imageType = /image.*/;
        if (file.type.match(imageType)){
          var reader = new FileReader();
          reader.onload = function(e){
            img.src = reader.result;
            defaultscr=reader.result;
            img.onload = function(){
            draw(this);
            $('#tutup').click();//trigger toggle
            document.getElementById('canvas').style.background='url(media/a.jpg)';
            document.getElementById('canvas').style.backgroundSize='20px 20px';
            document.getElementById('canvas').style.backgroundRepeat='repeat';
            };
        }
      reader.readAsDataURL(file); 
      }
      else{
        fileDisplayArea.innerHTML = "File not supported!";
      }
    });

};

//======================================fungsi default===============================
var def = function() {
  img.src=defaultscr;
  img.onload = function(){
    draw(this);
  };
 };
var defbtn = document.getElementById('defbtn');
defbtn.addEventListener('click', def);
//============================Fungsi untuk save gambar=============================
 function saveImage() {
                var ua = window.navigator.userAgent;
                if (ua.indexOf("Chrome") > 0) {
                    // save image as png
                    var link = document.createElement('a');
                    link.download = "citra.png";
                    link.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
                    link.click();
                }
                else {
                    alert("Please use Chrome");
                }
};

//=======================================Kanvas=====================================
//fungsi untuk mengambil gambar ke kanvas
function draw(img) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var ctxdef=canvas.getContext('2d');
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);
  img.style.display = 'none';
  var imageData = ctx.getImageData(0,0,canvas.width, canvas.height); 
  var datadef = imageData.data; 
  var data = imageData.data;
//===========================================Sourcode Fungsi====================== 

power=0.5;
blur=[  1/9, 1/9, 1/9, 
        1/9, 1/9, 1/9, 
        1/9, 1/9, 1/9];
sharp=[ 0, -1, 0,
        -1, 5, -1,
        0, -1, 0];
emboss=[ -2, 0, 2,
        -2, 1, 2,
        -2, 0, 2];
edge=[  0, 1, 0,
        1, -4, 1,
        0, 1, 0];
gaussian=[1/16, 2/16, 1/16,
        2/16, 4/16, 2/16,
        1/16, 2/16, 1/16];

function filter(kernel, ctx, w, h, nilai) {    
var dstData=0,dstBuff=0,srcBuff=0;    
        pembulatan = Math.round(Math.sqrt(kernel.length)),
        half       = (pembulatan * 0.5) | 0,
        dstData    = ctx.createImageData(w, h),
        dstBuff    = dstData.data,
        srcBuff    = ctx.getImageData(0, 0, w, h).data,
        y = h;
    while (y--) {
        x = w;
        while (x--) {
            var sy = y,
                sx = x,
                dstOff = (y * w + x) * 4,
                r = 0,
                g = 0,
                b = 0,
                a = 0;
            for (var cy = 0; cy < pembulatan; cy++) {
                for (var cx = 0; cx < pembulatan; cx++) {
                    var scy = sy + cy - half;
                    var scx = sx + cx - half;
                    if (scy >= 0 && scy < h && scx >= 0 && scx < w) {
                        var srcOff = (scy * w + scx) * 4;
                        var wt = kernel[cy * pembulatan + cx];
                        r += srcBuff[srcOff] * wt;
                        g += srcBuff[srcOff + 1] * wt;
                        b += srcBuff[srcOff + 2] * wt;
                        a += srcBuff[srcOff + 3] * wt;
                    }
                }
            }
            dstBuff[dstOff]     = r * nilai + srcBuff[dstOff] * (1 - nilai);
            dstBuff[dstOff + 1] = g * nilai + srcBuff[dstOff + 1] * (1 - nilai);
            dstBuff[dstOff + 2] = b * nilai + srcBuff[dstOff + 2] * (1 - nilai)
            dstBuff[dstOff + 3] = srcBuff[dstOff + 3];
        }
    }
    ctx.putImageData(dstData, 0, 0);
};

  function fliph(width, height) {
    var inPix, outPix, x, y;
      for (y=0;y<height;++y) {
        for (x=0;x<width;++x) {
          inPix = (y*width+x) * 4;
          //outPix = (y*width-(width+x+1)) * 4; //horizontal
          outPix = (y*width-(width+x+1)) * 4;
          for(var i=0; i<4;i++){
            var temp=data[outPix+i];
            data[outPix+i]=data[inPix+i];
            data[inPix+i]=temp;
          }
        }
      }
    ctx.putImageData(imageData, 0, 0);
  }

  function flipv(width, height) {
    var inPix, outPix, x, y;
      for (y=0;y<height;++y) {
        for (x=0;x<Math.ceil(width/2);++x) {
          //inPix = (y*width+x) * 4;
          //outPix = ((height-y-1) * width + x) * 4;//vertical
          inPix=y*4*width+(x*4);
          outPix=(width*(height-y)-x-1)*4;
          for(var i=0; i<4;i++){
            var temp=data[outPix+i];
            data[outPix+i]=data[inPix+i];
            data[inPix+i]=temp;
          }
        }
      }
    ctx.putImageData(imageData, 0, 0);
  }

  function mirrorh(width, height) {
    var inPix, outPix, x, y;
      for (y=0;y<height;++y) {
        for (x=0;x<width;++x) {
          inPix = (y*width+x) * 4;
          //outPix = (y*width-(width+x+1)) * 4; //horizontal
          outPix = (y*width+(width-x-1)) * 4;
          for(var i=0; i<4;i++){
            data[outPix+i]=data[inPix+i];
          }
        }
      }
    ctx.putImageData(imageData, 0, 0);
  }

  function mirrorv(width, height) {
    var inPix, outPix, x, y;
      for (y=0;y<height;++y) {
        for (x=0;x<width;++x) {
          inPix = (y*width+x) * 4;
          outPix = ((height-y-1) * width + x) * 4;//vertical
          for(var i=0; i<4;i++){
            var temp=data[outPix+i];
            data[outPix+i]=data[inPix+i];
            //data[inPix+i]=temp;
          }
        }
      }
    ctx.putImageData(imageData, 0, 0);
  }

  var invert = function() {
    for (var i = 0; i < data.length; i += 4) {
      data[i]     = 255 - data[i];     // red
      data[i + 1] = 255 - data[i + 1]; // green
      data[i + 2] = 255 - data[i + 2]; // blue
    }
    ctx.putImageData(imageData, 0, 0);
  };

  var grayscale = function() {
    for (var i = 0; i < data.length; i += 4) {
      var avg = (data[i] + data[i +1] + data[i +2]) / 3;
      data[i]     = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }
    ctx.putImageData(imageData, 0, 0);
  };

  var biner = function() {
    for (var i = 0; i < data.length; i += 4) {
      var avg = (data[i] + data[i +1] + data[i +2]) / 3;
      if (avg>=128) {data[i]=255} else{data[i]=0};
      if (avg>=128) {data[i+1]=255} else{data[i+1]=0};
      if (avg>=128) {data[i+2]=255} else{data[i+2]=0};
    }
    ctx.putImageData(imageData, 0, 0);
  };

    var bit8 = function() {
    for (var i = 0; i < data.length; i += 4) {
      if (data[i]>128) {data[i]=255} else{data[i]=0};
      if (data[i+1]>128) {data[i+1]=255} else{data[i+1]=0};
      if (data[i+2]>128) {data[i+2]=255} else{data[i+2]=0};
    }
    ctx.putImageData(imageData, 0, 0);
  };

      var brightp = function() {
    for (var i = 0; i < data.length; i += 4) {
        for(var r=0; r<3; r++){
            data[i+r]=data[i+r]+10;        
        }
    }
    ctx.putImageData(imageData, 0, 0);
  };

        var brightm = function() {
    for (var i = 0; i < data.length; i += 4) {
     data[i]=data[i]-10;
     data[i+1]=data[i+1]-10;
     data[i+2]=data[i+2]-10;
    }
    ctx.putImageData(imageData, 0, 0);
  };
        var opacity = function() {
    for (var i = 0; i < data.length; i += 4) {
        data[i+3]=data[i+3]-10;
    }
    ctx.putImageData(imageData, 0, 0);
  };

//=======================================Tombol memanggil fungsi


  var invertbtn = document.getElementById('invertbtn');
  invertbtn.addEventListener('click', invert);

  var grayscalebtn = document.getElementById('grayscalebtn');
  grayscalebtn.addEventListener('click', grayscale);

  var binerbtn = document.getElementById('binerbtn');
  binerbtn.addEventListener('click', biner);

  $('#bit8btn').on('click', bit8);//query

  $('#opacitybtn').on('click', opacity);//query

  var brightpbtn = document.getElementById('brightpbtn');
  brightpbtn.addEventListener('click', brightp);

  var brightmbtn = document.getElementById('brightmbtn');
  brightmbtn.addEventListener('click', brightm);

  $('#flipvbtn').on('click', function() {
      flipv(canvas.width,canvas.height);
    });

  $('#fliphbtn').on('click', function() {
      fliph(canvas.width,canvas.height);
    });

  $('#mirrorhbtn').on('click', function() {
      mirrorh(canvas.width,canvas.height);
    });

  $('#mirrorvbtn').on('click', function() {
      mirrorv(canvas.width,canvas.height);
    });

  $('#blurbtn').on('click', function() {
    filter(blur,ctx,canvas.width,canvas.height,power);
  });

  $('#sharpbtn').on('click', function() {
    filter(sharp,ctx,canvas.width,canvas.height,power);
  });

  $('#embossbtn').on('click', function() {
    filter(emboss,ctx,canvas.width,canvas.height,power);
  });

  $('#edgebtn').on('click', function() {
    filter(edge,ctx,canvas.width,canvas.height,power);
  });

  $('#gaussianbtn').on('click', function() {
    filter(gaussian,ctx,canvas.width,canvas.height,power);
  });

};