
function MostrarError()
{
	$.ajax({url:"nexoNoExiste.php"}).then( function(datos){
	alert("primero");
	},function(error){
		console.info("objeto respuesta",error);
		alert("segundo"+error);
		$("#informe").html(error.responseText);	


	});









	/*
	var funcionAjax=$.ajax({url:"nexoNoExiste.php",type:"post",data:{queHacer:"MostrarTexto"}});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");
	});
	funcionAjax.fail(function(retorno){
			$("#principal").html("error :(");
		$("#informe").html(retorno.responseText);		
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);
	});*/

	
}
function MostrarSinParametros()
{//"nexoTexto.php"
	
	$.ajax({url:"nexoTexto.php"}).then(function ok(respuesta){
		//alert(respuesta);
		$("#principal").html(respuesta);

	},function mal(error){
		alert(error);
	});



}

function Mostrar(queMostrar)
{


	$.ajax({ url:"nexo.php",type:"post",data:{queHacer:queMostrar}})
	.then(function(exito){
		console.log(exito,"exito");
		$("#principal").html(exito);
	},function(error){
		console.log(error,"error");
		$("#principal").html(error);

	});



		//alert(queMostrar);
	/*var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:queMostrar}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#principal").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){*/
		//alert("siempre "+retorno.statusText);

	
}

function MostarLogin()
{
		//alert(queMostrar);
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{queHacer:"MostarLogin"}
	});
	funcionAjax.done(function(retorno){
		$("#principal").html(retorno);
		$("#informe").html("Correcto Form login!!!");	
	});
	funcionAjax.fail(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});
	funcionAjax.always(function(retorno){
		//alert("siempre "+retorno.statusText);

	});
}