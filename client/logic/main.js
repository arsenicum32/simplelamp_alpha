console.log('%cХэй, %cпривет, привет %cклиент...\n %cкто ты? %cсколько тебе лет?', COLORS.red,COLORS.yellow,COLORS.purple,COLORS.green,COLORS.teal);

// в этом файле вся свалка jqureвских пережитков и прочей экспериментальной ереси
// если прога не работает - пинать сюда


function someAction(e) {
    Session.set('Mouse_wheel_events', e.deltaY);
    if (Session.get('mainView')=='two') {
      e.preventDefault();
      //window.scrollBy(, 0);
      if(e.deltaY>0)
      window.scrollTo(0, $('body').scrollTop()+ $( window ).height()/10);
      else if(e.deltaY<0)
      window.scrollTo(0, $('body').scrollTop()- $( window ).height());
    }
}

document.addEventListener('keypress',function(){
  if(Session.get('type_of_over_element')=='two'){
    Session.set('showBuy',!Session.get('showBuy'));
  }
});

window.addEventListener('mousewheel', someAction, false);
window.addEventListener('wheel', someAction, false);

  //Template.main.replaces("footer");


  // Template.header.rendered = function(){
  //     alert('rendered');
  //     if (!this.loading)
  //          this.loading = this.find('.loading');
  //     };
