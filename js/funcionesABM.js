function BorrarCD(idParametro)//editado
{
	
	$.ajax({
		url:"nexo.php",
		type:"post",
		data:{
			queHacer:"BorrarCD",
			id:idParametro
			}	
		})
	.then(function exito(retorno){
		Mostrar("MostrarGrilla");
		$("#informe").html("cantidad de eliminados "+ retorno);	
	},function error(retorno){
		$("#informe").html(retorno.responseText);
	});



	//alert(idParametro);
		/*var funcionAjax=$.ajax({
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
	});	*/
}

function EditarCD(idParametro)//editado
{
	
	$.ajax({
		url:"nexo.php",
		type:"post",
		data:{
			queHacer:"TraerCD",
			id:idParametro	
		}
	}).then(function exito(retorno){
		Mostrar("MostrarFormAlta");
		window.setTimeout(function(){
			var cd =JSON.parse(retorno);	
			$("#idCD").val(cd.id);
			$("#cantante").val(cd.cantante);
			$("#titulo").val(cd.titulo);
			$("#anio").val(cd.año);
			}, 5000);
	},function error(retorno){
		$("#informe").html(retorno.responseText);	
	});



	/*var funcionAjax=$.ajax({
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
	});*/
	
}

function GuardarCD()//editado
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
	
}