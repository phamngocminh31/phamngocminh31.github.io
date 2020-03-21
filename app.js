$(function () {
   
    setInterval(() => {
    
       var slide_active = $('.active');
      
        
    if ($('.slide:last').hasClass('active')) {
        $('.slide:last').removeClass('active');
        $('.slide:first').addClass('active');
    
    } else {
         $('.active').removeClass('active');
         $(slide_active).next().addClass('active');
    }
    
    }, 5000);
    
    $('.next').click(function (e) { 
        e.preventDefault();
    
        var slide_active = $('.active');
      
         
     if ($('.slide:last').hasClass('active')) {
         $('.slide:last').removeClass('active');
         $('.slide:first').addClass('active');
     
     } else {
          $('.active').removeClass('active');
          $(slide_active).next().addClass('active');
     }
     
    });
    
    $('.prev').click(function (e) { 
        e.preventDefault();
    
        var slide_active = $('.active');
    
         
     if ($('.slide:first').hasClass('active')) {
         $('.slide:first').removeClass('active');
         $('.slide:last').addClass('active');
     
     } else {
          $('.active').removeClass('active');
          $(slide_active).next().addClass('active');
     }
     
    });

    $('.a1').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        }, 1000)
    });
    $('.a4').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        }, 1000)
    });
    $('.a2').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi1').offset().top -70
        }, 1000)
    });
    $('.a3').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi2').offset().top -70
        }, 1000)
    });
    


    $(window).scroll(function () { 
        console.log(window.pageYOffset)
        if (window.pageYOffset >= $('.khoi2').offset().top - 72) {
            $('.nut').removeClass('dkm');
            $('.a3').addClass('dkm');
        } else if (window.pageYOffset >= $('.khoi1').offset().top - 72) {
            $('.nut').removeClass('dkm');
            $('.a2').addClass('dkm');
        } else {
            $('.nut').removeClass('dkm');
        }
    });
    
    
    console.log($('.slide:last'))
    console.log($('.slide:first'))
    console.log($('.slide:nth-child(2)'));
    
    });