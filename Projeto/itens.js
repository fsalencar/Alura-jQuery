var aposInicializado = function(){
var itens = $(".item-total");
var total = 0;
	for(var i = 0; i < itens.length ; i++){
			var item = $(itens[i]);
			var valor = parseFloat(item.text());
			total = total + valor;
		}
		console.log("Valor total é: " + total);
		$("#valor-total").text(total);
		$("#quantidade-de-itens").text(itens.length);
};
$(aposInicializado);
