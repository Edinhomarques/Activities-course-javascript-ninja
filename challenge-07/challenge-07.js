/*
Crie um array com 5 items (tipos variados).
*/
var arr = [1, 2, 3, 4, 5];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(arg){
    arr.push(arg);
    return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem( ['Corn', 'Butter', 'Salt'] );

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('The second element of array is ' +arr[5][1])

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('The array created has ' + arr.length + ' items');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('The array created has ' + arr[5].length + ' items');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var x = 10;
while( x <= 20 ) {
    if( x % 2 === 0 ) {
        console.log( x );
    }
    x++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var y = 10;
while( y <= 20 ) {
    if( y % 2 !== 0 ) {
        console.log( y );
    }
    y++;
}
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
for( var i = 100; i <= 120 ; i++ ) {
    if( i % 2 === 0 ) {
        console.log(i);
    }
}
console.log('\n')
for( var i = 111; i <= 125 ; i++ ) {
    if( i % 2 !== 0 ) {
        console.log(i);
    }
}
