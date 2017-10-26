
$(document).ready(function() {
    $('a').on('click', function(e) {
        
        if (this.hash !== "") {
            e.preventDefault();

            var hash = this.hash;

            $('html, body').stop().animate({
                scrollTop: $(hash).offset().top
            }, 1350, 'easeInOutQuart', function() {

            });
        }
    });

    $('#year').html(new Date().getFullYear());

    
});

