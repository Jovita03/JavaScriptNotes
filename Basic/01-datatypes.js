//datos primitivos, basicos inmutables, representan un solo valor y no tienen funciones o metodos 
// 7 tipos de datos 

//(string) cadena de texto 
let name = "jess"
let email = "jesscortez@gmail.com"

// (number) numeros 64 bits 
let age = 20 // entero
let height = 1.55 // decimal

// (boolean) booleanos
let isStudent = true // verdadero
let isTeacher = false // falso

//undefined
let undefinedValue // no tiene valor asignado
console.log(undefinedValue)

//null
let nullValue = null // valor nulo

// (symbol) simbolos
let mySymbol = Symbol("my symbol") // simbolo unico

// (bigint) numeros enteros grandes
let myBigInt = BigInt(123456789012345678901234567890) // entero grande
let myBigInt2 = 123456789012345678901234567890n // otra forma de definir un bigint

//mostrar el tipo de dato 
console.log(typeof name) // string
console.log(typeof age) // number       
console.log(typeof isStudent) // boolean
console.log(typeof undefinedValue) // undefined
console.log(typeof nullValue) // object (es un bug de JavaScript)
console.log(typeof mySymbol) // symbol
console.log(typeof myBigInt) // bigint
console.log(typeof myBigInt2) // bigint
