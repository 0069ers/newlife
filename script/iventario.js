
// =========================================
// PROJETO 01 — VISUALIZADOR DE INVENTÁRIO
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const botoesInventario = document.querySelectorAll(
        ".projeto-inventario-rede .botao-visualizar-inventario"
    );

    botoesInventario.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const idAlvo = botao.dataset.inventario;
            const visualizador = document.getElementById(idAlvo);

            if (!visualizador) return;

            const estavaAberto = !visualizador.hidden;

            // Fecha todos os visualizadores deste projeto
            document.querySelectorAll(
                ".projeto-inventario-rede .visualizador-inventario"
            ).forEach(function (painel) {
                painel.hidden = true;
            });

            // Restaura os textos e estados dos botões
            botoesInventario.forEach(function (outroBotao) {
                outroBotao.textContent =
                    outroBotao.dataset.inventario === "inventario-equipamentos"
                        ? "Visualizar inventário"
                        : "Visualizar plano IPv4";

                outroBotao.setAttribute("aria-expanded", "false");
            });

            // Se estava fechado, abre o documento selecionado
            if (!estavaAberto) {

                visualizador.hidden = false;

                botao.textContent = "Fechar documento";
                botao.setAttribute("aria-expanded", "true");

                visualizador.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });
            }

        });

    });

});
