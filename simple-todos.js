Tasks = new Mongo.Collection("tasks");
 
if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
    "submit .new-task": function (event){
      event.preventDefault(); // Disable normal form submit

      var text = event.target.text.value; // get and Store form value

      Tasks.insert({ text: text, createdAt: new Date()}); //Create a new record for Mongo DB collection

      event.target.text.value = "";
    }
  });
  Template.task.events({
    "click .toggle-checked": function() {
      Tasks.update(this._id, {
        $set: {checked: ! this.checked}
      });
    },
    "click .delete": function (){
      Tasks.remove(this._id);
    }

  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
