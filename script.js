async function buscaCEP(cep) {
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.error) {
            throw Error('Cep inválido');
        };

        var endereco = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var cidade = document.getElementById('cidade');
        var estado = document.getElementById('estado');

        endereco.value = consultaCEPConvertida.logradouro;
        bairro.value = consultaCEPConvertida.bairro;
        cidade.value = consultaCEPConvertida.localidade;
        estado.value = consultaCEPConvertida.uf;


        return consultaCEPConvertida;
    } catch (error) {
        console.log(error);
    }
}

const areaCEP = document.getElementById('cep');
areaCEP.addEventListener('focusout', () => buscaCEP(areaCEP.value));