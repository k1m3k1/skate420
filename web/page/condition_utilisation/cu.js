let width = $(window).width(); 


window.onscroll = function(){
if ((width >= 1000)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#header").css("background","#fff");
        $("#header").css("color","#000");
        $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
        $("#header").css("padding","4vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid rgb(255, 44, 90)");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }else{
        $("#header").css("background","transparent");
        $("#header").css("color","#fff");
        $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
        $("#header").css("padding","6vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid #FFFFFF");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }
}
}


function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },800);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('/web/page/img/278394078_733321498035940_4215525978629696273_n.jpg') center center`);
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1650);

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        let hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1800, function(){
        window.location.hash = hash;
       });
       } 
      });
  });

  $(document).ready(function(){
    // Sélection de tous les éléments de la classe "Navigation"
    const navigationItems = document.querySelectorAll('#navigation a');

    // Parcours de tous les éléments et ajout des événements de survol
    navigationItems.forEach(item => {
        // Ajout de l'événement lorsque la souris survole l'élément
        item.addEventListener('mouseenter', function() {
            // Ajout d'un trait en dessous de l'élément survolé
            this.style.borderBottom = '2px solid #FF2F00'; // Couleur de la bordure au survol
        });

        // Ajout de l'événement lorsque la souris quitte l'élément
        item.addEventListener('mouseleave', function() {
            // Retrait du trait en quittant l'élément
            this.style.borderBottom = 'none';
        });
    });

    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            $('body,html').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function(){
                window.location.hash = hash;
            });
        } 
    });
});
