<?php
require __DIR__ . '/../vendor/autoload.php';
$env = require __DIR__ . '/../Conf/Env.php';

use React\Http\HttpServer;
use Psr\Http\Message\ServerRequestInterface;
use React\Http\Message\Response;
use React\Socket\SocketServer;


$http = new HttpServer(function (ServerRequestInterface $request) {
    return Response::plaintext(
        "Hello World!\n"
    );
});

$socket = new SocketServer($env['HOST'] . ':'. $env['PORT']);
$http->listen($socket);

echo "Server running at http://". $env['HOST'] .  ":" . $env['PORT'] . PHP_EOL;