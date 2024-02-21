//Ordenamiento 
//1.- Crea una función que ordene de forma descendente un arreglo de números.
//Entrada -> [9,3,1,6,5,88,-1,2,7]
//Salida -> [88,9,7,6,5,3,1,-1]

const numerosOrdenados = (arreglo) =>{
    return {
        descendentes: [...arreglo].sort((a,b)=>b-a),
    }
}

console.log(numerosOrdenados([9,3,1,6,5,88,-1,2,7]));


//2.- Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com/.
//Entrada -> [‘b’,‘h’,‘w’,‘e’,‘a’]
//Salida -> [‘a’,‘b’,‘e’,‘h’,‘w’]

var a = ["b", "h", "w", "e", "a"];
var m = a.sort();
console.log(m);




//3.- Crear una clase Alumno con los siguientes datos:
//Nombre y calificaciones(arreglo de 5 números) y tiene un método para obtener el promedio.
//Crear otra clase llamada Salon que tenga un método que ordene alumnos de mayor a menor promedio.

function ordenarPorSeleccion(arreglo) {
    const longitud = arreglo.length;
    let movimientos = 0;

    for (let i = 0; i < longitud - 1; i++) {
        let indiceMinimo = i;

        // Encontrar el índice del elemento más pequeño de la lista
        for (let j = i + 1; j < longitud; j++) {
            movimientos++;
            if (arreglo[j] < arreglo[indiceMinimo]) {
                indiceMinimo = j;
            }
        }

        // Intercambiar el elemento más pequeño con la primera posición
        [arreglo[i], arreglo[indiceMinimo]] = [arreglo[indiceMinimo], arreglo[i]];
    }

    return { arreglo, movimientos };
}

function main() {
    const estudiantes = [];

    // Recopilar la informacion 
    while(true){
        const nombre = prompt("Ingrese el nombre del estudiante (o escriba finalizar para terminar)");
        if (nombre.toLowerCase() === "fin"){
            break;
        }

        const calif = parseFloat(prompt("Ingrese la calificacion de " + nombre));
        estudiantes.push({nombre,calif });
    }


        // Ordenar los estudiantes por calificacion 
        const resultadoDeSeleccion = ordenarPorSeleccion([...estudiantes]); 

        // Mostrar resultados 
        console.log("Estudiantes ordedados por calificacion Metodo de Seleccion:", resultadoDeSeleccion.arreglo);
    console.log("Movimientos realizados por Metodo de Selecion:", resultadoDeSeleccion.movimientos);

}
main();


//4.- Crear una funcion que ordene palabras de menor numero de letras a mayor.
//Entrada -> [“adios”,“hola”,“maximo”,“uno”,“despedida”]
//Salida -> [“uno”,“hola”,“adios”,“maximo”,“despedida”]

var palabras = ["adios","hola","maximo","uno","despedida"];
palabras.sort(function(a,b){
    return a.length - b.length;
});
console.log(palabras);

//5.- Crear una función que ordene un arreglo de coordenadas x, y desde a partir del punto mas cercano a 0,0.
//Entrada -> [[7,3],[2,2],[1,0],[4,3]]
//Salida -> [[1,0],[2,2],[4,3],[7,3]]

function distancia(p){
    return Math.sqrt(p.x * p.x + p.y * p.y);
}

function comparar(a,b){
    return distancia(a) - distancia(b);
}

var puntos = [
    {x:7, y:3},
    {x:2, y:2},
    {x:1, y:0},
    {x:4, y:3},
];

puntos.sort(comparar);

console.log(puntos);
