const express = require('express')

const router = express.Router()


//register an admin
router.post('/register',(req,res)=>{
    res.json({msg:'Add Admin'})
})
//get admin by id
router.get('/:id',(req,res)=>{
    res.json({msg:'Get Admin'})
})



module.exports=router