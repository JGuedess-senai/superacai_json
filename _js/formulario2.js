function json() {
    var obj_form = {
        nome: "",
        idade: "",
        telefone: "",
        endereco: "",
        planeta: "",
        raca: "",
        trabalho: "",
        sabor: "",
        tamanho: "",
        observacao: "",
    }

var el_nome = document.getElementById("name");
obj_form.nome = el_nome.value;

var el_idade = document.getElementById("idade");
obj_form.idade = el_idade.value;

var el_telefone = document.getElementById("telefone");
obj_form.telefone = el_telefone.value;

var el_endereco = document.getElementById("endereco");
obj_form.endereco = el_endereco.value;

var el_planeta = document.getElementById("planeta");
obj_form.planeta = el_planeta.value;

var el_raca = document.getElementById("dados");
obj_form.raca = el_raca.value;

var el_trabalho = document.getElementById("cargo");
obj_form.trabalho = el_trabalho.value;

var el_sabor = document.getElementById("sabor");
obj_form.sabor = el_sabor.value;

var el_tamanho = document.getElementById("tamanho");
obj_form.tamanho = el_tamanho.value;

var el_observacao = document.getElementById("obs");
obj_form.observacao = el_observacao.value;

var json = JSON.stringify(obj_form, null, "");
document.write("<h1>Dados para Json</h1>");
document.write(json);
}