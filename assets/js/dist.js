// Declare eee as a global variable
let products;

fetch('https://jptdnmemfnftsbhyxnjw.supabase.co/rest/v1/products?select=*', {
  method: 'GET',
  headers: {
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwdGRubWVtZm5mdHNiaHl4bmp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3NjQ2ODEsImV4cCI6MjAyNTM0MDY4MX0.pRahtxTbiVpNAo5esJsD4Kh3cKKaD-0GiC71pXuSglo',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwdGRubWVtZm5mdHNiaHl4bmp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3NjQ2ODEsImV4cCI6MjAyNTM0MDY4MX0.pRahtxTbiVpNAo5esJsD4Kh3cKKaD-0GiC71pXuSglo'
  }
})
.then(response => response.json())
.then(data => {
  products = data
  createStore();
})
.catch(error => console.error('Error:', error));

// Define createStore() to use the global variable eee
function createStore() {

    productList = "";
    for (var i = 0; i < products.length; i++) {

      const promo = products[i].promo
          // wappLink = 'https://api.whatsapp.com/send?phone=50672095347&text=%F0%9F%8F%8D%EF%B8%8F%20Hola%20quisiera%20comprar%20este%20producto%3A%20Nombre:%20' + products[i].name + '%20|%20Color:%20' + products[i].color + '%20|%20Codigo:%20' + products[i].code;

      p = '<div class="col-12 col-sm-4 prod-item-col ' + products[i].tag + '" data-index="' + i + '" id="product-' + i + '"><div class="product-item">' +
          '<span class="top-sale">Cantidad</span>' +
          '<ul class="product-icon-top"><li><input type="number" class="quantity" name="quantity" min="1" max="100" value="1"></i></a></li><li><a><i class="fa fa-check" id="checkicon-' + i + '" aria-hidden="true"></i></a></li></ul>' +
          '<a class="product-img"><img src="assets/img_mp/' + products[i].image + '" alt="product"></a><div class="product-item-wrap"><div class="product-item-cover"><div class="price-cover">' +
          '<div class="new-price price">¢ <span class="unit-price">' + products[i].pricedist + '</span></div>' +
          '</div><h6 class="prod-title"><a class="name">' + products[i].name + " - " + products[i].modelo + '</a></h6>' +
          '<a class="btn add-product" data-index="' + i + '"><span>Agregar</span></a></div>' +
          '<div class="prod-info"><ul class="prod-list">' +
          // '<li>Descripcion: <span>' + products[i].description + '</span></li>' +
          '<li>Codigo: <span class="code">' + products[i].code + '</span></li>' +
          '<li>Color: <span>' + products[i].color + '</span></li>' +
          '<li>Modelo: <span class="modelo">' + products[i].modelo + '</span></li>' +
          '<li>Marca: <span>' + products[i].marca + '</span></li></ul></div></div></div></div>'
      productList = productList + p
  }
  document.getElementById('products-container').innerHTML = productList;

  $(".add-product").click(function() {
      let index = $(this).data("index");
      let parentElement = "#product-" + index;
      let pName = $(parentElement + " .name").text();
      let pCode = $(parentElement + " .code").text();
      let pQty = $(parentElement + " .quantity").val();
      let pPrice = $(parentElement + " .unit-price").text();
      let total = pQty * parseInt(pPrice);

      $("#order-table").append(
          '<tr><td>' + pName + '</td>' +
          '<td>' + pCode + '</td>' +
          '<td>' + pQty + '</td>' +
          '<td>' + pPrice + '</td>' +
          '<td class="total-line">' + total + '</td>' +
          '<td class="text-center">' +
          '<a class="remove" data-index="' + index + '"><li class="fa fa-trash"></li></a></td></tr>');

      $("#checkicon-" + index).css("color", "green");
      totalCalculation()
  });

  /* Delete row and change check icon color in a table on click in trash icon */
  $('#order-table').on('click', '.remove', function() {
      const tp = $(this).data("index");
      $(this).closest('tr').remove();
      $("#checkicon-" + tp).css("color", "red");
      totalCalculation();
  });

  function totalCalculation() {
      var allTotals = [];
      $(".total-line").each(function() {
          allTotals.push(parseInt($(this).text()));
      });
      var sum = allTotals.reduce(function(a, b) {
          return a + b;
      }, 0);
      $("#total-final").text("¢" + sum);
  }

  $("#ordersForm").submit(function(event) {
      console.log("Se envio el form")
      let productsOrder = $("#order-summary").html();
      let costumerName = $("#userName").val();
      let costumerEmail = $("#userEmail");
      let costumerCel = $("#userCel");
      let costumerAddress = $("#userAddress");

      console.log(productsOrder)
      console.log(costumerName)
      event.preventDefault();
  });
}
