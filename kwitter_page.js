username = localStorage.getItem('username');
roomname = localStorage.getItem('room_name_clicked');

function send(){
      msg = document.getElementById('msg').value;
      firebase.database().ref(roomname).push({
            username : username,
            meassage : msg,
            likes : 0
      });
      document.getElementById('msg').value = '';
}

function getData() { 
      /*firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; 
            childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;*/

      firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { firebase_message_id = childKey; message_data = childData;

      console.log(firebase_message_id);
      console.log(message_data);

      name = message_data['name'];
      message = message_data['message'];
      like = message_data['likes'];

      name_tag = '<h4> ' + name + '<img src="tick.png" class = "user_tick"> </h4>';
      message_tag = '<h4 class = "msg_h4"> ' + message + '</h4>';
      like_tag = '<button class = "btn btn-warning" id="'+ firebase_message_id + '" value ="' + value +'" onclick = "update_like(this.id)">';
      span_like_tag = '<span class = "glyphicon glyphicon-thumbs-up"> like - ' +  like + '</span></button> <hr>';

      row = name_tag + message_tag + like_tag + span_like_tag;
      document.getElementById('output').innerHTML += row;
      } });  }); }

getData();

function update_like(msg_id){
      console.log('User clicked like button '+ msg_id );

      button_id = msg_id;
      likes = document.getElementById(button_id).value;

      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(roomname).child(msg_id).update({
            likes : updated_likes
      });
}

function logout(){
      localStorage.removeItem('username');
      localStorage.removeItem('roomname');
      window.location.replace('index.html');
}