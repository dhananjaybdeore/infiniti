// for animation of bar and cross in mobile view
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});


//menu

$(document).ready(function () {
    $('.dropdown-menu a.dropdown-toggle').on('click mouseover', function (e) {
        var $el = $(this);
        $el.toggleClass('active-dropdown');
        var $parent = $(this).offsetParent(".dropdown-menu");
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');

        $(this).parent("li").toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-menu .show').removeClass("show");
            $el.removeClass('active-dropdown');
        });

        if (!$parent.parent().hasClass('navbar-nav')) {
            $el.next().css({ "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 });
        }

        return false;
    });
});
//---------

$("#accordion .card-link").click(function () {
    $(this).children().children().toggleClass("downArrow").toggleClass('upArrow');
});

$('#service_insurance_carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-service_insurance_carousel .owl-nav-prev'), $('.owl-navigation-service_insurance_carousel .owl-nav-next')],
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 1
        }
    }
});

$('#customer_feedback_carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-customer_feedback_carousel .owl-nav-prev'), $('.owl-navigation-customer_feedback_carousel .owl-nav-next')],
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 4
        }
    }
});

$('#service_home_loan_carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoPlaySpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    nav: true,
    navText: [$('.owl-navigation-service_home_loan_carousel .owl-nav-prev'), $('.owl-navigation-service_home_loan_carousel .owl-nav-next')],
    responsive: {
        0: {
            items: 1
        },
        960: {
            items: 4
        }
    }
});

// Career auto modal popup
$(window).on('load', function () {
    $('#modal-career').modal('show');
});

allhide();
function showOne() {
    var x = document.getElementById("toshow1");
    if (x.style.display === "none") {
        allhide();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function showTwo() {
    var x = document.getElementById("toshow2");
    if (x.style.display === "none") {
        allhide();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function showThree() {
    var x = document.getElementById("toshow3");
    if (x.style.display === "none") {
        allhide();
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function allhide() {
    var x1 = document.getElementById("toshow1");
    var x2 = document.getElementById("toshow2");
    var x3 = document.getElementById("toshow3");
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
}


/* Selection an image */
$('img').click(function (e) {
    $('img.highlight').not(e.target).removeClass('highlight');
    $(this).toggleClass('highlight');
});