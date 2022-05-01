let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json());

let port = 3005;
// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

app.get('/', function(req, res) {
  res.send('Oi, mundo (: ');
});

app.get('/soma/:a/:b', function(req, res) {
  let a = parseInt(req.params.a);
  let b =  parseInt(req.params.b);
  let resultado = soma(a, b);

  res.send(`O resultado da soma de ${a} e ${b} é ${resultado}`);
});

app.get('/subtracao/:a/:b', function(req, res) {
  let a = parseInt(req.params.a);
  let b =  parseInt(req.params.b);
  let resultado = subtracao(a, b);

  res.send(`O resultado da soma de ${a} e ${b} é ${resultado}`);
});

app.get('/multiplicacao/:a/:b', function(req, res) {
  let a = parseInt(req.params.a);
  let b =  parseInt(req.params.b);
  let resultado = multiplicacao(a, b);

  res.send(`O resultado da soma de ${a} e ${b} é ${resultado}`);
});

app.get('/divisao/:a/:b', function(req, res) {
  let a = parseInt(req.params.a);
  let b =  parseInt(req.params.b);
  let resultado = divisao(a, b);

  res.send(`O resultado da soma de ${a} e ${b} é ${resultado}`);
});

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

