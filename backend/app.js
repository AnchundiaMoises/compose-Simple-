const fs = require('fs');
const path = require('path');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const Concepto = require('./models/conceptos');

const app = express();

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'logs', 'access.log'),
  { flags: 'a' }
);

app.use(morgan('combined', { stream: accessLogStream }));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/concepto', async (req, res) => {
  console.log('TRYING TO FETCH AUTOS');
  try {
    const autos = await Concepto.find();
    res.status(200).json({
      conceptos: conceptos.map((concepto) => ({
        id: concepto.id,
        descripcion: concepto.descripcion,
      })),
    });
    console.log('FETCHED CONCEPTOS');
  } catch (err) {
    console.error('ERROR FETCHING CONCEPTOS');
    console.error(err.message);
    res.status(500).json({ message: 'Failed to load conceptos.' });
  }
});

app.post('/conceptos', async (req, res) => {
  console.log('TRYING TO STORE CONCEPTO');
  const conceptoDescripcion = req.body.descripcion;

  if (!conceptoDescripcion || conceptoDescripcion.trim().length === 0) {
    console.log('INVALID INPUT - NO DESCRIPCION');
    return res.status(422).json({ message: 'Invalid concepto descripcion.' });
  }

  const concepto = new Concepto({
    descripcion: conceptoDescripcion,
  });

  try {
    await concepto.save();
    res
      .status(201)
      .json({ message: 'Concepto saved', concepto: { id: concepto.id, descripcion: conceptoDescripcion } });
    console.log('STORED NEW CONCEPTO');
  } catch (err) {
    console.error('ERROR FETCHING CONCEPTOS');
    console.error(err.message);
    res.status(500).json({ message: 'Failed to save concepto.' });
  }
});

app.delete('/conceptos/:id', async (req, res) => {
  console.log('TRYING TO DELETE CONCEPTO');
  try {
    await Concepto.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Deleted concepto!' });
    console.log('DELETED CONCEPTO');
  } catch (err) {
    console.error('ERROR FETCHING CONCEPTOS');
    console.error(err.message);
    res.status(500).json({ message: 'Failed to delete concepto.' });
  }
});

mongoose.connect(
 
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.3lc2f.mongodb.net/?retryWrites=true&w=majority`,

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error('FAILED TO CONNECT TO MONGODB');
      console.error(err);
    } else {
      console.log('CONNECTED TO MONGODB!!');
      app.listen(80);
    }
  }
);
