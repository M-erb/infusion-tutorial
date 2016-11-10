tutorialApp.factory('directories',['$localStorage', function($localStorage){
  var directoryCheck = function() {
    //house keeping for local storage
    if ($localStorage.directory == null) {
      $localStorage.directory = {}
    }
    if ($localStorage.phase1 == null) {
      $localStorage.phase1 = {}
    }
    if ($localStorage.phase2 == null) {
      $localStorage.phase2 = {}
    }
    if ($localStorage.phase3 == null) {
      $localStorage.phase3 = {}
    }
    if ($localStorage.phase4 == null) {
      $localStorage.phase4 = {}
    }
    if ($localStorage.phase5 == null) {
      $localStorage.phase5 = {}
    }
    if ($localStorage.phase6 == null) {
      $localStorage.phase6 = {}
    }
    if ($localStorage.phase7 == null) {
      $localStorage.phase7 = {}
    }
  }
  directoryCheck()

  var o = {
    directory: [{
      id: "phase1",
      title: "getting started",
      icon: "gettingstarted.png",
      check: true,
      doneBtn: function(){$localStorage.directory.phase1='done'},
      phase: [{
          id: "item1",
          title: "Familiarizing the Layout",
          check: $localStorage.phase1.layout=='done'
        }, {
          id: "item2",
          title: "Importing Contacts",
          check: $localStorage.phase1.import=='done'
        }]
    }, {
      id: "phase2",
      title: "users",
      icon: "crm-icon.png",
      check: $localStorage.directory.phase1=='done',
      doneBtn: function(){$localStorage.directory.phase2='done'},
      phase: [{
          id: "item1",
          title: "permissions",
          check: $localStorage.phase1.layout=='done'
        }, {
          id: "item2",
          title: "adding new users",
          check: $localStorage.phase1.import=='done'
        }, {
          id: "item2",
          title: "setting up users",
          check: $localStorage.phase1.import=='done'
        }]
    }, {
      id: "phase3",
      title: "CRM - Contacts & Companies",
      icon: "contact.svg",
      check: $localStorage.directory.phase2=='done',
      doneBtn: function(){$localStorage.directory.phase3='done'},
      phase: [{
          id: "item1",
          title: "Adding",
          check: $localStorage.phase1.layout=='done'
        }, {
          id: "item2",
          title: "Searching",
          check: $localStorage.phase1.import=='done'
        }, {
          id: "item3",
          title: "tabs",
          check: $localStorage.phase1.import=='done'
        }, {
          id: "item4",
          title: "general fields",
          check: $localStorage.phase1.import=='done'
        }, {
          id: "item5",
          title: "custom fields",
          check: $localStorage.phase1.import=='done'
        }]
    }, {
      id: "phase4",
      title: "Branding",
      icon: "happy.svg",
      check: $localStorage.directory.phase3=='done',
      doneBtn: function(){$localStorage.directory.phase4='done'},
      phase: [{
          id: "item1",
          title: "branding center",
          check: $localStorage.phase1.layout=='done'
        }, {
          id: "item2",
          title: "templates",
          check: $localStorage.phase1.import=='done'
        }]
    }, {
      id: "phase5",
      title: "Sales Pipeline",
      icon: "credit-card.svg",
      check: $localStorage.directory.phase4=='done',
      doneBtn: function(){$localStorage.directory.phase5='done'},
      phase: [{
          id: "item1",
          title: "Familiarizing the Layout",
          view: "get-started",
          check: $localStorage.phase1.layout=='done'
        }, {
          id: "item2",
          title: "Importing Contacts",
          view: "users",
          check: $localStorage.phase1.import=='done'
        }]
    }, {
      id: "phase6",
      title: "Marketing",
      icon: "email.svg",
      check: function(){$localStorage.directory.phase5=='done'},
      phase: [{
          id: "item1",
          title: "Familiarizing the Layout",
          view: "get-started",
          check: $localStorage.phase1.layout=='done'
        }, {
          id: "item2",
          title: "Importing Contacts",
          view: "users",
          check: $localStorage.phase1.import=='done'
        }]
    }]
  }

  return o;
}]);
