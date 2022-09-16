import express from 'express';
import cors from 'cors';
// import bodyParser from 'body-parser';

const app = express();
const PORT = 8050;

app.use(cors());

// // Configuring cors middleware #cristina 
// app.use(cors());

// Configuring body parser middleware #cristina
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
    res.json("Hello Techtonica Server for a Game");
  });

app.get("/api/game", async (req, res) => {
    const url = `https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=boolean`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log("Line 27 server.js", data);
      res.send(data);
    } catch (err) {
      console.error("Fetch error: ", err);
    }
  });

app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));
