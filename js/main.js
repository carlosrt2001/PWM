
$(function() {
    init();

});

function init() {
    initHeader();
    initFooter();
    initHamburger();
}

function initHeader() {
    $(".header").load("../templates/header.html")
    $(".header2").load("../templates/header2.html")
    
}

function initFooter() {
    $("footer").load("../templates/footer.html")
}
