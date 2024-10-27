
const animales = ["león", "tigre", "elefante"];

// at() - Accede al elemento en la posición indicada
console.log(animales.at(2)); // "elefante"

// concat() - Combina dos o más arreglos
const masAnimales = animales.concat(["jirafa", "rinoceronte"]);
console.log(masAnimales); // ["león", "tigre", "elefante", "jirafa", "rinoceronte"]

// copyWithin() - Copia elementos dentro del mismo arreglo
animales.copyWithin(0, 2);
console.log(animales); // ["elefante", "tigre", "elefante"]

// entries() - Devuelve un iterable con pares índice-valor
for (const [index, animal] of animales.entries()) {
    console.log(${index}, ${animal});
}

// every() - Verifica si todos los elementos cumplen una condición
console.log(animales.every(animal => animal.length > 3)); // true

// fill() - Llena el arreglo con un valor estático
animales.fill("oso", 1, 3);
console.log(animales); // ["elefante", "oso", "oso"]

// filter() - Filtra los elementos que cumplen una condición
const grandes = animales.filter(animal => animal.includes("e"));
console.log(grandes); // ["elefante"]

// find() - Devuelve el primer elemento que cumple la condición
const grande = animales.find(animal => animal.length > 4);
console.log(grande); // "elefante"

// findIndex() - Devuelve el índice del primer elemento que cumple la condición
const indexElefante = animales.findIndex(animal => animal === "elefante");
console.log(indexElefante); // 0

// flat() - Aplana un arreglo de varios niveles
const animalesAnidados = [["tiburón"], ["ballena", ["delfín"]]];
console.log(animalesAnidados.flat(2)); // ["tiburón", "ballena", "delfín"]

// flatMap() - Mapea y aplana los resultados
const palabras = animales.flatMap(animal => animal.split(""));
console.log(palabras); // ["e", "l", "e", "f", "a", "n", "t", "e", "o", "s", "o"]

// forEach() - Ejecuta una función en cada elemento
animales.forEach(animal => console.log(animal)); // "elefante", "oso", "oso"

// includes() - Comprueba si el arreglo contiene un valor
console.log(animales.includes("oso")); // true

// indexOf() - Devuelve el índice del primer elemento que coincide
console.log(animales.indexOf("oso")); // 1

// join() - Convierte el arreglo a una cadena
console.log(animales.join(" - ")); // "elefante - oso - oso"

// keys() - Devuelve un iterable de claves
for (const key of animales.keys()) {
    console.log(key); // 0, 1, 2
}

// lastIndexOf() - Encuentra el índice de la última coincidencia
console.log(animales.lastIndexOf("oso")); // 2

// length - Devuelve el número de elementos
console.log(animales.length); // 3

// map() - Aplica una función a cada elemento y devuelve un nuevo arreglo
const mayusculas = animales.map(animal => animal.toUpperCase());
console.log(mayusculas); // ["ELEFANTE", "OSO", "OSO"]

// pop() - Elimina el último elemento del arreglo
const ultimo = animales.pop();
console.log(ultimo); // "oso"
console.log(animales); // ["elefante", "oso"]

// push() - Añade un nuevo elemento al final del arreglo
animales.push("cocodrilo");
console.log(animales); // ["elefante", "oso", "cocodrilo"]

// reduce() - Reduce los elementos del arreglo a un solo valor
const totalLetras = animales.reduce((acc, animal) => acc + animal.length, 0);
console.log(totalLetras); // 21

// reduceRight() - Igual que reduce(), pero empieza desde el final
const combinado = animales.reduceRight((acc, animal) => acc + animal, "");
console.log(combinado); // "cocodriloosoelefante"

// reverse() - Invierte el orden de los elementos
animales.reverse();
console.log(animales); // ["cocodrilo", "oso", "elefante"]

// shift() - Elimina el primer elemento del arreglo
const primero = animales.shift();
console.log(primero); // "cocodrilo"
console.log(animales); // ["oso", "elefante"]

// slice() - Crea un nuevo arreglo con una porción del original
const parte = animales.slice(0, 1);
console.log(parte); // ["oso"]

// some() - Verifica si al menos un elemento cumple una condición
console.log(animales.some(animal => animal.length > 3)); // true

// sort() - Ordena los elementos del arreglo
animales.sort();
console.log(animales); // ["elefante", "oso"]

// splice() - Añade, elimina o reemplaza elementos en el arreglo
animales.splice(1, 1, "águila");
console.log(animales); // ["elefante", "águila"]

// toLocaleString() - Convierte el arreglo a una cadena de acuerdo al idioma
console.log(animales.toLocaleString()); // "elefante,águila"

// toString() - Convierte el arreglo a una cadena
console.log(animales.toString()); // "elefante,águila"

// unshift() - Añade elementos al inicio del arreglo
animales.unshift("leopardo");
console.log(animales); // ["leopardo", "elefante", "águila"]

// values() - Devuelve un iterable con los valores del arreglo
for (const value of animales.values()) {
    console.log(value); // "leopardo", "elefante", "águila"
}