const express =require("express");

const Pizza= require('./models/pizzaModel')

const db=require("./db")
const app=express();

app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoutes')


app.use('/api/pizzas/',pizzasRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/',ordersRoute)
app.get("/",(req,res)=>{
    res.send("server working");
});
// app.get("/getpizzas",async (req,res)=>{
// Pizza.find({},(err, docs)=>{
// if(err){
//     console.log('err');
// }
// else{
//     res.send(docs)
// }
// })
// });
// test = await Pizza.find({});
// console.log(test);
// res.send(test)
// });
app.listen(5500);