const express = require('express');
const app = express();
app.use(express.json());
app.listen(5501);
let users = [
    {
      id: 1,
      name: "Sai",
    },
    {
      id: 2,
      name: "prasad",
    },
    {
      id: 3,
      name: "Toxic",
    },
  ];

// mini app
const loginRouter = express.Router(); 
app.use('/',loginRouter);
loginRouter
.route('/login.html')
.get(getSignUp)
.post(postSignUp);

function getSignUp(req,res){
    res.sendFile('login.html',{root:__dirname});
}
function postSignUp(req,res){
    let obj=req.body;
    res.json({
        message:"User signed Up",
        data:obj
    });
}