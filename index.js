$(function(){


  /*

    Agrega soporte de smooth scrolling a Edge y Safari. 
    Agradecimientos: https://www.w3schools.com/howto/howto_css_smooth_scroll.asp

  */
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
      }, 100, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });


  /*
    Agradecimientos: https://github.com/BlackrockDigital/startbootstrap-scrolling-nav/blob/master/js/scrolling-nav.js
  */
  // Closes responsive menu when a scroll trigger link is clicked
  $('nav a:not([href="#"])').click(function() {
    $('.navbar-collapse').collapse('hide');
  });


  /*
    Agradecimientos: https://getbootstrap.com/docs/4.0/components/forms/#validation
  */
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName('needs-validation');
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated'); 
    }, false);
  });
});