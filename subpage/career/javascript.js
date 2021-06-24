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

  
  //section2
  jQuery(document).ready(function ($) {
  
    var tabContents = $('.tab-content div');
    var maxHeight = 0;
    
    tabContents.each(function(){
      var currentHeight = $(this).outerHeight();
      
      if (currentHeight > maxHeight){
        maxHeight = currentHeight;
      }
    })
    
    $('.tab-content').css('height', maxHeight);
  
  $('.tab-nav button').on('click', function(){
  
     var index = $(this).index();
    
      $('.tab-content div').removeClass('active');
    $('.tab-content div').eq(index).addClass('active');
    $('.tab-nav button').removeClass('active');
    $(this).addClass('active');
  });
    
      
  });

  // -------------------------------------------------------------------------------
