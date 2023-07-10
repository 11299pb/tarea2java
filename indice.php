<!doctype html>
<html lang="en">

<head>
  <title>Información Personal</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <!-- Font Awesome icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }

    h1 {
      text-align: center;
    }

    form {
      max-width: 500px;
      margin: 0 auto;
      background-color: #f2f2f2;
      padding: 30px;
      border-radius: 10px;
    }

    label {
      display: block;
      margin-bottom: 10px;
      font-weight: bold;
    }

    input[type="text"],
    input[type="email"],
    select {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background-repeat: no-repeat;
      background-position: right center;
      background-size: 10px;
    }

    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .social-icons {
      text-align: center;
      margin-top: 20px;
    }

    .social-icons a {
      display: inline-block;
      margin-right: 10px;
      color: #333;
      font-size: 20px;
    }

  </style>
</head>

<body>
  <h1 class="titulo">formulario</h1>

  <form class="formulario">
    <label for="nombres">Nombres:</label>
    <input type="text" class="nombres" placeholder="Ingrese sus nombres" required>

    <label for="apellidos">Apellidos:</label>
    <input type="text" class="apellidos" placeholder="Ingrese sus apellidos" required>

    <label for="telefono">Número DPI:</label>
    <input type="text" class="telefono" placeholder="Ingrese su número de teléfono" required>


    <div id="miDiv"> <span></span></div>

    <label for="sexo">Sexo:</label>
    <select class="sexo" required>
      <option value="">Selecciona sexo</option>
      <option value="Femenino">Femenino</option>
      <option value="Masculino">Masculino</option>
      <option value="Otro">Otro</option>
    </select>

    <button class="botonEnviar">Enviar</button>
  </form>

  <div class="box">
  <p class="primary">¡Bienvenidos a mi sitio web!</p>
  <p class="p2">Este es un ejemplo de texto personalizado.</p>
  <p class="p3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, asperiores.</p>
  <p class="success">Gracias por visitar.</p>
</div>


 

  <!-- Font Awesome script -->
  <script src="guiones.js"></script>
</body>

</html>
