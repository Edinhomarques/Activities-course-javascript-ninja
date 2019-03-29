/*
Envolva todo o código desse desafio em uma IIFE.
*/
(function() {
    /*
    Crie um array e mostre no console a representação em String desse array,
    usando o método visto na aula 13.
    */
    var arr = [1, 2, 3];
    console.log( 'O array em formato de string é: ' + arr.toString() );
    // ?

    /*
    Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
    Cada array deve conter os estados dessa região.
    */
    var south = ['Rio Grande do Sul', 'Parana', 'Santa Catarina'], 
        southeast = ['São Paulo', 'Minas Gerais', 'Rio de Janeiro', 'Espirito Santo'];
    
    /*
    Crie uma variável chamada `brasil`, que irá receber as duas regiões
    concatenadas. Mostre o `brasil` no console.
    */
    var brazil = southeast.concat(south);

    console.log( '\nAlguns Estados do Brasil:');
    console.log(brazil);

    /*
    Adicione 3 novos estados da região Norte no início do array e mostre no console.
    */
   brazil.unshift('Amazonas', 'Roraima', 'Para')
    console.log( '\nMais estados adicionados:' );
    console.log(brazil)

    /*
    Remova o primeiro estado do array `brasil` e mostre-o no console.
    */
   var removeFirst = brazil.shift();
    console.log( '\nEstado removido:');
    console.log(removeFirst)

    /*
    Crie um novo array chamado `newSul`, que receba somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
    */
    var newSouth = [];

    newSouth = brazil.slice(6);

    /*
    Mostre no console os estados que estão em `newSul`.
    */
    console.log( '\nEstados do Sul do Brasil:');
    console.log(newSouth);

    /*
    Mostre no console todos os estados que estão em `brasil`.
    */
    console.log( '\nAlguns Estados do Brasil:');
    console.log(brazil);

    /*
    Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
    */
    var northeast = ['Rio Grande do Norte', 'Pernambuco', 'Alagoas', 'Sergipe', 'Bahia', 'Maranhão','Piaui', 'Ceara', 'Paraiba'];

    /*
    Mostre no console os estados do nordeste.
    */
    console.log( '\nEstados do Nordeste:');
    console.log(northeast)

    /*
    Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
    chamada `newSudeste`.
    */
   var newSoutheast = [];
   newSoutheast = brazil.splice(2, 4);
 

    /*
    Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado.
    */
    // ?
    brazil = brazil.concat(northeast);

    /*
    Mostre no console os estados em `newSudeste`.
    */
    console.log( '\nEstados em newSudeste:');
    console.log(newSoutheast);

    /*
    Mostre no console os estados do `brasil`.
    */
    console.log( '\nAlguns estados do Brasil:');
    console.log(brazil);

    /*
    usando forEach, percorra o array `brasil` e gere um novo array chamado
    `newBrasil`. Esse array deve ter cada item como um objeto, com as
    propriedades:
    - `id`: que será o índice do array `brasil`,
    - `estado`: que será o estado do array `brasil`.
    */
    var newBrazil = []
    brazil.forEach( function(item, index){
        //console.log('['+index +'] -> '+ item);
        newBrazil.push({
            id: index,
            state: item
        });
    });
    

    /*
    Mostre o array `newBrasil` no console
    */
    console.log( '\nnewBrasil:' );
    console.log(newBrazil);

    /*
    Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
    atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
    - "Sim, todos os estados tem mais de 7 letras!"
    Senão, mostre no console:
    - "Nem todos os estados tem mais de 7 letras!"
    */
    console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
    var moreSeven = brazil.every( function(item){
        return item.length > 7;
    });
    moreSeven ? console.log('Yes, every states have more than seven letters') : console.log(`Not all states have more than seven letters`);
    /*
    Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma variável. Se esse estado existir no array, mostrar a frase no
    console:
    - "Ceará está incluído!"
    Senão, mostrar a frase:
    - "Ceará não foi incluído :("
    */
    var cearaIncluded = brazil.some( function( item ) {
        return item === 'Ceara';
    });
   
    console.log( '\nCeará está incluído em `brasil`?' );
    cearaIncluded ? console.log('Ceara is included') : console.log(`Ceara isn't' included`);

    /*
    Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "[ESTADO] pertence ao Brasil."
    Atribua o novo array a uma variável chamada `map`.
    */
    var map = newBrazil.map(function(item){
            return {
                    id:(item.id + 1),
                    state: (item.state + ' allow of Brazil')
                };
    });

    /*
    Mostre no console o array criado acima:
    */
    console.log( '\nnewBrasil agora com mais informações:' );
    console.log(map);

    /*
    Filtre o array criado acima, retornando somente os estados que tiverem
    ID par. Atribua o valor à uma variável chamada `filter`.
    */
    var filter = map.filter(function(item){
        return item.id % 2 === 0;
    });

    /*
    Mostre o array filtrado acima no console.
    */
    console.log( '\nEstados com ID par:' );
    console.log(filter);
})();