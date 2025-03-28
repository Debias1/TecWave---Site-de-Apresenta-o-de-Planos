$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });


    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function (){
        const header = $('header');
        let activeSectionIndex = 0;
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        if (scrollPosition <= 0){
            header.css('box-shadow', 'none');

        }else{
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.6');
        }
        
        sections.each(function(i){
            const section = $(this)
            const sectionTop = section.offset().top - 250;
            const sectionBottom = sectionTop + section.outerHeight();
            
            

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                activeSectionIndex = i;
                return false;
            }
        });
        navItems.removeClass('active')
        $(navItems[activeSectionIndex]).addClass('active');

    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2500,
        distance: '15%'
    })
    ScrollReveal().reveal('#planos',{
        origin: 'bottom',
        duration: 2000,
        distance:  '5%'
    })

});