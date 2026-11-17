'use strict';

const { error } = require('console');
const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
  const rad = parseFloat(req.params.r)
  const area = Math.PI * rad * rad
  const circumference = 2 * Math.PI * rad

  const result = {
    area: area.toFixed(2),
    circumference: circumference.toFixed(2)
  };
  res.json(result);
});

app.get('/math/rectangle/:width/:height', (req, res) => {
  const width = parseFloat(req.params.width)
  const height = parseFloat(req.params.height)
  if(isNaN(width) || isNaN(height) || width < 0 || height < 0) {
    return res.status(400).json({
      error: "Błędne dane"
    });
  }

  const area = width * height
  const perimeter = 2 * width + 2 * height

  const result = {
    area: area.toFixed(0),
    perimeter: perimeter.toFixed(0)
  };
  res.json(result);
});


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});