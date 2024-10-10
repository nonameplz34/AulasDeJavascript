class Mensagem {
    constructor(titulo, assunto, categoria, email) {
        this.titulo = titulo;
        this.assunto = assunto;
        this.categoria = categoria;
        this.email = Boolean(email);
    }
    salvarMensagem(mensagem) {
        const mensagens = this.lerMensagens(); // ler mensagens do localStorage
        mensagens.push(mensagem); // adiciona mensagem no array mensagens
        localStorage.setItem("mensagens", JSON.stringify(mensagens)); // Converte array em string
    }
    lerMensagens() {
        let mensagens = new Array();
        if (localStorage.hasOwnProperty("mensagens")) { // Verifica se tem mensagens no localStorage
            mensagens = JSON.parse(localStorage.getItem("mensagens")); // Lê as mensagens e converte em array
        } else {
            mensagens = []; // retorna array vazio
        }
        return mensagens;
    }
}
const validarCampos = () => {
    let mensagem,erro;
    mensagem = "";
    erro = false;
    if (document.form1.txtTitulo.value == "") {
        mensagem = "<b>Preencher o campo título<br></b>";
        erro = true;
    }
    if (document.form1.txtAssunto.value == "") {
        mensagem += "<b>Preencher o campo assunto<br></b>";
        erro = true;
    }
    if (document.form1.selCategoria.value == "") {
        mensagem += "<b>Selecionar o campo categoria<br></b>";
        erro = true;
    }
    document.form1.txtTitulo.focus(); // coloca o foco no campo título
    if (erro) { // se der erro
        document.getElementById('txtMensagem').innerHTML = mensagem;
        return false; // não submete o formulário
    } else {
        return true; // submete o formulário
    }
}
const limparCampos = () => {
    document.form1.txtTitulo.value = "";
    document.form1.txtAssunto.value = "";
    document.form1.selCategoria.value = "";
    document.form1.chkEmail.checked = false;
    document.getElementById("txtMensagem").innerText = "";
    document.form1.txtTitulo.focus();
}

