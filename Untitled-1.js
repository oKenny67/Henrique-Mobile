const form = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  mensagem.innerHTML = "";

  try {

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = document.getElementById("idade").value;
    const senha = document.getElementById("senha").value;

    // Nome
    if (nome.length < 3) {
      throw new Error("O nome deve ter no mínimo 3 caracteres.");
    }

    // E-mail
    if (!email.includes("@")) {
      throw new Error("O e-mail deve conter '@'.");
    }

    // Idade
    if (isNaN(idade) || Number(idade) < 18) {
      throw new Error(
        "A idade deve ser um número maior ou igual a 18."
      );
    }

    // Senha
    if (senha.length < 6) {
      throw new Error(
        "A senha deve ter no mínimo 6 caracteres."
      );
    }

    mensagem.innerHTML =
      "<p class='sucesso'>Cadastro realizado com sucesso!</p>";

  } catch (erro) {

    mensagem.innerHTML =
      `<p class="erro">${erro.message}</p>`;

  }

});