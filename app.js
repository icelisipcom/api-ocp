const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// Endpoint que devuelve un código de estado 200 (Éxito)
app.get('/success', (req, res) => {
  res.status(200).send('OK - Código de estado 200');
});

// Endpoint que devuelve un código de estado 300 (Redirección)
app.get('/redirect', (req, res) => {
  res.redirect(301, 'https://www.ejemplo.com');
});

// Endpoint que devuelve un código de estado 400 (Solicitud incorrecta)
app.get('/bad-request', (req, res) => {
  res.status(400).send('Solicitud incorrecta - Código de estado 400');
});

// Endpoint que devuelve un código de estado 500 (Error interno del servidor)
app.get('/internal-server-error', (req, res) => {
  res.status(500).send('Error interno del servidor - Código de estado 500');
});

app.listen(port, () => {
  console.log(`El API de estados está escuchando en el puerto ${port}`);
});
