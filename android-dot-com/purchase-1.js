// Função para exibir os detalhes da compra na página de purchase
function displayPurchaseSummary() {
  var cartItems = localStorage.getItem("cartItems");
  var purchaseSummaryContainer = document.getElementById("purchase-summary");

  if (!cartItems) {
    purchaseSummaryContainer.innerHTML = "<p>Nenhum produto encontrado.</p>";
  } else {
    cartItems = JSON.parse(cartItems);

    if (cartItems.length === 0) {
      purchaseSummaryContainer.innerHTML = "<p>Nenhum produto encontrado.</p>";
    } else {
      purchaseSummaryContainer.innerHTML = "";

      // Para cada item no carrinho, criar o elemento HTML correspondente
      cartItems.forEach(function(productId) {
        var purchaseItem = document.createElement("div");
        purchaseItem.className = "purchase-item";

        // Aqui você pode buscar os detalhes do produto do backend utilizando o ID do produto
        // E adicionar as informações relevantes ao elemento HTML, como imagem, título, preço, etc.

        // Exemplo de código para adicionar o título do produto
        var productTitle = document.createElement("h3");
        productTitle.textContent = "Nome do Produto";
        purchaseItem.appendChild(productTitle);

        purchaseSummaryContainer.appendChild(purchaseItem);
      });
    }
  }
}

// Chamada da função para exibir os detalhes da compra no carregamento da página
displayPurchaseSummary();

// Manipulador de evento para o envio do formulário
document.getElementById("payment-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // TODO: Implementar a lógica para processar o pagamento
  // Você pode enviar uma requisição para o backend e tratar a resposta aqui

  // Exemplo de código para limpar o carrinho de compras após a compra ser concluída
  localStorage.removeItem("cartItems");

  // Redirecionar para uma página de confirmação
  window.location.href = "index.html";
});
