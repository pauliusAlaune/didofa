$(document).ready(function() { 
    
    // TABLE AND MOBILE NAVIGATION OPEN AND CLOSE
    $("#menuToggle").click(function(){
        $("#nav-icon").toggleClass("open");
        if($("#nav-icon").hasClass("open")) {
            $(".navWrapper").delay(300).addClass('active');
        } else {
            $(".navWrapper").delay(300).removeClass('active');
        }
    });
    
    
    // SCROLL BY HREF TO ID PLACE
    $('.scrollLink[href^="#"]').on('click', function(e) {
        var id = $(this).attr('href');
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }
        e.preventDefault();
        var pos = $id.offset().top;
        
        if($(window).width() > 1024) {
            $('body, html').animate({scrollTop: pos});
        } else {
            if ($("#nav-icon").hasClass("open")){
                $("#menuToggle").trigger('click');
                setTimeout(function(){
                    $('body, html').animate({scrollTop: pos - 60});
                }, 800);
            } else {
                $('body, html').animate({scrollTop: pos - 60});
            }
        }
    });
    
    
    // SUBSCRIBE FORM VALIDATION
    const subscribeForm = document.getElementById('subscribeForm');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e){        
            if(!(validateEmail())){
                e.preventDefault();
            } else {
                console.log('fin');
            }        
        });
    }

    document.getElementById('email').addEventListener('blur', validateEmail);

    function validateEmail(){
        const email = document.getElementById('email');
        const block = document.querySelector('.subscribeHolder__block');
        let validEmail = true;
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+).([a-zA-Z]{2,5})$/;
        if(!re.test(email.value)){
            email.classList.add('is-invalid'); 
            block.classList.add('err');
            block.classList.add('animated', 'shake');
            setTimeout(function(){
                block.classList.remove('animated', 'shake');
            }, 1500);
            setTimeout(function(){
                block.classList.remove('err');
            }, 3000);
            validEmail = false;
        } else {
            email.classList.remove('is-invalid');
            block.classList.remove('err');
        }
        return validEmail;
    }
    
    
    //  PLAY VIDEO
    $('#playBtn').on('click', function () {
        $('.coverImg').addClass('active');
        $('#playBtn').addClass('active');
        $('.vHolder').addClass('active');
        $("#video")[0].src += "&autoplay=1";
    });
    
    
    // GET PERCENTAGES VALUE AND ADD STYLE IN DECO LINE
    addPercentages();
    
    function addPercentages() {
        let percentagesNums =  document.querySelectorAll('.percentagesNum');
        let percentagesLine =  document.querySelectorAll('.percentagesLine');        
        for(var i=0; i< percentagesNums.length;i++){
            let thisText = percentagesNums[i].textContent;
            percentagesLine[i].style.width = thisText;
        }
    }
    
    
    // ROADMAP CAROUSEL
    $('#roadmapCar').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        onChanged: activeCerise,
        onDragged: activeCerise,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:2
            },
            1024:{
                items:4
            }
        }
    });
    
    $('#roadmapCar .owl-item').children().removeClass('activeCerise');
    $('#roadmapCar .owl-item.active').first().children().addClass('activeCerise');
    
    $('#nextRoadmap').click(function(){
        $('#roadmapCar .owl-next').trigger('click');
        $('#roadmapCar .owl-item').children().removeClass('activeCerise');
        $('#roadmapCar .owl-item.active').first().children().addClass('activeCerise');
    }); 
    
    $('#prevRoadmap').click(function(){
        $('#roadmapCar .owl-prev').trigger('click');
        $('#roadmapCar .owl-item').children().removeClass('activeCerise');
        $('#roadmapCar .owl-item.active').first().children().addClass('activeCerise');
    });
    
    function activeCerise(){
        $('.roadmapSection__didofaRoadmaoHolder__carouselHolder__carouselWrapper--item item').removeClass('activeCerise');
        $('#roadmapCar .owl-item.active').first().children().addClass('activeCerise');
        console.log('work');
    }
    
    
    // NEWS CAROUSEL
    $('#newsCarousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        margin: 30,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:2
            },
            1024:{
                items:3
            }
        }
    });
    
    $('#nextNews').click(function(){
        $('#newsCarousel .owl-next').trigger('click');
    }); 
    
    $('#prevNews').click(function(){
        $('#newsCarousel .owl-prev').trigger('click');
    });
    
    
    // QUESTION AND ANSWER SLIDE DOWN / UP
    $('.questionBlock').click(function(e){
        e.stopPropagation();
        if($(this).hasClass('active')){
            $('.questionBlock').next().removeClass('open');
            $('.questionBlock').next().slideUp('slow');
            $('.questionBlock').removeClass('active');
        }else{
            $('.questionBlock').next().removeClass('open');
            $('.questionBlock').next().slideUp('slow');
            $('.questionBlock').removeClass('active');
            $(this).next().slideToggle("slow");
            $(this).next().toggleClass('open');
            $(this).toggleClass('active');
        }
    });

    
});

