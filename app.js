require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');


app.use(helmet());
app.use(cors());
const mongoose =require('mongoose');

 mongoose.connect(process.env.MONGO_URL,{

  useNewUrlParser:true,
  useUnifiedTopology:true,
  useFindAndModify:false,
  useCreateIndex:true,
});
if (process.env.NODE_ENV !=="production"){
  const mDb =mongoose.connection;
  mDb.on("open",()=>{

    console.log("MongoDB is cnnected");
    });
    mDb.on("error",(error)=>{

      console.log("error");
      });


app.use(morgan("tiny"));

    }
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


const userRouter=require("./src/routers/user.router");
const ticketRouter=require("./src/routers/ticket.router");

app.use("/v1/user",userRouter);
app.use("/v1/ticket",ticketRouter);

app.use('*', (req, res,next) => {
  const error=new Error("Resources not found")
  error.status=404;
  next(error);
});
app.use((error,req, res,next) => {
  handleError(error,res);
});

const handleError=require("./src/util/errorHandler")

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
