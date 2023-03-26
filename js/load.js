$(function() {
    initSneakers();
});

function initSneakers() {
    $.getJSON("../zapatillas.json", function(json) {
        $.each(json.sneakers, function(key, value) {
            $.get("../templates/product_card_template.html", function(template) {
                $("#product-container").append(template);
                $("#product-container").children().last().find("#sneaker_image").attr('src', value.grid_picture_url);
                $("#product-container").children().last().find("#sneaker_name").html(value.name);
                $("#product-container").children().last().find("#sneaker_id").html(value.id);
                $("#product-container").children().last().find("#price").html(value.retail_price_cents / 100 + "€");
                $("#product-container").children().last().on("click", function() {
                    let id = $(this).find("#sneaker_id").text();
                    localStorage.setItem("sneaker_id", id);
                    window.location.href = "./producto.html";
                });
            });
        });
    });
}