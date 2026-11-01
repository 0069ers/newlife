
/* ==========================================
   VISUALIZADOR INTERNO DOS RELATÓRIOS
   ========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const botoes = document.querySelectorAll(
        ".projeto-relatorios .botao-visualizar"
    );

    botoes.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const id = botao.dataset.relatorio;
            const painel = document.getElementById(id);

            if (!painel) {
                return;
            }

            const estaAberto = !painel.hidden;

            // Fecha todos os outros relatórios
            document.querySelectorAll(
                ".projeto-relatorios .visualizador-relatorio"
            ).forEach(function (outroPainel) {

                outroPainel.hidden = true;

            });

            document.querySelectorAll(
                ".projeto-relatorios .botao-visualizar"
            ).forEach(function (outroBotao) {

                outroBotao.innerHTML =
                    "<span>⌕</span> Visualizar relatório";

                outroBotao.setAttribute("aria-expanded", "false");

            });

            // Se estava fechado, abre o relatório selecionado
            if (!estaAberto) {

                painel.hidden = false;

                botao.innerHTML =
                    "<span>×</span> Fechar relatório";

                botao.setAttribute("aria-expanded", "true");

                // Leva o documento para a área visível
                painel.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });

            }

        });

    });

});
