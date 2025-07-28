const express = require('express')
const router = express.Router()
const Employee = require('../models/user')
router.get("/" , (req ,res)=>{
  res.render("home")
})
router.get('/create-user',(req, res)=>{
  res.render("addEmp") 
  // res.end()
})


router.post('/save-emp',async(req,res)=>{
  // console.log(req.body)
  try{
    const employee = new Employee({
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone,
      city:req.body.city,
    })
   
    await employee.save();
    res.redirect('/emp/show-all-employee');
  }catch(error){
   console.log("Error", error)
  }

  
})



router.get("/show-all-employee",async(req,res)=>{
  try{
    const result =await  Employee.find()
    res.render('showEmp',{list:result})

  }catch(error){
    console.log("Error", error)
  }
})
module.exports = router