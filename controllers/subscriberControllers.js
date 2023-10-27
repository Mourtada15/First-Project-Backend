import Subscriber from "../models/subscriberModel.js";

export const addSubscriber = async(req,res,next) =>{
   const {email} =req.body;
   try{
    const sub = new Subscriber({
        email:email
    });
    await sub.save();
    res.status(200).json({message:"Subscrbied successfully!"})


   }catch(err){
    console.log(err);
    res.status(500).json({error: err.message})

   }
}

export const deleteSubscriber = async(req,res,next)=>{
    const {email}=req.body;
    try{
        await Subscriber.findOneAndDelete({email:email});
    res.status(200).json({message:"Subscrber deleted successfully!"})        

    }catch(err){
        console.log(err);
    res.status(500).json({error: err.message})
    }
}