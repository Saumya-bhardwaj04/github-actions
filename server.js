import express from "express";
const app = express();
const PORT = process.env.PORT || 9000;
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("CI/CD test working 🔥");
})
app.listen(PORT,"0.0.0.0",()=>{
    console.log(`server running on port ${PORT}`);
})