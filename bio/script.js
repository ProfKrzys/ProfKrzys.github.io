document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("scrollButton");
    
    scrollButton.addEventListener("click", function() {
        document.getElementById('squares').scrollIntoView({behavior: "smooth"});
    });
  });
  