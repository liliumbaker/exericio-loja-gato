const botao = document.getElementById("botao");
botao.addEventListener("click", function(event){
 event.preventDefault();

let formProduto = document.getElementById("produto").value;
let formPreco = document.getElementById("preco").value;
let formLink = document.getElementById("link").value;

let newProduct = {
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
newProduct.product.images.push(formLink);
// pode ser a estrutura assim: newProduct["product"]["name"] = 

data.items.push(newProduct);
showProducts();
document.getElementById("myForm").reset();

});
