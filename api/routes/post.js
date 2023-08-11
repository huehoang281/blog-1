
const  router = require("express").Router();
const User =  require("../model/User");
const Post =  require("../model/Post");

// Create post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost =  await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
    
});


// Update post
router.put("/:id", async (req, res) => {
    try{
        const post = Post.findById(req.params.id);
        
            if(post.username === req.body.username){

                try{
                    const updatePost =await Post.findByIdAndUpdate(
                        req.params.id,
                         {
                        $set:req.body
                    }, 
                    { new: true }
                    );
                    res.status(200).json(updatePost);

                } catch(err){
                    res.status(500).json(err);
                }

                } else {
                    res.status(401).json("You can update only your Post!");

                }
            } catch(err) {
                res.status(500).json(err);



        }
    }
);
// Delete post
router.delete("/:id", async (req, res) => {
    try{
        const post = Post.findById(req.params.id);
        
            if(post.username === req.body.username){

                try{
                    await post.delete();
                    res.status(200).json("post has been delete...");

                } catch(err){
                    res.status(500).json(err);
                }

                } else {
                    res.status(401).json("You can delete only your Post!");

                }
            } catch(err) {
                res.status(500).json(err);



        }
    }
);


// Get post
router.get("/:id", async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch(err) {
        res.status(500).json(err);
    }
});

// Get all post
router.get("/", async (req,res) => {
    const username = req.query.user;
    const catName = req.query.cat; 

    try{
        let post;
        if(username){
            post = await Post.find({username})
        }else if(catName){
            post = await Post.find({
                categories:{
                $in:[catName],
            },
        });
        }else{
            post =  await Post.find();
        }

        res.status(200).json(post);
        

    } catch(err) {
        res.status(500).json(err);
    }
});


module.exports = router;
 