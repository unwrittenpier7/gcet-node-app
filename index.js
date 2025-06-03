import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express();
app.listen(8080,()=>{
  mongoose.connect("mongodb://localhost:27017/gcet")
  console.log("Server Started");
});
const userSchema =mongoose.Schema({
  name: {type: String},
});
const User = mongoose.model("User", userSchema);


app.use(cors());

app.get("/", (req, res)=>{
  return res.send("Good Morning!!");
});

app.get("/register",async(req,res)=>{
     const result = await User.create({ name: "Peter" });
    res.json(result);
})

app.get("/greet", (req, res)=>{
  res.send("Greetings!!");
} );

app.get("/name", (req, res)=>{
  res.send("Peter");
} );

app.get("/weather", (req, res)=>{
  res.send("29 degrees");
});

app.get("/products", (req, res)=>{
  const products=[
    {name: "Product1", price:45},
    {name: "Product2", price:50},
    {name: "Product3", price:60},
  ];
  res.json(products);
})

