<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <head>
        <meta charset="utf-8">
        <meta name="viewport"
              content="width=device-width,initial-scale=1.0">

        <title>Tailkit Project</title>

        <!-- Favicons -->
        <link rel="icon" href="favicon.svg" sizes="any"
              type="image/svg+xml">
        <link rel="icon" href="favicon.png" type="image/png">


        @vite(['resources/css/tailkit.css', 'resources/js/app.js'])
    </head>

    <body>
        <h1 class="alert alert-info">Hello world</h1>

        <button class="btn btn-primary">Info</button>
        <button class="btn btn-secondary">info</button>
    </body>

</html>
