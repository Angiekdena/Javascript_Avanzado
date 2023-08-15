//Resolver los siguientes ejercicios de callbacks (tendrás puntos extra si creas una página con botones desde la cuál ejecutar cada uno
// de los ejercicios para probarlos).

// 1.- Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje como console.warn,
//console.log, console.info, o cualquier método para pintar en consola del objeto console.

document.getElementById("mensaje").addEventListener("click", ejecutar);

function ejercicio1(persona, callback) {
  callback(persona);
}

function ejecutar() {
  ejercicio1(document.getElementById("nombre").value, function (persona) {
    document.getElementById(
      "mensaje"
    ).innerText = `Hola ${persona}, bienvenid@ al mundo!`;
  });
}

// 2.- Crear una función que reciba como argumento una variable de cualquier tipo y un callback. La función debe retornar como resultado,
// mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido. typeof

document.getElementById("mensaje2").addEventListener("click", resultado);

function variable(data, callback) {
  callback(data);
}

function resultado() {
  let select = document.getElementById("seleccion").value;

  if (!isNaN(select)) {
    select = Number(select);
  } else if (select === "True") {
    select = true;
  }

  variable(select, function (data) {
    document.getElementById(
      "mensaje2"
    ).innerText = `El tipo de dato es ${typeof data}`;
  });
}

// 3.- Crear una función que reciba como argumentos, dos números y un callback. Según el callback que se pase a la función, se devuelve
//la suma de los dos números, la resta de los dos números, la multiplicación de los dos números o división.

document.getElementById("mensaje3").addEventListener("click", resultado);

function ejecutarOperacion(numero1, numero2) {
  let select = document.getElementById("opcion").value;

  if (select === "Suma") {
    return numero1 + numero2;
  } else if (select === "Resta") {
    return numero1 - numero2;
  } else if (select === "Multiplicación") {
    return numero1 * numero2;
  } else if (select === "División") {
    return numero1 / numero2;
  }
}

function operacion(numero1, numero2, callback) {
  let resultado = callback(numero1, numero2);
  console.log("llega a resultao", resultado);
  document.getElementById(
    "mensaje3"
  ).innerText = `El resultado de la operacion es ${resultado}`;
}

function resultado() {
  let numero1 = parseInt(document.getElementById("numero1").value);
  let numero2 = parseInt(document.getElementById("numero2").value);

  operacion(numero1, numero2, ejecutarOperacion);
}

// 4. Escribe una función que reciba una cadena de caracteres y debe devolver, mediante un callback, la cadena de caracteres en mayúsculas o en
//minúsculas. ordenSuperior("PejeLagarto", minus); -> pejelagarto ordenSuperior("PejeLagarto", mayus); -> PEJELAGARTO

document.getElementById("mensaje4").addEventListener("click", textoEscrito);

function transformaTexto(texto, callback) {
  let textoConvertido = callback(texto);
  document.getElementById("mensaje4").innerText = `${textoConvertido}`;
}

function cadena(conversion) {
  let select = document.getElementById("tipoLetra").value;

  console.log("el texto es Mayuscula", select);
  if (select === "Mayusculas") {
    return conversion.toUpperCase();
  } else {
    return conversion.toLowerCase();
  }
}

function textoEscrito() {
  let conversion = document.getElementById("texto").value;
  transformaTexto(conversion, cadena);
}

// 5. Hacer un arreglo de 4 cantidades de tiempo (en minutos) EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades mayores a dos horas
//(hacer la comparación en horas) regresar el nuevo array mediante un callback.

document.getElementById("mensaje5").addEventListener("click", nuevoArray);

let array = [];

function comparacion(array, callback) {
  let resultado = callback(array);
  document.getElementById("mensaje5").innerText = `${resultado}`;
}

function nuevoArray() {
  let array = document.getElementById("minutos").value.split(",");
  comparacion(array, function (data) {
    return data.filter((item) => item > 120);
  });
}
