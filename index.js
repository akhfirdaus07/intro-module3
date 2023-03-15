const express = require("express");
const PORT = 2000;
const app = express();

const bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

let products=[
    {
        id:1,
        name: "Nasi Goreng",
        price: 15000
    },
    {
        id:2,
        name: "Soto Banjar",
        price: 20000
    }
]

app.get("/api", (req,res)=>{
    res.json({
        status: 'ok',
        data: products
    })
});
app.post("/api", (req,res)=>{
    const newProduct={
        id:3,
        name: "Pempek",
        price: 50000
    }
    products.push(newProduct)
    res.json({
        status:'ok',
        message:'new product has successfully created',
        data: products
    })
});
app.put("/api", (req,res)=>{
    res.json({
        status:'ok',
        message:'data successfully replaced'
    })
});
app.patch("/api", (req,res)=>{
    res.json({
        status:'ok',
        message:'data successfully updated'
    })
});
app.delete("/api", (req,res)=>{
    res.json({
        status:'ok',
        message:'data successfully deleted'
    })
});

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}....`);
});