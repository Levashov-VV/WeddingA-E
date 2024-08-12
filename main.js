$('.form').on('submit', function (event) {

    event.stopPropagation();
    event.preventDefault();

    let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]')

    $('.submit', form).val('Отправка...');
    $('input, textarea', form).attr('disabled','');

    data.append( 'name', 		$('[name="name"]', form).val() );
    data.append( 'visit', 		$('[name="visit"]', form).val() );
    data.append( 'drink', 		$('[name="drink"]', form).val() );

    files.each(function (key, file) {
        let cont = file.files;
        if ( cont ) {
            $.each( cont, function( key, value ) {
                data.append( key, value );
            });
        }
    });
    
    $.ajax({
        url: 'ajax.php',
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        xhr: function() {
            let myXhr = $.ajaxSettings.xhr();

            if ( myXhr.upload ) {
                myXhr.upload.addEventListener( 'progress', function(e) {
                    if ( e.lengthComputable ) {
                        let percentage = ( e.loaded / e.total ) * 100;
                            percentage = percentage.toFixed(0);
                        $('.submit', form)
                            .html( percentage + '%' );
                    }
                }, false );
            }

            return myXhr;
        },
        error: function( jqXHR, textStatus ) {
        },
        complete: function() {

            console.log('Complete')
            form.reset() 
        }
    });
    return false;
});


window.onload = () => document.querySelector('header').classList.remove('hidden');

$(window).on("load", function() {
    $(window).scroll(function() {
        const windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".event").each(function() {
            const objectBottom = $(this).offset().top + $(this).outerHeight();

            if (objectBottom < windowBottom) {
                if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
            } else { 
                if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
            }
        });
    }).scroll(); 
});

const elementsToFadeInUpOnScroll = document.querySelectorAll(".fade-in-up");
if (elementsToFadeInUpOnScroll) {
    window.addEventListener("scroll", function(event) {
    elementsToFadeInUpOnScroll.forEach(function(element) {
    if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
        element.classList.add("fade-in-up");
    } else {
        element.classList.remove("fade-in-up");
    }
        });
    });
} 