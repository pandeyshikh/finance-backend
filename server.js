
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const recordRoutes = require('./routes/recordRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRoutes);
app.use('/records', recordRoutes);
app.use('/dashboard', dashboardRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running...");
});
