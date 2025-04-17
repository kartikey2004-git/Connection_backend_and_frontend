import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

// app.get('/',(req,res) => {
//   res.send('Server is ready')
// })

app.use(express.static("dist"));

// static assets directly serve ho rhe h kyuki yaha pr dist folder serve ho rha h , server ki cost bach gyi , no extra CI/CD pipelines nhi lgani padi , devops ka cost bhi bach gya


// but iska ek consequence (परिणाम) ye hoga ki frontend ke andar ke changes propogate nhi honge , humein phirse build command chalani hogi and then phirse serve krna padega dist folder ko....


// we discuss later about URL standards / versioning
// get a list of 5 jokes
// follow standard practices for serving api 


app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "First joke",
      content:
        "Why do programmers prefer dark mode? Because light attracts bugs!",
    },
    {
      id: 2,
      title: "Second joke",
      content: "Why do Java developers wear glasses? Because they don't C#!",
    },
    {
      id: 3,
      title: "Third joke",
      content: "How do you comfort a JavaScript bug? You console it!",
    },
    {
      id: 4,
      title: "Fourth joke",
      content:
        "Why did the developer go broke? Because he used up all his cache.",
    },
    {
      id: 5,
      title: "Fifth joke",
      content:
        "Why was the database administrator always calm? Because he had strong SQL skills!",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
})