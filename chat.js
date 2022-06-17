var firebaseConfig = {}
const firebaseConfig = {
    apiKey: "AIzaSyBYFmMdTm_kB033zTT-JoEi437WkT3xT9U",
    authDomain: "webapp-d81df.firebaseapp.com",
    projectId: "webapp-d81df",
    storageBucket: "webapp-d81df.appspot.com",
    messagingSenderId: "859338891201",
    appId: "1:859338891201:web:2b73c6c259d0f4765fd940"
  };
  const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);
    
    window.location = "chat_room.html";
}
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});