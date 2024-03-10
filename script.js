document.addEventListener('DOMContentLoaded', function() {
    const spark = document.getElementById('spark');
  
    document.addEventListener('mousemove', function(e) {
      // Update the spark position based on mouse coordinates
      const x = e.clientX - spark.clientWidth / 2;
      const y = e.clientY - spark.clientHeight / 2;
  
      // Apply the new position
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
  
      // Show the spark
      spark.style.display = 'block';
  
      // Add a timeout to hide the spark after a short duration (e.g., 300 milliseconds)
      setTimeout(() => {
        spark.style.display = 'none';
      }, 300);
    });
  });
  

  // google translator //
  function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      { pageLanguage: 'en' },
      'google_translate_element'
    );
  }

  // Call the translation initialization function when the page loads
  window.onload = function () {
    googleTranslateElementInit();
  };

 

 
  // Your other scripts
  function startPainting(vehicleType) {
    // Add your logic for starting the painting process, if needed

    // Redirect to the specified URL 
    window.open('https://forms.gle/LR53MFRTfkCZdQTP6', '_blank');
  }


  /* bottom to up arrow */
 // Function to scroll to the top of the page
 function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Show the back-to-top button when scrolling down
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var backToTopBtn = document.getElementById("backToTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }

}
