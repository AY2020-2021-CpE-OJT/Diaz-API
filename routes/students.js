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
//DELETE
router.delete('/:students', async (req, res)=>{
    try{
        const removedPost = await Post.deleteOne({_id: req.params.students});
        res.json(removedPost);
        console.clear();
        console.log("Successfully Deleted Document")
    }catch (err){
    res.json({message:err});
    }
});
//PATCH || MODIFY
router.patch('/:students', async (req, res)=>{
    try{
        const updatedPost = await Post.updateOne(
            {_id: req.params.students},{$set:{first_name:req.body.first_name},
            $set:{last_name:req.body.last_name},
            $set:{number1:req.body.number1},
            $set:{number2:req.body.number2},
            $set:{number3:req.body.number3} 
        });
        res.json(updatedPost);
    }catch (err){
    res.json({message:err});
    }
});
router.put('/:students', async (req,res) => {
    const PutPost = await Post.findByIdAndUpdate({_id: req.params.id}, req.body).then(function() {
        Post.findOne({_id: req.params.id}).then(function(PutPost){
        res.json(PutPost);
        })
    });
});
module.exports = router;
