// functions

function DormirEreload(Miliseconds) {
    var retorno = setTimeout(document.location.reload, Miliseconds);
    return retorno;
}

var getFormRecebimento = document.querySelector('.form-recebimento');

function CriarItens() {
    //Variáveis para criação do input
    var elemento_pai = document.querySelector('.form-itens');
    var elemento_filho_input = document.createElement('input');
    //Variáveis para criação do label + texto dentro deste.
    var getTxt = document.querySelector('#item-a').value;
    var elemento_filho_label = document.createElement('label');
    var texto = document.createTextNode(getTxt);
        
        function CriarInput() {
            elemento_filho_input.setAttribute('type', 'checkbox');
            elemento_pai.insertAdjacentElement('afterend', elemento_filho_input);
        }
        function CriarLabel() {
            elemento_filho_label.setAttribute('for', 'Tarefa');
            elemento_filho_label.appendChild(texto);
            elemento_pai.insertAdjacentElement('afterend', elemento_filho_label);
        }
        
        if (getTxt == false) {
            getFormRecebimento.innerHTML = 'APERTE F5 E INSIRA ALGUM ITEM.';
            return DormirEreload(2000);
        } else {
            CriarInput();
            CriarLabel();
        }
}
