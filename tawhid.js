window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i<reveals.length; i++){
        
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }

        else{
            reveals[i].classList.remove('active');
        }
    }        
    }

    function changebg() {
        var nabar = document.getElementById('neve');
        var scrollvalue = window.scrollY;

        if (scrollvalue < 30){
            nabar.classList.remove('Bgcolor');
        }else{
            nabar.classList.add('Bgcolor');
        }
    }
    window.addEventListener('scroll', changebg);
