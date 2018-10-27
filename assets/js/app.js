// Initialize Firebase

var database = firebase.database();

var config = {
    apiKey: "AIzaSyCCXDBvWPE-ldjI9NqCVoe4Vom-IjM_jAM",
    authDomain: "in-class-project-e3bb6.firebaseapp.com",
    databaseURL: "https://in-class-project-e3bb6.firebaseio.com",
    projectId: "in-class-project-e3bb6",
    storageBucket: "in-class-project-e3bb6.appspot.com",
    messagingSenderId: "65547330676"
  };
  firebase.initializeApp(config);


  // point to HTML handling input
$("#employee-input").on("click", function() {
    // initial row div
    dataDiv = $("<div>");
    dataDiv.attr("class", "row");
    var input = $("#employee-input").val().trim();
    // push function
    database.push(input);
})