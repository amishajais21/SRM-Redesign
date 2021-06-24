$(function() {
        $('.material-card > .mc-btn-action').click(function () {
            var card = $(this).parent('.material-card');
            var icon = $(this).children('i');
            icon.addClass('fa-spin-fast');

            if (card.hasClass('mc-active')) {
                card.removeClass('mc-active');

                window.setTimeout(function() {
                    icon
                        .removeClass('fa-arrow-left')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-bars');

                }, 800);
            } else {
                card.addClass('mc-active');

                window.setTimeout(function() {
                    icon
                        .removeClass('fa-bars')
                        .removeClass('fa-spin-fast')
                        .addClass('fa-arrow-left');

                }, 800);
            }
        });
    });


    // navbar
    $('.navbar-collapse').click(function(event){
        event.stopPropagation();
      });
    $(document).ready(function () {
        $(document).click(function (event) {
            var click = $(event.target);
            var _open = $(".navbar-collapse").hasClass("show");
            if (_open === true && !click.hasClass("navbar-toggler")) {
                $(".navbar-toggler").click();
            }
        });
      });