const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const studentRoutes = require('./routes/studentRoutes')

const app = express();
app.use(cors({origin:'https://stu-database.netlify.app'}));
app.use(express.json());
app.use('/',studentRoutes);

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('MongoDB connected');
}).catch((err)=>{
    console.log('MongoDB connection error:',err);
})

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
