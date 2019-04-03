var editando; 

$(document).ready(function(){
	$.ajax({
		method: "GET",
		url: "/estudiantes",
		datatype: "JSON",
		success: function(data, status, jqXHR ){
			data.forEach(function(i){
				agregarTabla(i.id, i.nombre, i.apellido, i.codigo, i.edad);
			});
		},
		error: function(jqXHR , status, e){
			console.log(jqXHR);
		}
	});
	
	
  $('#boton').click(function(e){
	  e.preventDefault();
	  let nombre = $('#nombre').val();
	  let apellido = $('#apellido').val();
	  let codigo = $('#codigo').val();
	  let edad = $('#edad').val();
	  if(nombre != '' && apellido != '' && codigo != '' && edad != ''){
		  M.toast({html: 'Inscribiendo...'});
		  // ajax request
		  
		  let estudiante = {
					nombre,
					apellido,
					codigo,
					edad
				};
		  
			$.ajax({
				method: "POST",
				url: "estudiantes/add",
				datatype: "JSON",
				contentType: "application/json",
				data: JSON.stringify(estudiante),
				success: function(data, status, jqXHR ){
					M.toast({html: '¡Inscrito!'});
					agregarTabla(data.id, data.nombre, data.apellido, data.codigo, data.edad);
				},
				error: function(jqXHR , status, e){
					console.log(jqXHR);
				}
			});
	  }
	  
  });
  
  $('#editar').click(function(){
	  let nombre = $('#nombreEdit').val();
	  let apellido = $('#apellidoEdit').val();
	  let codigo = $('#codigoEdit').val();
	  let edad = $('#edadEdit').val();
	  if(nombre != '' && apellido != '' && codigo != '' && edad != ''){
		  // Ajax request
		  M.toast({html: 'Actualizando...'});
		  let estudiante = {
				  	id:editando,
					nombre,
					apellido,
					codigo,
					edad
				};
		  
			$.ajax({
				method: "PUT",
				url: "estudiantes/update",
				datatype: "JSON",
				contentType: "application/json",
				data: JSON.stringify(estudiante),
				success: function(data, status, jqXHR ){
					M.toast({html: '¡Actualizado!'});
					editarTabla(data.id, data.nombre, data.apellido, data.codigo, data.edad);
				},
				error: function(jqXHR , status, e){
					console.log(jqXHR);
				}
			});
	  }
  });
  
  $('select').formSelect();
  $('.modal').modal();

});
 
function editarTabla(id, nombre, apellido, codigo, edad){
	let markup = `<td>${id}</td><td>${nombre}</td><td>${apellido}</td><td>${codigo}</td><td>${edad}</td><td><i id="btn${id}" class="small material-icons modal-trigger btn-editar" href="#modal1">edit</i> <i id="del${id}" class="del red-text small material-icons">delete</i></td>`;
	$("tr[name='"+ id +"']").html(markup);
	$('#btn'+id).click(function(){
		editando = id;
		let tds = $("tr[name='"+ id +"'] > td");
		$('#nombreEdit').val(tds[1].innerHTML);
		$('#apellidoEdit').val(tds[2].innerHTML);
		$('#codigoEdit').val(tds[3].innerHTML);
		$('#edadEdit').val(tds[4].innerHTML);
		M.updateTextFields();
	});
	
	$('#del'+id).click(function(){
		// AJAX Request remove
		M.toast({html: 'Eliminando...'});
		$.ajax({
			method: "DELETE",
			url: "estudiantes/delete",
			data: JSON.stringify(id),
			contentType: "application/json",
			datatype: "JSON",
			success: function(data, status, jqXHR ){
				$("tr[name='"+ id +"']").remove();
				M.toast({html: '¡Eliminado!'});
			},
			error: function(jqXHR , status, e){
				console.log(jqXHR);
			}
		});
	});
}


function agregarTabla(id, nombre, apellido, codigo, edad){
	let markup = `<tr name="${id}"><td>${id}</td><td>${nombre}</td><td>${apellido}</td><td>${codigo}</td><td>${edad}</td><td><i id="btn${id}" class="small material-icons modal-trigger btn-editar" href="#modal1">edit</i> <i id="del${id}" class="del red-text small material-icons">delete</i></td></tr>`;
	$('#tablaEstudiantes tbody').append(markup);
	$('#btn'+id).click(function(){
		editando = id;
		let tds = $("tr[name='"+ id +"'] > td");
		$('#nombreEdit').val(tds[1].innerHTML);
		$('#apellidoEdit').val(tds[2].innerHTML);
		$('#codigoEdit').val(tds[3].innerHTML);
		$('#edadEdit').val(tds[4].innerHTML);
		M.updateTextFields();
	});
	$('#del'+id).click(function(){
		// AJAX Request remove
		M.toast({html: 'Eliminando...'});
		$.ajax({
			method: "DELETE",
			url: "estudiantes/delete",
			data: JSON.stringify(id),
			contentType: "application/json",
			datatype: "JSON",
			success: function(data, status, jqXHR ){
				$("tr[name='"+ id +"']").remove();
				M.toast({html: '¡Eliminado!'});
			},
			error: function(jqXHR , status, e){
				console.log(jqXHR);
			}
		});
	});
}