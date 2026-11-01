
/* =========================================
   PROJETO 04 — CENTRAL DE DOCUMENTAÇÃO
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const projetoDocumentacao = document.querySelector(
        ".projeto-documentacao"
    );

    if (!projetoDocumentacao) {
        return;
    }

    const botoes = projetoDocumentacao.querySelectorAll(
        ".doc-botao"
    );

    botoes.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const idDocumento = botao.dataset.documento;

            const documento = document.getElementById(
                idDocumento
            );

            if (!documento) {
                return;
            }

            const estavaAberto =
                botao.getAttribute("aria-expanded") === "true";

            // Fecha todos os documentos antes de abrir outro.
            botoes.forEach(function (outroBotao) {

                const outroId = outroBotao.dataset.documento;

                const outroDocumento = document.getElementById(
                    outroId
                );

                outroBotao.setAttribute(
                    "aria-expanded",
                    "false"
                );

                outroBotao.innerHTML =
                    "<span>⌕</span> Visualizar documento";

                if (outroDocumento) {
                    outroDocumento.hidden = true;
                }

            });

            // Abre o documento selecionado.
            if (!estavaAberto) {

                documento.hidden = false;

                botao.setAttribute(
                    "aria-expanded",
                    "true"
                );

                botao.innerHTML =
                    "<span>×</span> Fechar documento";

                documento.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });

            }

        });

    });

});
