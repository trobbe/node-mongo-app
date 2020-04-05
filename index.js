// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const app = express();
// const expressValidator = require('express-validator');
// const bodyParser = require('body-parser');

import server from './config/server';

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});