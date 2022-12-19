const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register Users

router.post('/register', async(req,res) =>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    })
    try{
        const user = await newUser.save();  //async await so that the user is saved first and then we send it
        res.status(201).json(user);
    }catch(err){
        res.status(500).json(err);
    }
})


// Login
router.post("/login", async(req,res)=>{

try{
    const user = await User.findOne({email: req.body.email})
    !user && res.status(401).json("wrong password or username!!!");
    
    const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password && res.status(401).json("wrong password or username!!!");

    const {password, ...info} = user._doc;

    const accessToken = jwt.sign({id:user._id, isAdmin:user.isAdmin}, process.env.SECRET_KEY, {expiresIn: "5d"});

    res.status(200).json({...info, accessToken});

}catch(err){
    res.status(500).json(err);
}

})

module.exports = router;