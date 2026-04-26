import express from "express";
const app = express();
const PORT = process.env.PORT || 9000;
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello");
})
app.listen(PORT,"0.0.0.0",()=>{
    console.log(`server running on port ${PORT}`);
})