console.log("Hello client");

// в этом файле вся свалка jqureвских пережитков и прочей экспериментальной ереси
// если прога не работает - пинать сюда


function someAction(e) {
    Session.set('Mouse_wheel_events', e.deltaY);
    if (Session.get('mainView')=='two') {
      //window.scrollBy(, 0);
      if(e.deltaY>0)
      window.scrollTo(0, $('body').scrollTop()+ $( window ).height());
      else if(e.deltaY<0)
      window.scrollTo(0, $('body').scrollTop()- $( window ).height());
    }
}


window.addEventListener('mousewheel', someAction, false);
window.addEventListener('wheel', someAction, false);

  //Template.main.replaces("footer");


  // Template.header.rendered = function(){
  //     alert('rendered');
  //     if (!this.loading)
  //          this.loading = this.find('.loading');
  //     };
