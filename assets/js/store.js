(function($) {

    const API_URL = "https://motopillos.herokuapp.com/products";
    data = fetch(API_URL).then(res => res.json().then(data => {

        productList = "";

        for (var i = 0; i < data.products.length; i++) {

            const promo = data.products[i].promo
            const preo = data.products[i].preorder
            wappLink = 'https://api.whatsapp.com/send?phone=50688261830&text=%F0%9F%8F%8D%EF%B8%8F%20Hola%20quisiera%20comprar%20este%20producto%3A%20Nombre:%20' + data.products[i].name + '%20|%20Color:%20' + data.products[i].color + '%20|%20Codigo:%20' + data.products[i].code;
            promotion = ''
            preorder = ''
            promoprice = ''

            if (promo === 1) {
                promotion = '<span class="sale">Promocion</span>'
                promoprice = '<div class="new-price">$' + data.products[i].price + '</div>'
            } else {
                promotion = '<span class="sale hidde">Promocion</span>'
                promoprice = '<div class="old-price hidde">$' + data.products[i].price + '</div>'
            }
            if (preo === 0) {
                preorder = '<span class="top-salec hidde">Contrapedido</span>'
            } else {
                preorder = '<span class="top-sale">Contrapedido</span>'
            }
            p = '<div class="col-12 col-sm-4 prod-item-col ' + data.products[i].tag + '"><div class="product-item">' +
                promotion + preorder +
                // '<ul class="product-icon-top"><li><a href="#"><i class="fa fa-refresh" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a></li></ul>' +
                '<a class="product-img"><img src="assets/img_mp/' + data.products[i].image + '" alt="product"></a><div class="product-item-wrap"><div class="product-item-cover"><div class="price-cover">' +
                '<div class="new-price">¢' + data.products[i].price + '</div>' + promoprice +
                '</div><h6 class="prod-title"><a class="name">' + data.products[i].name + " - " + data.products[i].modelo + '</a></h6>' +
                '<a href="' + wappLink + '" class="btn"><span>Comprar</span></a></div><div class="prod-info"><ul class="prod-list">' +
                // '<li>Descripcion: <span>' + data.products[i].description + '</span></li>' +
                '<li>Codigo: <span>' + data.products[i].code + '</span></li>' +
                '<li>Color: <span>' + data.products[i].color + '</span></li>' +
                '<li>Modelo: <span>' + data.products[i].modelo + '</span></li>' +
                '<li>Marca: <span>' + data.products[i].marca + '</span></li></ul></div></div></div></div>'
            productList = productList + p
        }
        document.getElementById('products-container').innerHTML = productList;

    }));
}(jQuery));