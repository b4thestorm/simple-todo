if (Meteor.isClient) {
  Template.body.helpers({
    tasks: [{text: "This is task 1"}, 
            {text: "This is task 2"}
    ]
    
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
