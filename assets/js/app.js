// Initialize Firebase

var config = {
    apiKey: "AIzaSyCCXDBvWPE-ldjI9NqCVoe4Vom-IjM_jAM",
    authDomain: "in-class-project-e3bb6.firebaseapp.com",
    databaseURL: "https://in-class-project-e3bb6.firebaseio.com",
    projectId: "in-class-project-e3bb6",
    storageBucket: "in-class-project-e3bb6.appspot.com",
    messagingSenderId: "65547330676"
  };
  firebase.initializeApp(config);

var dataRef = firebase.database();  

var name = "";
var Prate = "";
var startDate = "";
var monthRate = "";


  // point to HTML handling input
$("#add-employee").on("click", function(event) {

    event.preventDefault();

    name = $("#input-name").val();
    rate = $("#input-rate").val();
    date = $("#input-date").val();
    monthRate = $("#input-monthly").val();

    dataRef.ref().push( {
            name: name,
            Prate: Prate,
        });


});


    
    
