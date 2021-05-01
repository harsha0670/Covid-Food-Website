
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

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });

  retriveInfo();
}

