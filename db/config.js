const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://lamadev:8jrqyCXOkW7uWEtw@cluster0.pbqp57k.mongodb.net/e-dashboard');

// const connectDB=async()=>{
   
//     const productSchema=new mongoose.Schema({});
//     const product=mongoose.model('product',productSchema)
//     const data=await product.find();
//     console.warn(data)
// }
// connectDB()