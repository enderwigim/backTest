import express from "express";
import bodyParser from "body-parser";
import * as posts from './models/post.js';


// SET UP EXPRESS JS
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

// SET public AS STATIC FOLDER
app.use(express.static("public"));

// APP IS LISTENING IN PORT 3000
app.listen(port, () => {
    console.log(`Listening to port: ${port}` )
})

// GET / ROUTE
app.get("/", (req, res) => {
    res.render("newsletter.ejs",
        {
            posts : posts.posts
        }
    )
})
// GET /createPost ROUTE
app.get("/createPost", (req, res) => {
    res.render("createPost.ejs", {
        post : undefined
    })
})

// GET EDIT POST 
app.get("/editPost/:id", (req, res) => {
    const postId = req.params.id;
    const postToEdit = posts.getPostById(postId);
    res.render("editPost.ejs", {
        post: postToEdit
    })
})

// POST EDIT POST
app.post("/editPost/:id", (req, res) => {
    let title = req.body["fTitle"];
    let subtitle = req.body["fSubtitle"];
    let content = req.body["fContent"];
    let id = req.params.id;
    posts.editPost(id, title, subtitle, content);
    res.redirect("/");
})

// GET /homeGrid ROUTE
app.get("/homeGrid", (req, res) => {
    res.render("homeGrid.ejs")
})

// GET /homeFlex ROUTE
app.get("/homeFlex", (req, res) => {
    res.render("homeFlex.ejs")
})

// POST NEW POST
app.post("/submitPost", (req, res) => {
    let title = req.body["fTitle"];
    let subtitle = req.body["fSubtitle"];
    let content = req.body["fContent"];
    posts.addPost(title, subtitle, content);
    res.redirect("/");
})

// DELETE POST
app.delete("/deletePost/:id", (req, res) => {
    posts.deletePost(req.params.id);
    res.redirect("/");
});

