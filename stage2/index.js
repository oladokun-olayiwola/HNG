const express = require("express")
const bodyParser = require('body-parser');
const { createPerson, getPerson, deletePerson, updatePerson } = require("./controller.js")
require("dotenv").config()

const connectDB = require("./connect.js")
const app = express()
const PORT = process.env.PORT || 5555

app.use(bodyParser.json());

app.post('/api', createPerson)
app.get('/api/:user_id', getPerson) 
app.put('/api/:user_id', updatePerson)
app.delete("/api/:user_id", deletePerson);

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI);
      app.listen(PORT, () => {
        console.log(`Listening to your server on port ${PORT} sir 😀`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  start();