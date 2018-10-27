// Initialize Firebase
var config = {
    apiKey: "AIzaSyCCXDBvWPE-ldjI9NqCVoe4Vom-IjM_jAM",
    authDomain: "in-class-project-e3bb6.firebaseapp.com",
    databaseURL: "https://in-class-project-e3bb6.firebaseio.com",
    projectId: "in-class-project-e3bb6",
    storageBucket: "",
    messagingSenderId: "65547330676"
  };
  firebase.initializeApp(config);

(document).on("click", function() {
    // initial row div
    dataDiv = $("<div>");
    dataDiv.attr("class", "row");
})