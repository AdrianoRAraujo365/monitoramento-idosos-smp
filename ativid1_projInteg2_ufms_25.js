<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Café do Bairro</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-beige-100 font-sans text-gray-800">

  <!-- Cabeçalho -->
  <header class="bg-yellow-600 text-white p-6 shadow-lg">
    <h1 class="text-3xl font-bold text-center">☕ Café do Bairro</h1>
  </header>

  <!-- Conteúdo principal -->
  <main class="p-6 flex flex-col items-center text-center">
    <!-- Descrição -->
    <section class="max-w-xl my-6">
      <p class="text-lg">
        Bem-vindo ao Café do Bairro! Um espaço aconchegante para tomar um café quentinho, saborear doces artesanais e curtir bons momentos com amigos.
      </p>
    </section>

    <!-- Imagem ilustrativa -->
    <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348" alt="Xícara de café" class="w-full max-w-md rounded-lg shadow-md my-4" />

    <!-- Botão de ação -->
    <a href="#fazer-pedido" class="mt-4 inline-block bg-yellow-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 transition">
      Fazer Pedido
    </a>
  </main>

  <!-- Rodapé (opcional) -->
  <footer class="mt-10 text-center text-sm text-gray-500">
    © 2025 Café do Bairro. Todos os direitos reservados.
  </footer>

</body>
</html>
###Atividade1;Disciplina:Projeto Integrador 2

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Café do Bairro</title>

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

  <style>
    body {
      background-color: #fdf6f0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .header-title {
      font-size: 2.5rem;
      font-weight: bold;
      color: #fff;
    }

    .main-section {
      margin-top: 2rem;
    }

    .action-button {
      background-color: #d4a373;
      color: white;
    }

    .action-button:hover {
      background-color: #b5835a;
    }

    .footer {
      margin-top: 3rem;
      font-size: 0.85rem;
      color: #777;
    }
  </style>
</head>
<body>

  <!-- Cabeçalho -->
  <header class="bg-warning text-center p-4 shadow">
    <h1 class="header-title">☕ Café do Bairro</h1>
  </header>

  <!-- Conteúdo principal -->
  <main class="container main-section text-center">
    <!-- Descrição -->
    <div class="row justify-content-center">
      <div class="col-md-8">
        <p class="lead">
          Bem-vindo ao Café do Bairro! Um espaço aconchegante para tomar um café quentinho, saborear doces artesanais e curtir bons momentos com amigos.
        </p>
      </div>
    </div>

    <!-- Imagem ilustrativa -->
    <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348" 
         class="img-fluid rounded shadow my-4" 
         alt="Xícara de café">

    <!-- Botão de ação -->
    <button class="btn action-button px-4 py-2" onclick="fazerPedido()">
      Fazer Pedido
    </button>
  </main>

  <!-- Rodapé -->
  <footer class="footer text-center py-3">
    © 2025 Café do Bairro. Todos os direitos reservados.
  </footer>

  <!-- Bootstrap JS + JavaScript -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    function fazerPedido() {
      alert("Redirecionando para o sistema de pedidos...");
      // Aqui você pode colocar a lógica de redirecionamento ou chamada de API futuramente.
    }
  </script>
</body>
</html>
