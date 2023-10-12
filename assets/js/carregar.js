window.addEventListener("load", () => {
    let dadosCadastro = JSON.parse(localStorage.getItem("dadosCadastro")) || []

    dadosCadastro.forEach((cadastro) => {
        console.log(cadastro)
    })
})