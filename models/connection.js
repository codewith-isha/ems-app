const mongoose = require('mongoose');

const connectDB= async()=>{
try { 
  await mongoose.connect( process.env.MONGO_URI)
   console.log("database connected succesffully")
}
catch(error){
  console.log(`"Error ": ${error}`)
}
}
module.exports = connectDB


// mongodb+srv://ishasinghwork2025:1234567890@cluster0.ztvrqbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://ishasinghwork2025:1234567890@cluster0.0lpvdhe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//     );
//     console.log("database connected");
//   } catch (error) {
//     console.log(`"error": ${error.errmsg}`);
//   }
// };
// module.exports = connectDB;