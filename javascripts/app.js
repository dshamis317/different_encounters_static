function displayBios() {
  $('#ray .bio').slideDown();

  $('.personnel img').on('click', function() {
    var thisBio = this.parentElement.lastElementChild
    $('.bio').slideUp();
    if ($(thisBio).is(':hidden')) {
     $(thisBio).slideDown();
   }
 })
}

function loadPageContent() {
  $('a').on('click', function(e) {
    e.preventDefault();
    var id = this.id;
    if (id === "partners") {
      $('.container').load(id + '.html');

      loadPageContent();

      $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slide: '> div',
        cssEase: 'linear'
      });
    } else {
     $('.container').load(id + '.html')
   }

 })
}


function pageInitializers() {
  $('html').hide();
  $('.container').load('home.html');
  $('html').fadeIn();
}

// URL FOR CONTACT FORM
// http://forms.brace.io/andrey@differentencouters.org?name=Dmitry&_replyto=dshamis317%40gmail.com&subject=TEST&message=TEST+TEST+TEST+TEST+TEST

$(function() {
  pageInitializers()
  loadPageContent();
})
