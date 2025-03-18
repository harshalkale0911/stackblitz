const express = require('express');
const { resolve } = require('path');
const mongoose=require('mongoose')
const dotenv=require('dotenv').config()

const app = express();
const port = 3010;

app.use(express.static('static'));
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log('Connection Fialed', err))

const MenuSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  description: {
    type: String
  },
  price: {
    required: true,
    type: Number
  }
})

const MenuItem = mongoose.model('MenuItem', MenuSchema)

app.put('/menu/:id',async(req,res)=>{
  const {id}=req.params
  const {name,description,price}=req.body

  try{
    const updatedMenu=await MenuItem.findByIdAndUpdate(id,{name,description,price})

    if(!updatedMenu){
      res.status(404).json({messase:'Item not found'})
    }

    res.status(200).json({message:'Menu updated successfully',Menu: updatedMenu})
  }catch(err){
    res.send(500).json({message:'Updation failed',error:err.message})
  }
})

app.delete('/menu/:id',async(req,res)=>{
  const {id}=req.params

  try{
    const DeletedItem = await MenuItem.findByIdAndDelete(id)

    if (!DeletedItem) {
      res.status(404), json({ message: 'Item not found' })
    }

    res.status(200).json({ message: 'Menu Item deleted Successfully' })
  }catch(err){
    res.status(500).json({message:'Deletion Failed',error:err.message})
  }

  
})

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});