// Resolução sem utilizar strings
const num_of_digits = (num, totalDigitos = 0) => {
  // Se o número for 0, a função retornará o inteiro 1
  if(num === 0) return 1
  
  /* Se o número arredondado para baixo (função 'Math.floor') for 0 (ex.: 0,9), a função retornará o valor da variável 'total'.
  Obs.: A função 'Math.abs' é para ter-se o valor absoluto do número, caso ele seja negativo. */
  if (Math.floor(Math.abs(num)) === 0) return totalDigitos
  
  /* Utilização de recursividade: A função é chamada novamente caso as condições anteriores não sejam atendidadas. Ao chamar 
  novamente a função, o número é dividido por 10 (essa é uma forma de contar os dígitos já que um número inteiro divido por 10 
  se torna um dígito (parte inteira) menor!) e é somado mais um à variável totalDigitos (variável que armazena o total de digitos) */
  return num_of_digits(num /= 10, totalDigitos + 1)
}
