const express= require("express");
const app = express();
const router=require("./routers/mensRoute")


require("../src/database/conn")

const MensRanking=require("../src/modals/men100")

const port=process.env.PORT || 3000;

app.use(express.json())

app.use(router);

//listen to port
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

