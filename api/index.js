const express = require('express')
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const app = express()
const port = 3000
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/category");
const multer  = require('multer');
const path  = require('path');


dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname,"/images")))

const MONGO_URL1 = "mongodb+srv://hoanghue:hoanghue@cluster0.f50ua.mongodb.net/Blog?retryWrites=true&w=majority"


mongoose.connect(MONGO_URL1).then(console.log("Connected to MongoDB")).catch((err) => console.log(err))

const storage = multer.diskStorage({
  destination:(req,file,cb) =>{
    cb(null,"images")
  }, filename:(req,file,cb) =>{
    cb(null,req.body.name)
    
  }
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"),(req,res) =>{
  res.status(200).json("File has been uploaed");
})


app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/post", postRoute)
// http://localhost:3000/api/post/capnhat/id1
app.use("/api/category", categoryRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})