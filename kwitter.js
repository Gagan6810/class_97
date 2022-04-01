function adduser(){
    input_username = document.getElementById("input_username").value ;

    localStorage.setItem("username", input_username);

    window.location = 'kwitter_room.html';
}