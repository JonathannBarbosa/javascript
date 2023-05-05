let num = document.querySelector('input#fnum')                  // coloquei o id - no video está input#fnum
let lista = document.querySelector('select#flista')             // tinha colocado a div#flista
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100 ){
    return true
  } else {
    return false
  }
}

function isLista(n, 1){
 i

}


function adicionar(){
  if (isNumero(num.value) && isLista(num.value, valores)){

} else {
  alert('Valor inválido ou ja encontrado na lista')
  }

}
