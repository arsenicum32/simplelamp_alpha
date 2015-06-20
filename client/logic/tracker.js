Tracker.autorun(function () {
  //TRACING VARS
  var count = Session.get('menu_view');
  var wheelEvent = Session.get('Mouse_wheel_events');
  //var typeOfOverElement = Session.get('type_of_over_element');
  var showMain = Session.get('mainView')=='main';
  var showVideo = Session.get('mainView')=='one';

  if(showMain){
    $('header').css('visibility','visible');
    $('footer').css('visibility','visible');
  }else{
    $('header').css('visibility','hidden');
    $('footer').css('visibility','hidden');
  };
  if(showVideo){
    $('main').css('background','black');
  }else{
    $('main').css('background','white');
  };

  //LOGIC OF VARS
  if(count){
    $('body').css('background','black');
  } else {
    $('body').css('background','white');
  }

  var speed = 'fast';

  if(Session.get('tooltlipShow')){
    $('.tooltlip').css('visibility','visible');
  }else{
    $('.tooltlip').css('visibility','hidden');
  }

  if (wheelEvent > 0) {
    $('header').slideUp(speed, function() {});
    $('footer').slideDown(speed, function() {});
  } else if (wheelEvent < 0) {
    $('header').slideDown(speed, function() {});
    $('footer').slideUp(speed, function() {});
    Session.set('random_help_placeh',rI(12,400));
  //Session.set('PLACEHOLDERS', Session.get('PLACEHOLDERS').push({image: 'randomgen/10.png', size: 300, super: 'two' }) );
  }
});
