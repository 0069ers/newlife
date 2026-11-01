
// =========================================
// PROJETO 02 — VISUALIZADOR DO DIAGRAMA
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const botaoDiagrama = document.querySelector(
        ".projeto-diagrama-rede .botao-visualizar-diagrama"
    );

    const visualizadorDiagrama = document.getElementById(
        "visualizador-diagrama"
    );

    if (!botaoDiagrama || !visualizadorDiagrama) return;

    botaoDiagrama.addEventListener("click", function () {

        const estavaAberto = !visualizadorDiagrama.hidden;

        if (estavaAberto) {

            visualizadorDiagrama.hidden = true;

            botaoDiagrama.textContent =
                "Visualizar diagrama completo";

            botaoDiagrama.setAttribute(
                "aria-expanded",
                "false"
            );

        } else {

            visualizadorDiagrama.hidden = false;

            botaoDiagrama.textContent =
                "Fechar diagrama";

            botaoDiagrama.setAttribute(
                "aria-expanded",
                "true"
            );

            visualizadorDiagrama.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });

        }

    });

});
