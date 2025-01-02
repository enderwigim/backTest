var posts = [];
var id = 0;


function addPost(title, subtitle, content){
    let post = new createPost(title, subtitle, content);
    post.id = id;
    id++;
    posts.push(post);
}
function deletePost(id){
    posts = posts.filter((post) => post.id !== id);
}
function getPostById(id){
    let findedPost = posts.filter((post) => {
        return post.id == id
    })
    return findedPost[0];
}

function createPost(title, subtitle, content){
    this.title = title;
    this.subtitle = subtitle;
    this.content = content;
}

export {
    posts,
    addPost,
    deletePost,
    getPostById
}
