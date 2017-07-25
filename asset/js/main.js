function Pasajero(nombre,apellido,dni, nPasaje){
	this.nombre = nombre;
	this.apellido = apellido;
	this.dni = dni;
	this.nPasaje = nPasaje;
	this.listar = function(){

	};
	this.reservar = function(){

	};
	this.buscar = function(){

	};

	this.cancelar = function(){

	};
}

function Bus(nAsientos){
	this.asientos = new Array(nAsientos);
	this.celda = undefined;

	this.seleccionar = function(celda){
		this.celda = celda;

		var asiento=(celda.textContent);
	    var mostrar=document.getElementById("mostrar");
	    mostrar.innerHTML= "<br>" + "Numero de Asiento" + asiento;

	    var info=document.getElementById("mostrar").textContent;
		var num = parseInt (info);
	    var obj = this.asientos[num - 1] ;

	    if (obj != undefined ) {
			document.getElementById("name").value = obj.nombre;
			document.getElementById("last_name").value=  obj.apellido;
			document.getElementById("dni").value=  obj.dni;
	    }
	};
	this.listar = function(){
		var lista = "";
  		for (var i = 1; i <= this.asientos.length; i++) {
    	if (this.asientos[i-1]!= undefined) {
      	var lugar = "<h3>Asiento: </h3>"+i+"<br>";
      	var nombre = "<h3>Nombres: </h3>" + this.asientos[i-1].nombre + "<br>";
	    var apellido = "<h3>Apellidos: </h3>" + this.asientos[i-1].apellido + "<br>";
	    var dni = "<h3>DNI: </h3>" + this.asientos[i-1].dni + "<br>";
	    lista += lugar+ nombre + apellido+ dni;
	    	}
  		}
  		document.getElementById("listar").innerHTML=lista;
	};
	this.reservar = function(){
		var info=document.getElementById("mostrar").textContent;
		var nombre=document.getElementById("name").value;
		var apellido=document.getElementById("last_name").value;
		var dni=document.getElementById("dni").value;
		var guardar=document.getElementById("listar");
	 	
	 	var num = parseInt (info);
	    this.asientos[num - 1] =  new Pasajero (nombre, apellido, dni, num); 

		guardar.innerHTML= "<center><div><h3>ASIENTOS RESERVADOS</h3><p>"+info+"</p><p>Nombre: "+nombre+"</p></div><p>Apellido :"+apellido+"</p><p>Dni :"+dni+"</p></center>";
		console.log(this.asientos);
	    this.celda.style.backgroundColor =  '#5ccc0c';

		document.getElementById("name").value = "";
		document.getElementById("last_name").value= "";
		document.getElementById("dni").value= "";

	};
	this.buscar = function(){

	};

	this.cancelar = function(){

	};
 
}

var bus = new Bus (32);

var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',function (event) {
    	var celda = event.target;
    	bus.seleccionar (celda);	
    }); 
}

var reservarBtn = document.getElementById ("reservar");
reservarBtn.onclick = function () {
	bus.reservar ();
}
var listarBtn = document.getElementById ("listar1");
listarBtn.onclick = function () {
	bus.listar ();
}