const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div>
      <div class="footer-logo"><a href="index.html"><img class="brand-logo" src="fintechzada-logo.png" alt="Fintechzada" width="130" height="44"></a></div>
      <p class="footer-text">Tecnologia financeira do jeito que devia ser. Desde 2019, na Faria Lima, construindo produtos para pessoas e empresas em todo o Brasil.</p>
    </div>
    <div class="footer-col"><h3>Produtos</h3><a href="conta-digital.html">Conta Digital</a><a href="cartao.html">Cartão</a><a href="credito.html">Crédito</a><a href="investimentos.html">Investimentos</a><a href="seguros.html">Seguros</a><a href="empresas.html">Empresas</a></div>
    <div class="footer-col"><h3>Empresa</h3><a href="index.html#sobre">Sobre nós</a><a href="#">Carreiras</a><a href="#">Imprensa</a></div>
    <div class="footer-col"><h3>Ajuda</h3><a href="#">Central de Ajuda</a><a href="#">Ouvidoria</a><a href="#">Acessibilidade</a></div>
    <div class="footer-col"><h3>Legal</h3><a href="#">Privacidade</a><a href="#">Termos de Uso</a><a href="#">LGPD</a></div>
  </div>
  <div class="footer-bottom">© 2026 Fintechzada S/A · CNPJ 12.345.678/0001-90 · Av. Brigadeiro Faria Lima, 3477 — São Paulo, SP · Instituição de pagamento autorizada pelo Bacen · Fintechzada Investimentos registrada na CVM · Fintechzada Seguros autorizada pela SUSEP.</div>
</footer>`;

document.addEventListener("DOMContentLoaded", () => {
  const slot = document.getElementById("site-footer");
  if (slot) slot.innerHTML = FOOTER_HTML;

  if (window.lucide) {
    window.lucide.createIcons({ attrs: { width: 20, height: 20, "stroke-width": 2 } });
  }
});
