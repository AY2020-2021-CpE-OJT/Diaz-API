const express = require('express');
const router = express.Router();
const Post = require('../Schemas/sessionSchema');
require('dotenv/config');
const jwt = require('jsonwebtoken');

router.post('/',  (req,res) =>{
    const password = req.body.password
    const count=0;
    if (password == process.env.UNIVERSAL_PASSWORD){
            Post.count({}, function(err, count){
                const accessToken = jwt.sign(password, process.env.ACCESS_TOKEN_SECRET)
                count= count+1;
                console.log("Number of Documents: ", count);
                const post = new Post({
                    sessionID: count,
                    username: req.body.username,
                    accessToken: accessToken
                }) 
                post.save()
                .then(data => {
                    console.clear();
                    const accessToken = jwt.sign(password, process.env.ACCESS_TOKEN_SECRET)
                    res.json({accessToken:accessToken})
                    console.log("The Access Token is: "+ accessToken)
                    console.log("Posted SessionID Successfully")
                })
                .catch(err => {
                    console.clear();
                    res.json({message: err}),
                    console.log({message: err})
                    console.log("POST Attempt failed")
                });
            });
    }else{
            res.json("Access Denied!")
            console.log("Access Denied!");
    }
});
router.get('/', async (req,res)=> {
    try{
        const posts = await Post.find();
        res.json(posts);
        console.clear();
        console.log("GET attempt successful");
    }catch(err){
        console.clear();
        res.json({message:err});
        console.log("GET attempt failed");
    }   
});
module.exports= router;