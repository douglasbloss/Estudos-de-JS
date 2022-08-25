let num = [5, 8, 4, 7, 9, 2, 1];
console.log(`O vetor compõe ${num}`);
console.log(`O tamanho do vetor é de ${num.length} espaços`);
num.push(6);
console.log(`Mas agora é de ${num.length} espaços`);
console.log(`Agora o vetor compõe ${num}`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
num.sort();
console.log(`Os números organizados ficam assim: ${num}`);
/*
for(let pos=0;pos<num.length;pos++) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
for (let pos in num) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

let posicao = num.indexOf(3);
if (posicao == -1) {
  console.log('Não consta no array');
} else {
  console.log(`O valor está na posição ${posicao}`);
}
