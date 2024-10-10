



calcularMedia = (valor1, valor2) => (valor1+valor2)/2 ;


function teste() {
 
let nome = prompt("Informe o nome do aluno:");
let nota1 = prompt("Informe a primeira nota do aluno:");
let nota2 = prompt("Informe a segunda nota do aluno:");
   
media = calcularMedia(Number(nota1), Number(nota2));

alert(`O aluno ${nome} teve média de ${media}`);
if (media>=7) {
    alert("Aprovado!");
} else if (media>=5) {
    alert("Recuperação");
} else {
    alert("Reprovado")
    ;
}
}



// function calcularMedia (valor1, valor2) {
//     let resultado = (valor1+valor2)/2;
//     return resultado;
// }

