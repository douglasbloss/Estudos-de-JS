let num = document.querySelector("input#fnum");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#res"); // pode dar problema verificar dps isso
let valores = [];

// Etapas de Validação
function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

// Adicionar os números à lista depois de verificados
function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value));
    // Mostrar no HTML o valor adicionado
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    window.alert("Valor inválido ou já encontrado na lista.");
  }
  num.value = "";
  num.focus();
}

// Esse botão não está funcionando

function limparDados() {
  window.location.reload();
}

function finalizar() {
  if (valores.length == 0) {
    window.alert("Adicione algum número antes de finalizar!");
  } else {
    // Confere a quantidade de números cadastrados
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    // Percorre o array
    for (let pos in valores) {
      // Realiza a soma dos valores
      soma += valores[pos];
      // Verificar o maior e o menor número da lista
      // Alternativamente aqui é possivel sar Math.max(...vetor) e Math.min(...vetor) para o mesmo cálculo
      if (valores[pos] > maior) maior = valores[pos];
      if (valores[pos] < menor) {
        menor = valores[pos];
      }
    }
    // Depois de adicionar todos os valores, calcula a média
    media = soma / tot;
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    res.innerHTML += `<p>A média de todos os valores é de ${media}.</p>`;
  }
}
