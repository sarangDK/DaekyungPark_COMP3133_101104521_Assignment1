const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const schema = require('../graphql/schema');
const connectDB = require('../config/db');


dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }));

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`Server is running on : http://localhost:${PORT}/graphql`)); 

  module.exports = app;