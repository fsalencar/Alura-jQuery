var removeItem = function(event){
	event.preventDefault();

	var self = $(this);
	self.closest("tr").hide();

	atualizaDados()
};

var atualizaDados = function(){
	var itens = $(".item-total:visible");
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

var undo= function(){
	$("tr:visible").removeClass("recuperado");
	var trs = $("tr:hidden");
	trs.addClass("recuperado");
	trs.show();
}

var aposInicializado = function(){
	atualizaDados();
	$("#undo").click(undo);
	$(".remove-item").click(removeItem);
	};
$(aposInicializado);
