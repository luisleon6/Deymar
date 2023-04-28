$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function(){
        $('.fa-bars').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
    });

    $('.count').each(function(){
        var $this = $(this),
        countTo = $this.attr('data-count');
        $({countNum : $this.text()}).animate({
            countNum : countTo
        },
        {
            duration: 5000,
            step : function(){
                $this.text(Math.floor(this.countNum));
            },
            complete : function(){
                $this.text(this.countNum + '+')
            }
        }
        
        )
    })

}); 

const slides = document.querySelectorAll('.text-slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].className = 'text-slide';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = 'text-slide active';
}

setInterval(nextSlide, 2000); // Change the slide every 2 seconds

