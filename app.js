/*JavaScript modelo pra editar a ACCH. Código está incorreto, mas é pra ser usado como base de como usar as funcionalidades do programa no HTML*/


/*PS: Nesta parte fazer um loop com "while" pra aumentar um contador pra varrer um Array com um outro Array guardando os dados */

var contador = 0;





document.getElementById("btn_save").addEventListener("click", function() {
    contador++,
    dadosDoUsuario = {
        idade: document.getElementById("idade").value,
        sexo: document.getElementById("btn_save").onClick = function () {
                var i = 0,    
                    radios = document.getElementsByName("sexo");
                
                for (i = 0; i < radios.lenght; i++) {
                    if (radios[i].onselect) {
                        String.radios[i];
                        JSON.stringify(radios[i])
                        return radios[i];

                    }
                }
            },
        corDosOlhos: document.getElementById("corOlhos").value,
        corDosCabelos: document.getElementById("corCabelos").value
    };
    
    pessoa = JSON.stringify(dadosDoUsuario);

    localStorage.setItem('Dados', pessoa);

    document.getElementById("ident").innerHTML = "ID: # " + contador;

    cont = JSON.stringify(contador);
    localStorage.setItem("Contador", cont);
});



/*
document.querySelector("btn_save").addEventListener("click", function cont() {
    var num = parseInt(contador.textContent) + 1;
    contador.textContent = num;
});

*/








































// localStorage.setItem('Dados', 'Nome02');

/*
var contador = 0,
    dadosPessoa = [];
    
    document.getElementClassId("btn_save").addEventListener("click", function () {
        dadosPessoa = [{
            idade: document.getElementById("idade").value,
            sexo: document.getElementById("sexo").value,
            cordosolhos: document.getElementById("corOlhos").value,
            cordoscabelos: document.getElementById("corCabelos").value
        }]
        // document.getElementById("ident").innerText = "ID: # 1";
    });
    pessoa = localStorage.setItem('Dados', dadosPessoa); 
    

var pessoa = [];

document.getElementById("btn_save").addEventListener("click", function salvarDados() {
    var dados = {
        idade: document.getElementById("idade").value,
        sexo: document.getElementById("sexo").value,
        cordosolhos: document.getElementById("corOlhos").value,
        cordoscabelos: document.getElementById("corCabelos").value
    }

});
pessoa = localStorage.setItem("Dados Pessoais", dados);

pessoaString = JSON.stringify(pessoa);

if (localStorage.getItem("contador")) {

    contador = Math.trunc(localStorage.getItem("contador"));

    pessoa.id = contador;

    localStorage.setItem(contador, pessoaString);

    contador++;

    localStorage.setItem("contador", contador);

}
})
else {

localStorage.setItem(contador, pessoaString);

contador++;

localStorage.setItem("contador", contador);
}
}

function tabelar() {
if (listado)
return;
listado = true;

var tabela = document.querySelector("tabela"),
linha = document.createElement("tr"),
cabecalhos = ["ID", "Idade", "Sexo", "Cor dos Olhos", "Cor dos Cabelos"],
into = ["idade", "sexo", "cordosolhos", "cordoscabelos"],
i = 0;

tabela.appendChild(linha);

for (i = 0; i < cabecalhos.length; i++) {
campo = document.createElement("th");

campo.innerHTML = cabecalhos[i];

linha.appendChild(campo);
}

contador = 1;

while (localStorage.getItem(contador)) {
var pessoa = localStorage.getItem(contador);

pessoa = JSON.parse(pessoa);

linha = document.createElement("tr");

tabela.append(linha);

var id = document.createElement("td");

id.innerHTML = contador;

linha.appendChild(id);

for (j = 0; j < info.length; j++) {

item = document.createElement("td");

item.innerHTML = pessoa[info[j]];

linha.appendChild(item);

}

contador++;

}
}

var contador = 1,
listado = false;
*/