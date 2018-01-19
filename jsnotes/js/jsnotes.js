let contaItem = 0
function incluirItem() {
    contaItem++    
    let item = '<div style="display:inline;width:100%;" id="item-'+contaItem +'"><label for="item__title" class="item__title">ITEM ' + contaItem +
     '</label><input type="text" id="item__text" class="item__text">' +
     '<i class="far fa-minus-square item__minus" onclick=removerItem('+ contaItem +')></i></div>';
    document.getElementById('item').innerHTML += item;
}

function cadastrarSemDom(){

}

function limparCampos(){

}

function cadastrarComDom(){

}

function removerItem(id){
    document.getElementById('item-'+id).remove();
}

function excluirNota(){

}