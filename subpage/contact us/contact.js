$('body').delegate('.FAQ', 'click', function(){
    $('.FAQ').removeClass('FAQ--active');
    $(this).addClass('FAQ--active');
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
  