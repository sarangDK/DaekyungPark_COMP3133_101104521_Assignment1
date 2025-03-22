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


// Middleware to accept JSON data
app.use(cors());
app.use(express.json());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }));

app.get("/", (req, res) => {
  res.json({ message: "API Running - Daekyung , COMP 3133 , Assignment 1" });
});

  // const PORT = process.env.PORT || 4000;
  // app.listen(PORT, () => console.log(`Server is running on : http://localhost:${PORT}/graphql`)); 




module.exports = app;