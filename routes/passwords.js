const express = require('express');
const router = express.Router();

const Post = require('../Schemas/passwordSchema');
router.post('/',(req,res)=>{
    const post = new Post({
        password:req.body.password
    }) 
    post.save()
    .then(data => {
        console.clear();
        res.json(data);
        console.log("Posted Student to Document Successfully")
    })
    .catch(err => {
        console.clear();
        res.json({message: err}),
        console.log({message: err})
        console.log("POST Attempt failed")
    });
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
        console.log({message:err});
        console.log("GET attempt failed");
    }   
});
module.exports =router;