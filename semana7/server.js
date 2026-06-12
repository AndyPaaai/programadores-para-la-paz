const express = require('express');
const app = express();

app.use(express.json());

// Array que funciona como nuestra base de datos temporal en memoria
let reportes = [];

// Ruta para consultar todos los reportes (GET)
app.get('/reportes', (req, res) => {
  res.json(reportes);
});

// Ruta para registrar un nuevo reporte (POST)
app.post('/reportes', (req, res) => {
  const reporte = {
    id: reportes.length + 1,
    tipo: req.body.tipo,
    descripcion: req.body.descripcion
  };

  reportes.push(reporte);

  res.json({
    mensaje: "Reporte registrado",
    reporte: reporte
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});