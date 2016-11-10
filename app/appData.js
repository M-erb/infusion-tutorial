tutorialApp.factory('directory',['$localStorage', function($localStorage){
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
      class: "phase1",
      title: "getting started",
      icon: "gettingstarted.png",
      check: true,
      doneBtn: function(){$localStorage.directory.phase1='done'},
      tutList: [{
          id: "0",
          title: "Familiarizing the Layout",
          check: $localStorage.phase1.layout=='done',
          tutorialPages: [{
            title: "Main Navigation",
            body: "bla bla bla"
          }, {
            title: "Home"
          }, {
            title: "Recent"
          }]
        }, {
          id: "0",
          title: "Importing Contacts",
          check: $localStorage.phase1.import=='done'
        }]
    }, {
      class: "phase2",
      title: "users",
      icon: "crm-icon.png",
      check: $localStorage.directory.phase1=='done',
      doneBtn: function(){$localStorage.directory.phase2='done'},
      tutList: [{
          id: "1",
          title: "permissions",
          check: $localStorage.phase1.permissions=='done'
        }, {
          id: "1",
          title: "adding new users",
          check: $localStorage.phase1.newUsers=='done'
        }, {
          id: "1",
          title: "setting up users",
          check: $localStorage.phase1.setUpUsers=='done'
        }]
    }, {
      class: "phase3",
      title: "CRM - Contacts & Companies",
      icon: "contact.svg",
      check: $localStorage.directory.phase2=='done',
      doneBtn: function(){$localStorage.directory.phase3='done'},
      tutList: [{
          id: "2",
          title: "Adding",
          check: $localStorage.phase1.adding=='done'
        }, {
          id: "2",
          title: "Searching",
          check: $localStorage.phase1.search=='done'
        }, {
          id: "2",
          title: "tabs",
          check: $localStorage.phase1.tabs=='done'
        }, {
          id: "2",
          title: "general fields",
          check: $localStorage.phase1.general=='done'
        }, {
          id: "2",
          title: "custom fields",
          check: $localStorage.phase1.custom=='done'
        }]
    }, {
      class: "phase4",
      title: "Branding",
      icon: "happy.svg",
      check: $localStorage.directory.phase3=='done',
      doneBtn: function(){$localStorage.directory.phase4='done'},
      tutList: [{
          id: "3",
          title: "branding center",
          check: $localStorage.phase1.brandingCenter=='done'
        }, {
          id: "3",
          title: "templates",
          check: $localStorage.phase1.templates=='done'
        }]
    }, {
      class: "phase5",
      title: "Sales Pipeline",
      icon: "credit-card.svg",
      check: $localStorage.directory.phase4=='done',
      doneBtn: function(){$localStorage.directory.phase5='done'},
      tutList: [{
          id: "4",
          title: "lead scoring",
          view: "get-started",
          check: $localStorage.phase1.leadScore=='done'
        }, {
          id: "4",
          title: "Opportunities",
          view: "users",
          check: $localStorage.phase1.opportunities=='done'
        }, {
          id: "4",
          title: "pipeline",
          view: "users",
          check: $localStorage.phase1.pipeline=='done'
        }]
    }, {
      class: "phase6",
      title: "Marketing",
      icon: "email.svg",
      check: function(){$localStorage.directory.phase5=='done'},
      tutList: [{
          id: "5",
          title: "Sending a Broadcast",
          view: "get-started",
          check: $localStorage.phase1.broadcast=='done'
        }, {
          id: "5",
          title: "Campaign - Overview",
          view: "users",
          check: $localStorage.phase1.campaign=='done'
        }]
    }]
  }

  return o;
}]);
