(function() {
  var STEP, SomeMagic, Static, a, addIm, addImAfterTwenty, anim, arrayPsImageAdder, body, canvas, circle, circle2, color, customContainer, data, f1, fullyMatrix, gui, j, lendth, matrixCX, matrixCXover, nowMath, offsetX, offsetY, onKeyDownHandler, results, size, stats, text, update;

  STEP = 0;

  data = {
    draw: false,
    BrushSize: 1.0,
    displayOutline: false,
    color: '#000',
    Static: true
  };

  gui = new dat.GUI({
    autoPlace: false
  });

  customContainer = document.getElementById('my-gui-container');

  onKeyDownHandler = function(e) {
    var activeObject;
    switch (e.keyCode) {
      case 8:
        activeObject = canvas.getActiveObject() || canvas.getActiveGroup();
        canvas.remove(activeObject);
        activeObject.forEachObject(function(a) {
          canvas.remove(a);
          return canvas.renderAll();
        });
        return;
      case 32:
        STEP++;
        $('#alerts span').text(STEP);
        $('#alerts span').toggleClass("highlight");
        SomeMagic(STEP);
        canvas.renderAll();
        break;
      case 27:
        STEP = 0;
        $('#alerts span').text(STEP);
        SomeMagic(STEP);
        canvas.renderAll();
        break;
      case 37:
        if (STEP > 0) {
          STEP--;
        }
        $('#alerts span').text(STEP);
        $('#alerts span').toggleClass("highlight");
        SomeMagic(STEP);
        canvas.renderAll();
        break;
      case 39:
        STEP += 10;
        $('#alerts span').text(STEP);
        $('#alerts span').toggleClass("highlight");
        SomeMagic(STEP);
        canvas.renderAll();
    }
  };

  customContainer.appendChild(gui.domElement);

  Static = gui.add(data, 'Static', true).listen();

  f1 = gui.addFolder('свободное рисование');

  a = f1.add(data, 'draw').listen();

  size = f1.add(data, 'BrushSize', 0, 50).listen();

  color = f1.addColor(data, 'color').listen();

  f1.open();

  f1.close();

  stats = new Stats;

  stats.setMode(0);

  stats.domElement.style.position = 'absolute';

  stats.domElement.style.left = '0px';

  stats.domElement.style.top = '0px';

  document.body.appendChild(stats.domElement);

  update = function() {
    stats.begin();
    stats.end();
    requestAnimationFrame(update);
  };

  requestAnimationFrame(update);

  $('#designer').attr('width', $(window).width());

  $('#designer').attr('height', $(window).height());

  canvas = new fabric.Canvas('designer');

  fabric.Object.prototype.originX = "center";

  fabric.Object.prototype.originY = "center";

  body = new fabric.Rect({
    width: 120,
    height: 120,
    fill: '#f55',
    top: 0,
    left: 0,
    rx: 15,
    ry: 0
  });

  body.top = 0;

  body.left = 400;

  body.set({
    borderColor: 'red',
    cornerColor: 'green',
    cornerSize: 6
  });

  anim = function() {
    body.animate('left', 500, {
      onChange: canvas.renderAll.bind(canvas),
      duration: 1000,
      easing: fabric.util.ease.easeOutElastic
    });
  };


  /*canvas.on('mouse:down', function(options) {
    console.log(options.e.clientX, options.e.clientY);
    if(options.target){
    options.target.animate('angle', 500, {
      onChange: canvas.renderAll.bind(canvas),
      duration: 1000,
      easing: fabric.util.ease.easeOutElastic
        //easeInCubic, easeOutCubic, easeInElastic, easeOutElastic, easeInBounce, easeOutExpo
    });}
  });
   */


  /*body.on("selected", function(e) {
    //console.log("component selected!", e);
  });
   */

  arrayPsImageAdder = [];

  addIm = function(path, step) {
    return fabric.Image.fromURL(path, function(oImg) {
      oImg.scale(0.5);
      oImg.top = 350 + (step - 15) * 20;
      oImg.left = 350 + (step - 15) * 20;
      canvas.add(oImg);
    });
  };

  addImAfterTwenty = function(path, step) {
    return fabric.Image.fromURL(path, function(oImg) {
      if (arrayPsImageAdder[step].s !== null) {
        oImg.scale(arrayPsImageAdder[step].s);
      }
      oImg.top = arrayPsImageAdder[step].y;
      oImg.left = arrayPsImageAdder[step].x;
      canvas.add(oImg);
    });
  };


  /*path = new (fabric.Path)('M 0 0 L 200 100 L 17 200 z')
  path.set
    left: 120
    top: 120
  canvas.add path
   */


  /*(function animate() {
      canvas.item(0).animate('top', canvas.item(0).getTop() === 500 ? '100' : '500', {
        duration: 1000,
        onChange: canvas.renderAll.bind(canvas),
        onComplete: animate
      });
    }).call(this);
   */

  a.onChange(function(value) {
    canvas.isDrawingMode = value;
  });

  size.onChange(function(value) {
    canvas.freeDrawingBrush.width = value;
  });

  color.onChange(function(value) {
    canvas.freeDrawingBrush.color = value;
  });

  Static.onChange(function(value) {
    if (!value) {
      canvas.isDrawingMode = value;
    } else {
      void 0;
    }
    canvas.forEachObject(function(object) {
      object.set({
        selectable: value
      });
    });
  });

  circle = new fabric.Circle({
    left: 100,
    top: 100,
    radius: 100,
    fill: 'darksalmon',
    stroke: 0
  });

  circle2 = new fabric.Circle({
    left: 300,
    top: 300,
    radius: 15,
    fill: 0,
    stroke: 1
  });

  matrixCX = [];

  matrixCXover = [];

  nowMath = (function() {
    results = [];
    for (j = 0; j <= 40; j++){ results.push(j); }
    return results;
  }).apply(this);

  lendth = 6;

  offsetX = canvas.getWidth() / 2;

  offsetY = canvas.getHeight() / 2;

  fullyMatrix = function() {
    var k, len, n, results1;
    results1 = [];
    for (k = 0, len = nowMath.length; k < len; k++) {
      n = nowMath[k];
      matrixCX[n] = new fabric.Circle({
        left: offsetX + 30 * (n + 1) - 30 * lendth * (Math.floor((n + 1) / lendth)),
        top: offsetY - 10 + 30 * (Math.floor((n + 1) / lendth)),
        radius: 10,
        fill: 0,
        stroke: 1
      });
      results1.push(matrixCXover[n] = new fabric.Circle({
        left: offsetX + 30 * (n + 1) - 30 * lendth * (Math.floor((n + 1) / lendth)),
        top: offsetY - 10 + 30 * (Math.floor((n + 1) / lendth)),
        radius: 15,
        fill: 0,
        stroke: 1
      }));
    }
    return results1;
  };


  /*for i in nowMath
    canvas.add matrixCX[i]
    canvas.add matrixCXover[i]
   */


  /*$('body').on('mouseup',function(){
    alert(circle.left);
  });
   */

  text = new fabric.Text("создаём круг", {
    fontSize: 20,
    fontFamily: 'Ubuntu Mono'
  });

  text.left = 200;

  text.top = 200;

  SomeMagic = function(step) {
    var i, k, l, len, m, ref;
    switch (step) {
      case 1:
        canvas.add(circle);
        return canvas.add(text);
      case 2:
        circle.center();
        return text.set({
          text: 'центруем'
        });
      case 3:
        circle.fill = 'peachpuff';
        return text.set({
          text: 'поиграемся с цветами'
        });
      case 4:
        circle.fill = 'sandybrown';
        return text.set({
          text: 'стандартый набор палитры web \n под цвет дерева'
        });
      case 5:
        return circle.fill = 'tomato';
      case 6:
        return circle.fill = 'navajowhite';
      case 7:
        circle.fill = 'bisque';
        return text.set({
          text: 'НАШЛИ!!!'
        });
      case 8:
        circle.radius = 10;
        return text.set({
          text: 'уменьшаем чутка'
        });
      case 9:
        canvas.add(circle2);
        circle2.center();
        return text.set({
          text: 'добавляем второй круг \n с диаметром 1,5D первого'
        });
      case 10:
        circle.fill = 0;
        circle.stroke = 1;
        fullyMatrix();
        return text.set({
          text: 'убираем заливку а-ля мы усердно чертим'
        });
      case 11:
        for (i = k = 0; k <= 4; i = ++k) {
          canvas.add(matrixCX[i]);
          canvas.add(matrixCXover[i]);
        }
        return text.set({
          text: 'копи-пастим... Разумеется криво'
        });
      case 12:
        ref = nowMath.splice(5, nowMath.length);
        for (l = 0, len = ref.length; l < len; l++) {
          i = ref[l];
          canvas.add(matrixCX[i]);
          canvas.add(matrixCXover[i]);
        }
        canvas.add(body);
        return text.set({
          text: 'о-да! ещё больше копи-паста'
        });
      case 13:
        body.top = offsetY + 65;
        body.left = offsetX + 75 - 30 * lendth * (Math.floor(2 / lendth));
        body.sendToBack();
        return text.set({
          text: 'только что добавленный скруглённый квадрат\nрасполагаем по сеточке'
        });
      case 14:
        for (i = m = 0; m <= 40; i = ++m) {
          matrixCX[i].fill = 'white';
          matrixCX[i].stroke = 0;
          body.fill = 'peachpuff';
          canvas.remove(matrixCXover[i]);
        }
        return text.set({
          text: 'О да детка! Логотип готов!'
        });
      case 15:
        addIm('../../logo/0.3251945805677229.png', 15);
        return text.set({
          text: 'делаем его динамическим'
        });
      case 16:
        addIm('../../logo/0.9768481061368526.png', 16);
        return text.set({
          text: 'ещё больше динамическим'
        });
      case 17:
        addIm('../../logo/fire.png', 17);
        return text.set({
          text: 'максимум динамики!'
        });
      case 18:
        addIm('../../logo/0.7011383281868141.png', 18);
        return text.set({
          text: 'стоит заметить, '
        });
      case 19:
        addIm('../../logo/0.2555273903875128.png', 19);
        return text.set({
          text: 'что такой сеткой кругов можно обыграть\n очень много вещей'
        });
      case 20:
        return text.set({
          text: 'люверсы на майке?'
        });
      case 21:
        arrayPsImageAdder[21] = {
          x: 200,
          y: 300,
          s: 0.2
        };
        addImAfterTwenty('../../logo/tshort.jpg', 21);
        return text.set({
          text: 'да пожалуйста!'
        });
      case 22:
        arrayPsImageAdder[22] = {
          x: 200,
          y: 300,
          s: 1
        };
        addImAfterTwenty('../../logo/chair.png', 22);
        return text.set({
          text: '+ какой-нибудь стульчик...'
        });
      case 23:
        text.set({
          text: 'а сейчас, я расскажу вам, \n как организую маркетинговую коммуникацию'
        });
        return canvas.bringToFront(text);
      case 24:
        return text.set({
          text: 'есть маленький никому не известный бренд'
        });
      case 25:
        text.set({
          text: 'его реклама такая же как и он сам...\nмалозначащая и незаметная'
        });
        arrayPsImageAdder[24] = {
          x: 300,
          y: 300,
          s: 0.5
        };
        addImAfterTwenty('../../logo/ll.jpg', 24);
        arrayPsImageAdder[23] = {
          x: 100,
          y: 300,
          s: 0.5
        };
        addImAfterTwenty('../../logo/ll2.jpg', 23);
        arrayPsImageAdder[25] = {
          x: 100,
          y: 500,
          s: 0.5
        };
        return addImAfterTwenty('../../logo/ll2.jpg', 25);
      case 26:
        arrayPsImageAdder[26] = {
          x: 300,
          y: 300,
          s: 2
        };
        addImAfterTwenty('http://placehold.it/300x300', 26);
        text.set({
          text: 'но потом бренд начинает расти\nначинает наглеть'
        });
        return canvas.bringToFront(text);
      case 27:
        return text.set({
          text: 'он выходит из тени, становится\n частью городских сплетен,\n непридуманных историй'
        });
      case 28:
        return text.set({
          text: 'на кухне становится жарко,\nпромо-акции,рефералки,\nпартизанский маркетинг\nафишы, мастер-классы и бла-бла-бла'
        });
      case 29:
        return text.set({
          text: 'а потом этот маленький,\n никому не известный бренд,\nпросто становится неотемлемой частью нашей жизни'
        });
      case 30:
        return text.set({
          text: 'simplelamp',
          fontSize: 100,
          fill: 'hotpink'
        });
      default:
        return STEP = 0;
    }
  };


  /*circle.setGradient 'fill',
    x1: 0
    y1: 0
    x2: 0
    y2: circle.height
    colorStops:
      0: '#000'
      1: '#fff'
   */

  window.onkeydown = onKeyDownHandler;


  /*circle.filters.push(filter); */


  /*circle.applyFilters(canvas.renderAll.bind(canvas)); */

}).call(this);
