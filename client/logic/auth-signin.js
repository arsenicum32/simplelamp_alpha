Template.loggout.events({
  'click': function(e, tmpl){
    Meteor.loginWithGithub({
      requestPermission: ['user','public_repo']
    },
    function(err){
      if(err){

      }else{

      }
    });

  }
});

Template.loggin.events({
  'click': function(e, tmpl){
    Meteor.logout(function(err){
      if(err){

      }else {

      }
    });
  }
});
