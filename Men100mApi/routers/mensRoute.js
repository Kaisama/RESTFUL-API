const express=require("express")
const router=new express.Router();

const MensRanking=require("../modals/men100")

//post to postman
router.post("/mens", async (req,res)=>{
    try {
        const mens = new MensRanking(req.body);
       // console.log(req.body)
        const createMens= await mens.save();
        res.status(201).send(createMens);
    } catch (error) {
        res.status(400).send(error)
    }
})

// GET REQUEST
router.get("/mens",async(req,res)=>{
    try {
       const getMens= await MensRanking.find({}).sort({ranking:1});
       res.status(201).send(getMens);
    } catch (error) {
        res.status(400).send(error)
    }
})

// patch api
router.patch("/mens/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
        const findMen=await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.status(201).send(findMen)
    } catch (error) {
        res.status(500).send(error)
    }
})

//delete api
router.patch("/mens/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
        const findMen=await MensRanking.findByIdAndDelete(_id);
        res.status(201).send(findMen)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports=router;
