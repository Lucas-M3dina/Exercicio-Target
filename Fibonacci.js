var n = 5; // Escreva o numero que deseja verificar a existencia na sequencia Fibonacci

var resultado = ` ${n} não pertence a sequencia de Fibonacci`
var loop = 2
var fibonacci = [0, 1];

if (n == 1 || n== 0){
    resultado = `${n} pertence a sequencia de Fibonacci`
} 
else{
    while (fibonacci[loop - 1] <= n){
      fibonacci[loop] = fibonacci[loop - 2] + fibonacci[loop - 1];
      if (fibonacci[loop] == n){
         resultado = `${n} pertence a sequencia de Fibonacci`
         break 
      }
      loop++
    }
}

console.log(resultado)