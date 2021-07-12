const express = require('express');
const router = express.Router();
const Post = require('../Schemas/studentsSchema');

//GET
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
//POST 
router.post('/',(req,res)=>{
    const post = new Post({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        number1: req.body.number1,
        number2: req.body.number2,
        number3: req.body.number3,
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
module.exports = router;
