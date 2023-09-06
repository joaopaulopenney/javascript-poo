function fnCapitalizarNovo(colecao, atributo) {
    if (typeof colecao[0] == 'object') {
        var resultado = colecao.map(function(obj) {
            var letraInicial = obj[atributo].charAt(0).toUpperCase();
            var restoTexto = obj[atributo].slice(1);

            obj[atributo] = letraInicial + restoTexto;

            return obj;
        });

        console.log(resultado)
    } else {
        var resultado = colecao.map(function(pos) {
            var letraInicial = pos.charAt(0).toUpperCase();
            var restoTexto = pos.slice(1);
            var pos = letraInicial + restoTexto;

            return pos;
        })

        console.log(resultado)
    }
}

function fnCapitalizar(vetor) {
    var modificado = [];

    for (var i = 0; i < vetor.length; i++) {
        var letraInicial = vetor[i].charAt(0).toUpperCase();
        var restoTexto = vetor[i].slice(1);
        var resultado = letraInicial + restoTexto;
    
        modificado[i] = resultado;
    }

    return modificado;
}

function fnOrdenar(vetor) {
    return vetor.sort(function(a, b) {
        return a.localeCompare(b);
    });
}

function fnCaixaAlta(vetor) {
    var modificado = [];

    for (var i = 0; i < vetor.length; i++) {
        modificado[i] = vetor[i].toUpperCase();
    }

    return modificado;
}

export default {
    capitalizar: fnCapitalizar,
    capitalizarNovo: fnCapitalizarNovo,
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta
};
