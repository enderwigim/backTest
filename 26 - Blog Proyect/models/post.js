var posts = [];
var id = 0;


function addPost(title, subtitle, content){
    let post = new createPost(title, subtitle, content);
    post.id = id;
    id++;
    posts.push(post);
}
function deletePost(id){
    posts = posts.filter((post) => post.id != id);
}
function getPostById(id){
    let findedPost = posts.filter((post) => {
        return post.id == id
    })
    return findedPost[0];
}
function editPost(id, title, subtitle, content){
    // CREATE NEW POST
    let newPost = new createPost(title, subtitle, content);

    // EDIT POST
    let post = getPostById(id);
    post.title = newPost.title;
    post.subtitle = newPost.subtitle;
    post.content = newPost.content;
}

function createPost(title, subtitle, content){
    this.title = title;
    this.subtitle = subtitle;
    this.content = content;
}

export {
    createPost,
    posts,
    addPost,
    deletePost,
    getPostById,
    editPost
}
