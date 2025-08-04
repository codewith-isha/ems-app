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

// delete user 
router.get("/delete-all-employee", async(req, res)=>{
  try {
    const result = await Employee.find()
    res.render('deleteEmp' , {list :result})
  }catch(error){
    console.log(`Error : ${error}`)
  }
})

router.get('/final-delete/:userId' ,async (req,res)=>{
  try{
    const result= await Employee.findByIdAndDelete(req.params.userId)
    // console.log(result)
    res.redirect('/emp')

  }catch(error){
    console.log(`Error : ${error}`)
  }
})


// update user 
router.get('/update-all-employee', async (req,res)=>{
   try {
    const result = await Employee.find()
    res.render('updateEmp' , {list :result})
  }catch(error){
    console.log(`Error : ${error}`)
  }
})

router.get('/info/:id', async (req, res) => {
  const user = await Employee.findById(req.params.id);
  res.render("InfoEmp",{user});
});

router.post('/final-update/:userId', async (req, res) => {
  try {
    const result = await Employee.findByIdAndUpdate(req.params.userId, req.body);
    // console.log(result);
    res.redirect('/emp');
  } catch (error) {
    console.log(`Error : ${error}`);
  }
});

module.exports = router