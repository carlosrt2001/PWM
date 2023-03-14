
$(function() {
    init();

});

function init() {
    initHeader();
    initFooter();
}

function initHeader() {
    $("header").load("../templates/header.html")
    
}

function initFooter() {
    $("footer").load("../templates/footer.html")
}

