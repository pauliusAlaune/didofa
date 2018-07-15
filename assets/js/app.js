$(document).ready(function() { 
    $("#menuToggle").click(function(){
        $("#nav-icon").toggleClass("open");
        if($("#nav-icon").hasClass("open")) {
            $(".navWrapper").delay(300).addClass('active');
        } else {
            $(".navWrapper").delay(300).removeClass('active');
        }
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

