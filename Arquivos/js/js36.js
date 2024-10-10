class Conta {
    agencia;
    numeroConta;
    saldo;
    cadastrar(agencia, numeroConta) {
        this.agencia = agencia;
        this.numeroConta = numeroConta;
        this.saldo = 0;
        sessionStorage.setItem("agencia", this.agencia);
        sessionStorage.setItem("numeroConta", this.numeroConta);
        sessionStorage.setItem("saldo", this.saldo);
    }
    obterDados() {
        this.agencia = Number(sessionStorage.getItem("agencia"));
        this.numeroConta = Number( sessionStorage.getItem("numeroConta"));
        this.saldo = Number(sessionStorage.getItem("saldo"));
    }
    depositar(valor) {
        this.obterDados();
        this.saldo = this.saldo + valor;
        sessionStorage.setItem("saldo", this.saldo);
    }
    sacar(valor) {
        this.obterDados();
        let novoSaldo = this.saldo - valor;
        if (novoSaldo < 0) {
            return false;
        }
        this.saldo = novoSaldo;
        sessionStorage.setItem("saldo", this.saldo);
        return true;
    }
}