$(document).ready(function(){

  $("#maureenthorson").click(function(){
    window.open("http://maureenthorson.com/", "_blank");
  });
  $("#maureenthorson").hover(function(){
    window.status = "http://maureenthorson.com/";
  }, function(){
    window.status = "";
  });
  $("#dharmatime").click(function(){
    window.open("https://dharmatime.herokuapp.com/", "_blank");
  });
  $("#lifelist").click(function(){
    window.open("https://jeffreyeaton76-lifelist.herokuapp.com/", "_blank");
  });
  $("#cryptly").click(function(){
    window.open("http://cryptly.herokuapp.com/", "_blank");
  });
  $("#ihavetogo").click(function(){
    window.open("https://jeffreyeaton76-ihavetogo.herokuapp.com/", "_blank");
  });
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});