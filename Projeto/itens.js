var removeItem = function(event){
	var self = $(this);
	self.closest("tr").remove();

	event.preventDefault();
	var atual = parseInt($("#quantidade-de-itens").text());
	var novaQuantidade = atual - 1;
	$("#quantidade-de-itens").text(novaQuantidade);
};

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
			$(".remove-item").click(removeItem);
	};
$(aposInicializado);
