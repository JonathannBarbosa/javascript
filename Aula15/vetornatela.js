let valores = [1, 3, 9, 7, 4, 6]
valores.sort()
/* maneira incorreta de escrever o código 
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])


for ( let pos=0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores){
  console.log(`O valor de ${pos} tem o valor ${valores[pos]}`)
}