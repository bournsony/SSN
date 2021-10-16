$(document).ready(function(){

// Category Top carousel
$("#category .owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    responsive : {
        0: {
            items: 3.5
        },
        600: {
            items: 10.5
        }
    }
});




// Category Brand carousel
$("#brand .owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    responsive : {
        0: {
            items: 2.5
        },
        600: {
            items: 10.5
        }
    }
});






// Isotope Filter
var $grid=$(".grid").isotope({
    itemSelector:'.grid-item',
    layoutMode: "fitRows"
});

// Filter Item on Button Click
$(".button-group").on("click", "button", function(){
    var filterValue=$(this).attr("data-filter");
    $grid.isotope({
        filter:filterValue,
        responsive : {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000 : {
                items: 5
            }
        }
    });
    
})


});