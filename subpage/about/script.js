const accordionItemHeaders = document.querySelectorAll(".srmfocusright-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    const currentlyActiveAccordionItemHeader = document.querySelector(".srmfocusright-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
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

