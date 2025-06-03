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
  email: {type: String},
  pass: {type: String}
});
const User = mongoose.model("User", userSchema);


app.use(cors());
app.use(express.json())
app.get("/", (req, res)=>{
  return res.send("Good Morning!!");
});

app.post("/register",async(req,res)=>{
  const {name, email, pass} = req.body;
     const result = await User.create({ name: name, email: email, pass: pass });
    res.json(result);
})


app.post("/login", async (req, res) => {
  const { email, pass } = req.body;

  const user = await User.findOne({ email, pass });

  if (user) {
    res.send({ message: "Login successful" });
  } else {
    res.send({  message: "Invalid email or password" });
  }
});





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

