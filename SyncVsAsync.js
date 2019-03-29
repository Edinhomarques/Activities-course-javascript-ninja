//sincrono e assincrono

(function(){
    'use strict';

    console.log(1);
    console.log(2);
    console.log(3);
    // coomo trabalhar de forma assincrona?
    /**Usando event loop, addEventListener é 
     * uma das formas de usar esse metodo,
     * -- TAMBEM temos os setTimeout(functiona, Tempo), serve como temporizador 
     * primeiro parametro é uma function de callback , e o 
     *  segundo parametro é o tempo em milesegundos para a funcao
     * executar
     *  -- OUTRA forma tbm é o setInterval a unica diferenca 
     * entre ele e o setTimeout é que ele não para(executa infinitamente).
     *  
     * recursão  um metodo ou funcao chamar ele próprio 
     * clearTimeout serve para limpar o setTimeout
     * clearInterval serve para limpar o setInterval
     *  */
})();