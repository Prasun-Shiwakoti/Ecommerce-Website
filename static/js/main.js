(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);

        //--------- Add to cart request
        $(".addToCart").on("click", function(e){
            e.preventDefault();
            $.post(window.origin+"/addToCart", {"productId":$(this).attr("value")})
        });
        $(".deleteFromCart").on("click", function(e){
            e.preventDefault();
            $.post(window.origin+"/deleteFromCart", {"productId":$(this).attr("value")})
            location.reload()
        });



    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        var dynamicPrice = button.parent().parent().parent().parent().children()[3];
        var staticPrice = Number(button.parent().parent().parent().parent().children()[1].innerText.slice(1));

        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
            dynamicPrice.innerText = '$' + (Number(dynamicPrice.innerText.slice(1)) + staticPrice)
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
                dynamicPrice.innerText = '$' + (Number(dynamicPrice.innerText.slice(1)) - staticPrice)
            } else {
                newVal = 0;
                dynamicPrice.innerText = '$0'
            }
        }
        updateCartSummary()
        button.parent().parent().find('input').val(newVal);
        
    });
    

})(jQuery);

function updateCartSummary(){
    var table = $('table[class="table table-bordered text-center mb-0"')[0].getElementsByTagName("tr");
    var cartSummary = document.getElementsByClassName("card border-secondary mb-5")[0]
    var totalPrice = cartSummary.getElementsByTagName("h6")[1]
    var shippingPrice = Number(cartSummary.getElementsByTagName("h6")[3].innerText.slice(1))
    var finalTotal = cartSummary.getElementsByTagName("h5")[1]
    var total = 0
    for (var i=1;i<table.length;i++){
        total += Number(table[i].getElementsByTagName("td")[3].innerText.slice(1))

    }
    totalPrice.innerText = '$'+total;
    finalTotal.innerText = '$' + (total+shippingPrice)
}


function gotoCheckout(){
    console.log("lcksjadflkjsdlfkj")
    // frm = document.createElement('form');
    var table = $('table[class="table table-bordered text-center mb-0"')[0].getElementsByTagName("tr");
    var cartDetails = {}
    for (var i=1;i<table.length;i++){
        var id = table[i].getElementsByTagName("td")[4].getElementsByTagName("button")[0].getAttribute("value");
        var totalPrice =  table[i].getElementsByTagName("td")[2].getElementsByTagName("input")[0].value
        console.log(id, quantity)

    }
    // $.post(window.origin+"/checkout", {"cartDetails":cartDetails})

}