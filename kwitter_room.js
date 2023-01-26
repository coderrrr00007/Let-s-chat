const firebaseConfig = {

      apiKey: "AIzaSyDK6hq2o7I8-eaHrXW8jQOEXtrDFIxvphg",
    
      authDomain: "kwitter-90db8.firebaseapp.com",
    
      databaseURL: "https://kwitter-90db8-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-90db8",
    
      storageBucket: "kwitter-90db8.appspot.com",
    
      messagingSenderId: "579629954782",
    
      appId: "1:579629954782:web:a078998a5bf23070ecf44f"
    
    };
    
  
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE

  userName = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome  "+userName+"!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id+"+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({ 
     
      purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
   }    

   function redirectToRoomName(name)
   {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
   }

   function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
         window.location = "kwitter.html";
   }