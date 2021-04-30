
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBPWjd9Hcc_usr7ujjtc6edInV3XTf4VN0",
  authDomain: "test-ec15e.firebaseapp.com",
  projectId: "test-ec15e",
  storageBucket: "test-ec15e.appspot.com",
  messagingSenderId: "19273560209",
  appId: "1:19273560209:web:906ab73a8ba343485c0f30"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");


// Retrieve Data

function retriveInfo(){
  let ref=firebase.database().ref("infos");
  ref.on("value",gotData);
}

function gotData(data){
  var table=document.getElementById('myTable')
  let info=data.val();
  let keys=Object.keys(info);
  for(let i=0;i<keys.length;i++){
    let data=keys[i];

    let name=info[data].name;
    let email=info[data].email;
    let message=info[data].message;
  
    // let infoResults=document.querySelector(".infoResults");

    var row=`<tr>
                <td>${name}</td>
                <td>${email}</td>
                <td>${message}</td>
             </tr>`
    table.innerHTML += row
  }

}