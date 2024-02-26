var products = document.querySelectorAll(".product");
var cart = document.getElementById("cart");
var receipt = document.getElementById("receipt");
var total = 0;

products.forEach(function (product) {
  product.onclick = function () {
    cart.innerHTML += product.outerHTML;
    if (cart.children.length > 0) {
      document.getElementById("section2").style.display = "block";
    }

    total += +product.getAttribute("price");
  };
});

checkout.onclick = function () {
  receipt.innerHTML = "Total Price: " + total;
};
