//strings
let myNane = "Jess" //string
let gretting = "Hola, " + myNane  + "!" //concatenar
console.log(gretting) // Imprime el saludo

console.log(typeof myNane) 

//lobgitud
console.log(gretting.length) // imprime la longitud del string

//acceso a caracteres
console.log(gretting[0]) // Imprime el primer caracter
console.log(gretting[10]) 

//metodos comunes 
console.log(gretting.toUpperCase()) // Convierte a mayúsculas
console.log(gretting.toLowerCase()) // Convierte a minúsculas
console.log(gretting.indexOf("jose")) // Verifica si contiene "Jess" y si no lo encuentra devuelve -1
console.log(gretting.includes("Jess")) // Verifica si contiene "Jess" y devuelve true o false
console.log(gretting.includes("Hola"))
console.log(gretting.includes("Cortez"))
console.log(gretting.slice(0, 7)) // Extrae una parte del string desde el índice 0 hasta el 4 (sin incluir el 4)
console.log(gretting.replace("Hola","Que onda "))

//template literals