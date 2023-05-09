"use strict";
window.addEventListener("load", function() {
    calcCart();
    var cart = document.forms.shoeOrder;
    cart.elements.shoeSelect.onchange = calcCart;
    cart.elements.insuranceSelect.onchange = calcCart;
    var shippingOptions = document.querySelectorAll('input[name="shipping"]');
   for (var i = 0; i <= shippingOptions.length; i++) {
       shippingOptions[i].onclick = calcCart;
   }
});

function calcCart() {
    var cart = document.forms.shoeOrder;
    var shoeCost = cart.elements.shoeSelect.value;
    var shipCost = document.querySelector('input[name="shipping"]:checked').value;
    var insuranceCost = cart.elements.insuranceSelect.value;
    cart.elements.cartTotal.value = formatUSCurrency(
        Number(shoeCost) + Number(insuranceCost) + Number(shipCost)
    );
   

    function roundToTwo(num) {
       return +(Math.round(num + "e+2") + "e-2");
    }
    
    
    
    
    
    
    function formatNumber(val, decimals) {
       return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                             maximumFractionDigits: decimals});
    }
    
    function formatUSCurrency(val) {
       return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}
 }