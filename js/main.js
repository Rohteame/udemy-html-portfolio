$(document).ready(function(){

    let $btns = $('.project-area .button-group button');

    $btns.click(function(e){
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active'); 

        let selector = $(e.target).attr('data-filter');
        $('.project-area .row').isotope({
            filter: selector
        });

        return false;

    }) 

//layout arrangement
$('.project-area .button-group #btn1').trigger('click');

//magnific pop-up
$('.test-popup-link').magnificPopup({
    type: 'image', 
    gallery:{enabled:true}
  }); 

//owl carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
        0: {
            items:1
        },
        544: {
            items: 2
        }
    }
})

});