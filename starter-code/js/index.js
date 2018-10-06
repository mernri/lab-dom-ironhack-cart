function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }

  calculatePriceButton.onclick = function (

    // On récupère le prix, la quantité et on calcule le prix total
    var productPrice = document.getElementById('product-price');
    var productQuantity = document.getElementById('product-quantity');

    var productTotal = productPrice.textContext * productQuantity.textContent;
    return productTotal;
    // On ajoute le total dans le champs prix total
    //var total = document.getElementById('product-total');
    //total.innerHTML = productTotal;
    )   
};
