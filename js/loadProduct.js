$(function() {
    loadProductData();
});

function loadProductData() {
    $.getJSON("../zapatillas.json", function(json) {
        let sneaker_id = localStorage.getItem("sneaker_id");
        let sneaker = json.sneakers.find(item => item.id == sneaker_id);
        console.log(sneaker);
        $(".sneaker_image").attr('src', sneaker.main_picture_url);
        $(".sneaker_title").html(sneaker.name);
        $(".sneaker_price").html(sneaker.retail_price_cents / 100 + "€");
    });
}