$(document).ready(function() { 
    $("#menuToggle").click(function(){
        $("#nav-icon").toggleClass("open");
        if($("#nav-icon").hasClass("open")) {
            $(".navWrapper").delay(300).addClass('active');
        } else {
            $(".navWrapper").delay(300).removeClass('active');
        }
    });
    
    addPercentages();
    
    function addPercentages() {
        let percentagesNums =  document.querySelectorAll('.percentagesNum');
        let percentagesLine =  document.querySelectorAll('.percentagesLine');        
        for(var i=0; i< percentagesNums.length;i++){
            let thisText = percentagesNums[i].textContent;
            percentagesLine[i].style.width = thisText;
        }
    }
});

