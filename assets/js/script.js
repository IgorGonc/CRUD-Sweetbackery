
    var formulario = document.getElementById("form-cadastro");
    var botao = document.getElementById("btnCadastrar");
    var resultadoDiv = document.getElementById("resultado");
    
    botao.addEventListener("click", function() {

        let dadosCadastro = []

        const cadastro = {
            nProduto: document.querySelector("#nomeProduto").value,
            vproduto: document.querySelector("#valorProduto").value
            
        }
  
        console.log(cadastro)

        dadosCadastro.push(cadastro)

        localStorage.setItem("cadastro", JSON.stringify(cadastro))
    });

