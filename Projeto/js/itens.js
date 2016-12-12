var removeItem = function(event){
	event.preventDefault();

	var self = $(this);
	self.closest("tr").hide();

	atualizaDados()
};

var atualizaDados = function(){
	var carrinhos =$(".carrinho");
	carrinhos.each(function(){
				var carrinho =$(this);
				var itens = carrinho.find(".item-total:visible");
				var total = 0;
					for(var i = 0; i < itens.length ; i++){
							var item = $(itens[i]);
							var valor = parseFloat(item.text());
							total = total + valor;
						}
						console.log("Valor total é: " + total);
						carrinho.find(".valor-total").text(total);
						carrinho.find(".quantidade-de-itens").text(itens.length);
			});
}

var undo= function(){
	var carrinho = $(this).closest(".carrinho");
	carrinho.find("tr:visible").removeClass("recuperado");

	var trs = carrinho.find("tr:hidden");
	trs.addClass("recuperado").show();
	atualizaDados();
}

var umaPropaganda = function(){
	var propagandas = [
		"O que acha de comprar uma motocicleta?",
		"O que acha de comprar uma bicicleta?",
		"O que acha de comprar uma Nave espacial?",
		"O que acha de comprar um satelite?"
	];
	var posicao = Math.floor(propagandas.length * Math.random());
	var texto = propagandas[posicao];
	var tr = $("<tr>").addClass("propaganda").append($("<td>"));
	tr.find("td").attr("colspan",6).text(texto);
	return tr;
}
var destaque = function() {
	$(this).find(".remove-item").fadeIn();
	$(this).addClass("hovering");
}
var tiraDestaque = function(){
	$(this).find(".remove-item").fadeOut();
	$(this).removeClass("hovering");

}
var alternaPropagandas = function(event){
	event.preventDefault();
	$(".propaganda").fadeToggle(1000);
	$(".alterna-propaganda").toggle();
}

var aposInicializado = function(){
	atualizaDados();
	$(".undo").click(undo);
	$(".remove-item").click(removeItem);
	$(".carrinho").each(function(){
		$(this).find("tr:nth-child(3n),tr:last").each(function(){
			umaPropaganda().insertAfter($(this));
		})
	})
$(".carrinho tbody tr").hover(destaque,tiraDestaque);
$(".alterna-propaganda").click(alternaPropagandas);
	//$("tr").on("mouseenter",destaque);
	//$("tr").on("mouseleave",tiraDestaque)
	//	$("tr").hover(destaque, tiraDestaque);



	};
$(aposInicializado);
