
    var formulario = document.getElementById("form-cadastro");
    var botao = document.getElementById("btnCadastrar");
    var resultadoDiv = document.getElementById("resultado");
    
    botao.addEventListener("click", function() {

        let dadosCadastro = JSON.parse(localStorage.getItem("dadosCadastro")) || []
        

        const cadastro = {
            nProduto: document.querySelector("#nomeProduto").value,
            vproduto: document.querySelector("#valorProduto").value
            
        }

        dadosCadastro.push(cadastro)

        localStorage.setItem("dadosCadastro", JSON.stringify(dadosCadastro))
        
        window.location.href= "index.html"
    });

