var stringUtilizada = 'Lucas Santos Medina de Oliveira';

var stringUtilizadaArray = stringUtilizada.split('')
var StringInvertida = ''

for (let i = stringUtilizadaArray.length - 1; i >= 0 ; i--) {
  StringInvertida += stringUtilizadaArray[i]
}

console.log(StringInvertida)