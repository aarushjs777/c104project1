
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAfBaJQIUAWMIz3PDhmwqnIvL5cEGixaiM",
      authDomain: "c104project.firebaseapp.com",
      databaseURL: "https://c104project-default-rtdb.firebaseio.com",
      projectId: "c104project",
      storageBucket: "c104project.appspot.com",
      messagingSenderId: "276652777503",
      appId: "1:276652777503:web:32458fb42f84849e53b52a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    // Initialize Firebase
   
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"     +user_name +"!";
    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
     getData();
     function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html"
     }
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location="qwitter.html";
}

