function BorrarCD(idParametro)
{
	//alert(idParametro);
		var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{
			queHacer:"BorrarCD",
			id:idParametro	
		}
	});
	funcionAjax.done(function(retorno){
		Mostrar("MostrarGrilla");
		$("#informe").html("cantidad de eliminados "+ retorno);	
		
	});
	funcionAjax.fail(function(retorno){	
		$("#informe").html(retorno.responseText);	
	});	
}

function EditarCD(idParametro)
{
	var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{
			queHacer:"TraerCD",
			id:idParametro	
		}
	});
	funcionAjax.done(function(retorno){
	
		Mostrar("MostrarFormAlta");
		window.setTimeout(function(){
			var cd =JSON.parse(retorno);	
			$("#idCD").val(cd.id);
			$("#cantante").val(cd.cantante);
			$("#titulo").val(cd.titulo);
			$("#anio").val(cd.año);
		}, 5000);
		
	});
	funcionAjax.fail(function(retorno){	
		$("#informe").html(retorno.responseText);	
	});
	
}

function GuardarCD()
{
	var id=$("#idCD").val();
	var cantante=$("#cantante").val();
	var titulo=$("#titulo").val();
	var anio=$("#anio").val();

	$.ajax({
		url:"nexo.php",
		type:"post",
		data:{
			queHacer:"GuardarCD",
			id:id,
			cantante:cantante,
			titulo:titulo,
			anio:anio	
		}
	})
	.then(function exito(retorno){
		Mostrar("MostrarGrilla");
		$("#informe").html("cantidad de agregados "+ retorno);
	},function error(retorno){
		$("#informe").html(retorno.responseText);	
	});


	/*	var id=$("#idCD").val();
		var cantante=$("#cantante").val();
		var titulo=$("#titulo").val();
		var anio=$("#anio").val();

		var funcionAjax=$.ajax({
		url:"nexo.php",
		type:"post",
		data:{
			queHacer:"GuardarCD",
			id:id,
			cantante:cantante,
			titulo:titulo,
			anio:anio	
		}
	});
	funcionAjax.done(function(retorno){
			Mostrar("MostrarGrilla");
		$("#informe").html("cantidad de agregados "+ retorno);	
		
	});
	funcionAjax.fail(function(retorno){	
		$("#informe").html(retorno.responseText);	
	});*/	
}