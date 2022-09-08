const express = require("express");

const router = express.Router();

const Post = require("../models/post");

//Avoir Toutes les Articles  
router.get('/',async (req,res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err})
    }
});


// Poster un Article 
router.post('/',async (req,res)=>{
    const post = new Post ({
      title: req.body.title,
      description: req.body.description
    });

try{
    const savedPost = await post.save();
    
        res.json(savedPost);

    }catch(err){
        res.json({message:err });
    
   

}});

// Article avec ID 
router.get('/:postId',async (req,res)=>{
    try{
        const post = await Post.findById(req.params.postId) ;
        res.json(post);
    }catch(err){
        res.json({message:err})
    }
});

//Supprimer Article 

router.delete('/:postId',async (req,res)=>{
    try{
        const suppPost = await Post.remove({_id: req.params.postId}) ;
        res.json(suppPost);
    }catch(err){
        res.json({message:err})
    }
});


//Modifier article 

router.patch('/:postId',async (req,res)=>{
    try{
        const suppPost = await Post.updateOne(
             {_id: req.params.postId},
             {$set:{title:req.body.title},$set:{description:req.body.description}})
        res.json(suppPost);
    }catch(err){
        res.json({message:err})
    }
});

module.exports = router;