let conteinerLista = document.querySelector("div#conteiner_lista");
let lista = document.querySelector("ul#lista");
let botaoAdicionarTarefa = document.querySelector("button#botao_adicionar_tarefa");
let botaoExcluirTarefa = document.querySelector("button#botao_excluir_tarefa");

botaoAdicionarTarefa.addEventListener("click", adicionarTarefa);
botaoExcluirTarefa.addEventListener("click", excluirTarefa);

function adicionarTarefa() {
    const larguraTela =window.innerWidth;
    let limiteCaracteres = null;
    let tarefa = prompt(`Digite a tarefa que deseja adicionar`);
    let itemLista = document.createElement("li")
    let seletorTarefa = document.createElement("input");
    let textoTarefa = document.createElement("span");


    if (larguraTela < 600) {
        limiteCaracteres = 50;
    } else if (larguraTela > 600 && larguraTela < 1024) {
        limiteCaracteres = 70;
    } else {
        limiteCaracteres = 100;
    }

    if (tarefa.trim() == "") {
        alert("[ERRO] O campo de tarefa não pode estar vazio!")
        return;
    }

    if (tarefa.length > limiteCaracteres) {
        alert(`[ERRO] A tarefa é muito longa para esta tela. | Limite: ${limiteCaracteres} caracteres`)
        return;
    }

    textoTarefa.textContent = tarefa;
    seletorTarefa.setAttribute("type", "checkbox");
    seletorTarefa.style.marginRight = "20px";

    seletorTarefa.addEventListener("change", () => {
        if (seletorTarefa.checked) {
            itemLista.style.color = "lightgray";
            itemLista.style.textDecoration = "line-through";
            itemLista.style.textDecorationColor = "darkgreen";
        } else {
            itemLista.style.color = "black";
            itemLista.style.textDecoration = "none";
        }
    })

    referenciaSeletorTarefa = seletorTarefa

    itemLista.appendChild(seletorTarefa);
    itemLista.appendChild(textoTarefa);
    lista.appendChild(itemLista);
}

function excluirTarefa() {
    let itemLista = [...lista.children];
    let itemAtual = null;
    let checkbox = null

    for (let i = 0; i < itemLista.length; i++) {
        itemAtual = itemLista[i];

        checkbox = itemAtual.querySelector('input[type="checkbox"]')
    }

    if (checkbox.checked) {
        lista.removeChild(itemAtual);
    } else {
        alert("[ERRO] As tarefas adicionadas não foram concluídas")
    }
}