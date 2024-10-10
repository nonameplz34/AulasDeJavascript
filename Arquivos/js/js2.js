function exibirValorA() {
    alert("O valor da variável a é " + a + " e seu tipo é " + typeof a);
}
function alterarValorA() {
    var a = "João"; // Redeclaração no escopo de função
    alert("Valor da variável a foi alterado localmente para " + a);
}
function exibirValorB() {
    alert("O valor da variável b é " + b + " e seu tipo é " + typeof b);
}
function alterarValorB() {
	b = 30; // Alteração do valor no escopo global
    alert("Valor da variável b foi alterado globalmente para " + b);
}
function exibirValorC() {
    alert("O valor da variável c é " + c + " e seu tipo é " + typeof c);
}
function alterarValorC() {
	const c = 10; // Redeclaração no escopo de função
    alert("Valor da variável c foi alterado localmente para " + c);
}