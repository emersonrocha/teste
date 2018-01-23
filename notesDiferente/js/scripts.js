/** Alterando para aceitar cores e salvar no local storage, verificar a possibilidade de integrar com fire base e criar um login */
/** */

var localNotas = 'minhas-notas';
var notes = [];
if(localStorage.getItem(localNotas)){
    notes = JSON.parse(localStorage.getItem(localNotas));
    updateView(document.getElementById('list_notes'))
}

function updateView(section) {
    var innerHTML = "";
    for (var index = 0; index < notes.length; index++) {  
        innerHTML += '<form class="note" style="background-color: '+ notes[index].color +';' + (notes[index].color == "#000000" ? 'color:#ffffff;' : '' ) + 
            '" ondblclick="editarNota('+index+')">' +
            '<button class="note__control" type="button" onclick="onRemoveClick(this.form.parentElement, ' + index + ')">' +
            '<i class="fa fa-times" aria-hidden="true"></i>' +
            '</button>' +
            '<h1 class="note__title">' + notes[index].title + '</h1>' +
            '<p class="note__body">' + notes[index].body + '</p>' +
            '</form>';
    }
    section.innerHTML = innerHTML;
    localStorage.setItem(localNotas, JSON.stringify(notes));
}

function onDoneClick(form, section, inputTitle, textAreaBody, color) {
    // criar uma nota    16777215 é branco
    console.log(form, section, inputTitle, textAreaBody, color);
    if(!inputTitle.value){
        alert("Digite um titulo");
        return;
    }
    if(!textAreaBody.value){
        alert("Digite um conteudo!");
        return;
    }
    console.log(parseInt(color.value.replace("#",""),16) == Math.random() * 16777215);
    var auxCor = color.value
    if(parseInt(color.value.replace("#",""),16) == 0){
        console.log(Math.random() * 16777215);
        auxCor = '#' + (parseInt(Math.random() * 16777215)).toString(16);
    }
    console.log(auxCor, color.value);
    var note = {
        color: auxCor,
        title: inputTitle.value,
        body: textAreaBody.value
    };

    // adicionar a nota
    notes.push(note);

    // atualizar a tela
    updateView(section);

    //limpar o formulario
    form.reset();
}

function onRemoveClick(section, index) {
    // remover a nota
    notes.splice(index, 1);

    // atualizar a tela
    updateView(section);
}

function editarNota(index){
    form = document.getElementById("form-note");
    form.title.value = notes[index].title;
    form.body.value = notes[index].body;
    form.color.value = notes[index].color;
    notes.splice(index, 1);   
}