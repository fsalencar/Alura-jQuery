var removeItem = function(event){
	event.preventDefault();
	var self = $(this);
	self.closest("tr").remove();


	atualizaDados()

};
var atualizaDados = function(){
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
}
var aposInicializado = function(){
	atualizaDados();
	$(".remove-item").click(removeItem);
	};
$(aposInicializado);
