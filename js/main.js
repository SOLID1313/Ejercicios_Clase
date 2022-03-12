//variable es una espacio de memoria donde se almacena la informacion
//declaracion: cuando se pone un espacio en memoria
let nombre;
//asignación: cuando se le asigna un valor al espacio en memoria.
nombre = "Juan"; //tambien se podria hacer en una sola linea junto con la declaracion haciendo let nombre="Juan";

//tipos de datos: boolean, string, number, object, array(listas de datos)
let apellido = "Perez";
let casado = false;

/*en Jscript no hace falta decir que tipo de variable es ya que es un lenguaje no tipado, a diferencia de Java que es un lenguaje tipado.
Tipado o no tipado quiere decir que es necesario, o no, que tipo de dato va a almacenar en memoria*
Que es el tipado dinamico:  */

//los datos viaja a traves de JSON (protocolo de transferencia de hypertexto, texto viajando a traves de un server request) a traves de (JavaScript object notation).

//object: objetos, JSON, Sintaxis: {propiedad: valor, propiedad: valor}
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30;
}

//array: lista de datos en un solo arreglo de Jscript puedo meter variables de diferentes tipos de datos
let lenguajes = ['Javascript', 'PHP', 'Python', 2, true, {nombre: 'Juan', apellido: 'Perez'}];

//tipos de declaracion en Jscript
//const: constante. No se puede cambiar el valor de la variable
//var: variable. Se puede cambiar el valor de la variable, esto es una variable global.
//let: variable. Se puede cambiar el valor de la variable, esto es una variable local. Depende de su contexto. Existe dentro de una estructura de flujo determinada por un bloque de codigo.