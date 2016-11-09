function addList(){
	var hide_text = document.getElementById("hide-text");
	hide_text.style.display = "none";

	var show_input = document.getElementById("input-list");
	show_input.style.display = "block";

	//Agregar botón Guardar
	var container_button = document.getElementById("add-list");
	var save_button = document.createElement("button");
	var save_text = document.createTextNode("Guardar");
	save_button.className = "save_btn";

	//Agregar ícono Eliminar
	var delete_button = document.createElement("span");
	var delete_icon = document.createElement("i");
	delete_icon.classList.add("fa", "fa-times");
	delete_button.className = "delete_btn";

	save_button.appendChild(save_text);
	container_button.appendChild(save_button);
	delete_button.appendChild(delete_icon);
	container_button.appendChild(delete_button);
	container_button.style.display =  "inline-block";
	container_button.style.position = "relative";
	container_button.style.cssFloat = "left";

	//Se deja en blanco el input una vez que se añada la tarea
	document.getElementById("input-list").value = "";	

	//funcionalidad del ícono Eliminar. Que sea una función que se llame cuando se presiona el ícono delete
	var delete_element = document.getElementsByClassName("delete_btn");
	for(var i= 0; i < delete_element.length; i++){
		delete_element[i].onclick = function(){
			var trash = this.parentElement;
			trash.style.display = "none";
		}
	}

	//Cuando se aprieta el botón guardar, se genera un nuevo div/botón que contiene
	//Generar nuevo botón que irá a la izquierda
	var container_button_left = document.createElement("button");
	//Traer el input con el value que se ingresó anteriormente
	var input_text = document.getElementsByTagName("input")[0].value;
	var input_text_node = document.createTextNode(input_text);

	//botón "Añadir lista"
	var input_button = document.createElement("button");
	var input_button_text = document.createTextNode("Añadir lista");

	save_button.addEventListener("click", function(){

		var list = document.getElementsByTagName("div")[5];
		
		container_button_left.insertBefore(input_text_node, container_button_left.childNodes[0]);
		container_button_left.appendChild(input_button);
		input_button.appendChild(input_button_text);
		input_button.style.display = "block";
		container_button_left.style.margin = "0% 2%";
		container_button_left.className= "button-left";
		input_button.className= "add-list-button";

		list.appendChild(container_button_left);
		//agregamos la propiedad para que se vaya al izquierda de la página
		list.style.display= "inline-block";
		list.style.position = "relative";
		list.style.cssFloat= "left";

	})

	//cuando se hace click en input
	/*input_text.addEventListener("click", function(){

		
	})*/

	//cuando se hace click en "Añadir tarjeta"
	//Crear textarea para escribir la lista
		var textarea = document.createElement("textarea");
		textarea.style.display = "block";
		//Botón de Añadir + ícono eliminar
		var new_add_button = document.createElement("button");
		var new_text_button = document.createTextNode("Añadir");
		var new_delete_button = document.createElement("span");
		var new_delete_icon = document.createElement("i");
		new_delete_icon.classList.add("fa", "fa-times");
		new_delete_button.className = "delete_btn";
		new_add_button.className= "new-add-button";		

	input_button.addEventListener("click", function(){
		//esconder input_button
		input_button.style.display = "none";

		new_add_button.appendChild(new_text_button);
		container_button.appendChild(new_add_button);
		new_delete_button.appendChild(new_delete_icon);

		container_button_left.appendChild(textarea);
		container_button_left.appendChild(new_add_button);
		container_button_left.appendChild(new_delete_button);
	})

	//Agregar texto ingresado en textarea cuando se presiona el botón Añadir (new-add-button)
	new_add_button.addEventListener("click", function(){
		var textarea_text = document.getElementsByTagName("textarea")[0].value;
		var textarea_text_node = document.createTextNode(textarea_text);

		container_button_left.insertBefore(textarea_text_node, container_button_left.childNodes[0]);
	})
	//Se deja en blanco el textarea una vez que se añade la lista tarea
	document.getElementsByTagName("textarea").value = "";
}