//operadores aritmeticos 
console.log(5+10)
let a = 1
let b = 5
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)

console.log(a**b)//exponente 
console.log(a%b)//modulo

a++//incremento
console.log(a)

b-- //decremento
console.log(b)

//operador de asignacion 

let myVariable = 2
console.log (myVariable)

myVariable += 2
console.log(myVariable)
myVariable += 2
myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

//operadores de comparacion
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b) //igualdad
console.log (a == 2)
console.log (a == a)
console.log (a === a) //a nivel de identidad 
console.log (a === 2) 
console.log (a === "2")
console.log (a)

console.log (a != b) //desigualdad

//trthy values (valores verdaderos)
//todos los numeros positivos y negativos menos el 0
//las cadenas de texto no vacias
//todos los boleanos true

// opñeradores logicos para compara valores, compárar valor boleano

//and &&
console.log(5 > 10 && 15>20) //todo verdadero = verdader
console.log(5 < 10 && 15<20) // todo falso = falso
console.log(5 < 10 && 15>20) //verdadero y falso = falso

//or 
console.log(5 > 10 	|| 15>20)
console.log(5 < 10 	|| 15<20) //todo verdadero = verdadero
console.log(5 < 10 	|| 15>20)// Ssolo se necesita un verdadero para que sea verdadero

//not !
onsole.log(!(5 > 10 && 15>20))
console.log(!(5 < 10 || 15<20)) //todo verdadero = falso
//operadores ternarios 
const isRaining = false

isRaining ? console.log ("Esta lloviendo" ) : console.log ("No esta lloviendo")