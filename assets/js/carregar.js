window.addEventListener("load", () => {
    let dadosCadastro = JSON.parse(localStorage.getItem("dadosCadastro")) || []

    dadosCadastro.forEach(cadastro => criarCard(cadastro))
})

function criarCard (cadastro){
    const card = document.createElement("div")

    card.innerHTML = `       <div class="logo">
    <h1>SweetBackery</h1>
</div>

<p>Preencha os campos para cadastro:</p>
<form id="form-cadastro">
    <label for="nomeProduto">Digite o nome do produto:</label>
    <input type="text" id="nomeProduto" name="nomeProduto">

    <label for="valorProduto">Digite o valor do produto:</label>
    <input type="text" id="valorProduto" name="valorProduto">

    <button type="button" id="btnCadastrar"> Cadastrar produto</button>
</form>

<div id="resultado"></div>`
}