const express=require('express')
const app=express();
const port = 8100;
const cors = require("cors");

let data = [
    { username: "Bret", email: "Sincere@april.biz" },
    { username: "Antonette", email: "Shanna@melissa.tv" },
    { username: "Samantha", email: "Nathan@yesenia.net" },
    { username: "Karianne", email: "Julianne.OConner@kory.org" },
    { username: "Kamren", email: "Lucio_Hettinger@annie.ca" },
    { username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info" },
    { username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz" },
    { username: "Maxime_Nienow", email: "Sherwood@rosamond.me" },
    { username: "Delphine", email: "Chaim_McDermott@dana.io" },
    { username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz" },
  ];

app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    res.send(data);
})

app.post("/adddata", (req,res) => {
    console.log(req.body);

    const userId=req.body.userId;
    const password=req.body.password;

    if(userId==="ss" && password==="asdf"){
        const newUser=req.body.newUser;
        data.push(newUser);
        res.send(data);
    }else{
        res.status(400).send("user not created");
    }

    // const secretKey=req.body.secretKey;
    // if(Number(secretKey) === 1234){
    //     const newUser = req.body.newUser;
    //     data.push(newUser);
    //     res.send(data);
    // }else{
    //     res.status(400).send("user not created");
    // }
});

app.listen(port,() => {
    console.log("i'm running ");
});