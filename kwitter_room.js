//ADD YOUR FIREBASE LINKS HERE

username = localStorage.getItem("username");
document.getElementById('h3_welcome').innerHTMl = 'Welcome - ' + username;

function addroom(){
      addroom_name = document.getElementById('input_room_name').value;
      firebase.database().ref('/').child(addroom_name).update({
            test_key : 'checking'
      });
      localStorage.setItem('roomname', addroom_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
       row = "<div id= '" + Room_names +"' class = 'room_name' onclick='redirectToRoomname(this.id)'>#" + Room_names +"</div> <hr>";
       document.getElementById('output').innerHTML += row; 
      });});}
getData();

function redirectToRoomname(roomname){
      console.log(roomname);
      localStorage.setItem('room_name_clicked', roomname);
      window.location = 'kwitter_page.html';
}

function logout(){
      localStorage.removeItem('username');
      localStorage.removeItem('room_name_clicked');
      window.location = 'index.html';
}