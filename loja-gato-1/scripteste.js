let botao = document.getElementById("botao");
botao.addEventListener("click", function(event){
 event.preventDefault();

let formProduto = document.getElementById("produto").value;
let formPreco = document.getElementById("preco").value;
let formLink = document.getElementById("link").value;

var newProduct = {
    "product":{
        "name": "",
        "images": [
            ""
        ],
        "price": {
            "value": 0
        }}
};
newProduct.product.name = formProduto;
newProduct.product.price.value = formPreco;
newProduct.product.images[0] = formLink;

data.items.push(newProduct);

showProducts();
document.getElementById("myForm").reset();
});