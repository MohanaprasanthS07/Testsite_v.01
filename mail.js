 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDDULdGaRCZLSZSDbubDTvaVJXYJQaTHtI",
    authDomain: "contactform-sbmpw.firebaseapp.com",
    databaseURL: "https://contactform-sbmpw-default-rtdb.firebaseio.com",
    projectId: "contactform-sbmpw",
    storageBucket: "contactform-sbmpw.appspot.com",
    messagingSenderId: "432623404465",
    appId: "1:432623404465:web:bc709df70e0aa5568c2990"
  };


// Initialize firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
var contactFormDB = firebase.database().ref("contactForm5");

document.getElementById("contactForm5").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name5");
  var emailid = getElementVal("emailid5");
  var msgContent = getElementVal("msgContent5");

  if (name === "" || emailid === "" || msgContent === "") {
    Swal.fire({
      icon: 'error',
      title: 'Sending Error...',
      text: 'Please fill in all the required information!',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      background: '#d1bdba', // Set background color
      customClass: {
        title: 'error-title',
        content: 'error-content',
      },
      showClass: {
        popup: 'animated fadeInDown faster',
      },
      hideClass: {
        popup: 'animated fadeOutUp faster',
      },
  
    });
    
    
    return;
  }
  
  saveMessages(name, emailid, msgContent);

  // Enable alert
  document.querySelector(".alert5").style.display = "block";

  // Remove the alert
  setTimeout(() => {
    document.querySelector(".alert5").style.display = "none";
  }, 3000);

  // Reset the form
  document.getElementById("contactForm5").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
