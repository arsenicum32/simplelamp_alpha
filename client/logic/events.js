Template.main.events({
  'mouseover': function(event){
    var paragraph = event.currentTarget; // obj obj
    var clickedElement = event.target;
    var target = $( clickedElement );
    var elementType = clickedElement.nodeName; // p a img
    Session.set('type_of_over_element', target.attr('supername'));
  }
});

Template.hello.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 10);
  },
  'mouseleave input': function(){
    Session.set('menu_view', $('input').is(":checked") );
    //alert(Session.get('menu_view'));
  }
});

Template.header.events({
});
Template.address.events({
  'mouseenter': function(){
    $('.forvis').css('visibility','visible');
  },
  'mouseleave':function(){
    $('.forvis').css('visibility','hidden');
  },
  'mouseenter a': function(){
    $('#iconMaza').attr('src','social/stagramBigRily.png');
  },
  'mouseleave a': function(){
    $('#iconMaza').attr('src','social/stagramBig.png');
  }
});
Template.contentProduct.events({
  'click': function(){
    alert('keypress');
  }
});
Template.contentVideo.events({
});

Template.placeholder.events({
  'click': function(){
    interval[0] = setInterval(function(){
    $('.insr').each(function(){
      $(this).attr('src','footer/b'+rI(1,5)+'.png');
    });
    var DATA = new Date();
    if(DATA - interval[1] > rI(100,8000)){
      interval[1] = new Date();
      clearInterval(interval[0]);
      }
    },rI(5,150));
  },
  'mouseenter': function(){
    Session.set('tooltlipShow',true);
  },
  'mouseleave': function(){
    Session.set('tooltlipShow',false);
  }
});

Template.contentPlaceholders.events({
  'mouseover': function(event){
    var paragraph = event.currentTarget; // obj obj
    var clickedElement = event.target;
    var target = $( clickedElement );
    var elementType = clickedElement.nodeName;
  //  alert(target.attr('supername')); // p a img
    Session.set('type_of_over_element', target.attr('supername'));
    Session.set('videoName',target.attr('videoname'));
  },
  'click': function(event){
    var clickedElement = event.target;
    var target = $( clickedElement );
    Session.set('mainView', target.attr('supername'));
    Session.set('ProductData', target.attr('PD') );
  }
});

Template.mainclbth.events({
  'click a': function(){
    Session.set('mainView','main');
  },
  'keypress a':function(){
    Session.set('mainView','main');
  }
});
Template.tizer.events({
  'mouseover span': function(event){
    var clickedElement = event.target;
    var target = $( clickedElement );
    //alert(target.attr('supername'));
    Session.set('mainView', target.attr('supername'));
  }
});

Template.logo.events({
  'mouseover': function(){
    Session.set('mainView', 'brandbook');
  }
});

Template.fullscreenVideo.events({
  'click': function(){
    Session.set('videoPlay',!Session.get('videoPlay'));

    var vid = document.getElementById("backgroundVideo");
    //if (vid.ended){ vid.play() }
    if (Session.get('videoPlay') ) {
         vid.play();
         vid.style.opacity = 1;
         $('#messageVideo').css('visibility','hidden');
       } else {
         vid.pause();
         vid.style.opacity = 0.1;
         $('#messageVideo').css('visibility','visible');
         $('#messageVideo').on('mousemove', function(e){
           vid.volume = e.pageY/$( window ).height();
           vid.currentTime = vid.duration * e.pageX/$( window ).width();
         });
    }
  }
});

Template.tooltlip.events({
  'click': function(){
    Session.set('tooltlip', false);
  }
});

// Template.fullscreenVideo.events({
//   'click': function(event){
//     // var paragraph = event.currentTarget; // obj obj
//      var clickedElement = event.target;
//      var target = $( clickedElement );
//     // var elementType = clickedElement.nodeName;
//     target.play();
//     //   if (target.paused) {
//     //       target.play();
//     //    } else {
//     //       target.pause();
//     //    }
//     // }
//   }
// });
