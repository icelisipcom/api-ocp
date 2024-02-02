const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola desde la API en Openshift!');
});

app.listen(port, () => {
  console.log(`La API está escuchando en el puerto ${port}`);
});

