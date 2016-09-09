$(document).ready(function(){
  var $container = $('.portfolio-isotope');

  $container.isotope({
    itemSelector : '.portfolio-item',
    resizable: true,
    resizesContainer: true,
    layoutMode: 'fitRows'
  });

  // Add "loaded" class when a section has been loaded
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    $(".section").each(function() {
      var elementTop = $(this).offset().top - $('#header').outerHeight();
      if(scrollTop >= elementTop) {
        $(this).addClass('loaded');
      }
    });
  });

  // One Page Navigation Setup
  $('#navigation').singlePageNav({
    offset: $('#navbar').outerHeight(),
    filter: ':not(.external)',
    speed: 750,
    currentClass: 'active',

    beforeStart: function() {
    },
    onComplete: function() {
    }
  });

  // Sticky Navbar Affix
  $('#navbar').affix({
    offset: {
      top: $('#topbar').outerHeight(),
    }
  });

  // Smooth Hash Link Scroll
  $('.smooth-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $('.nav a').on('click', function(){
    if($('.navbar-toggle').css('display') !='none'){
      $(".navbar-toggle").click();
    }
  });

  $('#apply').on('click', function(e) {
    e.preventDefault();
    var href = this.href;
    alertify.confirm('Have you read our guidance?').setting({
        title: 'Have you read our guidance?',
        transition: 'fade',
        movable: false,
        closable: false,
        labels: { ok: 'Yes, take me to the application form', cancel: 'No, show me guidance'},
        onok: function() {
          if (e) {
            window.open(href, '_blank');
          }
        },
        oncancel: function(){
          window.open('https://drive.google.com/file/d/0B-M1syckDdQbcEZoUUJoUzNNblk/view?usp=sharing', '_blank');
        }
      });
      $('.ajs-body').remove();
  });
});
