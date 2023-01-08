var productBrand = 'Reformation';
var productName = document.getElementsByClassName('pdp__name font-size--20')[0].innerText;
var productDescription = document.getElementsByClassName('pdp__description-content')[0].innerText;
var productCategory = document.getElementsByClassName('breadcrumbs__anchor link link--secondary')[1].innerText;
var productSubCategory = document.getElementsByClassName('pdp__name font-size--20')[0].innerText.split(" ").splice(-1);
var productPrice = document.getElementsByClassName('price--reduced')[0].innerText;

console.log('source script ran');

var storArray = {
    src_productBrand: productBrand,
    src_productName: productName,
    src_productDescription: productDescription,
    src_productCategory: productCategory,
    src_productSubCategory: productSubCategory,
    src_productPrice: productPrice
    };

chrome.storage.local.set({
        'newStorage': storArray
        });