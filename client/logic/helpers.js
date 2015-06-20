Template.hello.helpers({
  counter: function () {
    return Session.get('counter');
  }
});


Template.main.helpers({
  typeOfOverElement: function(){
    return Session.get('type_of_over_element');
  },
  placeholders: function () {
    return PLACEHOLDERS;
  },
  mainView:function(){
    return {
      m: Session.get('mainView')=='main',
      v: Session.get('mainView')=='one',
      allUsers: Session.get('mainView')=='showAll',
      brand: Session.get('mainView')=='brandbook',
      pr: Session.get('mainView')=='two'
    };
  }
});

Template.videoContentHead.helpers({
  placeholders: function () {
    return PLACEHOLDERS;
  }
});
Template.footer.helpers({
  typeOfOverElement: function(){
    return Session.get('type_of_over_element');
  },
  showContent: function(){
    return {
      v:Session.get('type_of_over_element')=='one',
      a:Session.get('type_of_over_element')=='two',
      pl:Session.get('type_of_over_element')=='Empty'
    };
  }
});

Template.header.helpers({
  showContent: function(){
    return {
      v:Session.get('type_of_over_element')=='one',
      a:Session.get('type_of_over_element')=='two',
      pl:Session.get('type_of_over_element')=='Empty'
    };
  }
});

Template.productView.helpers({
  infocallback: function(){
    return {
      all:Session.get('ProductData'),
      arr: function(){
        var array = []
        var str = Session.get('ProductData').split(':');
        var name = str[0]; var count = parseInt(str[1], 10);
        for(var n=1;n<count;n++ ){
          array.push('product/items/'+name+n.toString()+'.png');
        }
        return array;}
      };
  }
});

Template.contentPlaceholders.helpers({
  typeOfOverElement: function(){
    return Session.get('type_of_over_element');
  }
});

Template.fullscreenVideo.helpers({
  video: function(){
    return Session.get('videoName');
  }
});

Template.tooltlip.helpers({
  show: function(){
    return Session.get('tooltlipShow');
  }
});

Template.landing.helpers({
  content: function(){
    return landingContent;
  }
});

Template.contentPlaceholderHead.helpers({
  events: function(){
    return [
      {name: 'duck647',message: 'all good!'},
      {name: 'miss',message: 'yes!'}
    ];
  }
});
