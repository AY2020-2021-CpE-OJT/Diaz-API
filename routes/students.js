const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req,res)=> {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }
});
router.post('/',(req,res)=>{
    const post = new Post({
        Name: req.body.Name,
        Course: req.body.Course,
        Year: req.body.Year
    }) 
    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    });
});
module.exports = router;
