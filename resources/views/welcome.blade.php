<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>
            Wadic
        </title>
        <link rel="stylesheet" type="text/css" href="{{ asset('/css/app.css') }}" />


    </head>
    <body>

        <div id="app">
            @yield('content')
        </div>


        <script>
            const BASE_URL = "{{ URL::to('/') }}";
        </script>
        <script type="text/javascript" src="{{ asset('/js/app.js') }}"></script>
    </body>
</html>
