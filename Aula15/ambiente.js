let num = [5, 2, 3, 9, 1,]
num.push(8)                      // vai add um número no array
                                 // IMPORTANTE SEGUIR AS ORDENS, ISSO INFLUENCIA! 
num.sort()                      // organiza os valores da array 

console.log(`O vetor tem ${num} posições.`)
console.log(`O valor tem ${num.length} posições`)
let pos = num.indexOf(9)
console.log(`O valor ${pos} `)
if ( pos == -1) {
  console.log ( `Valor não encontrado`)

} else {
  console.log(`O valor está na posição ${pos}`)
}
