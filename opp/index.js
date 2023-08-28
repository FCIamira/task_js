// class user{
//     area(){};
// }
// class Circle extends shap{
//     constructor(r){
//         super();
//         this.radius = r;

//     }
//     area(){
//         return Math.PI * this.radius ** 2;
//     }
// }
// class Rectangle extends shap{
//     constructor(w,h){
//         super();
//         this.width = w;
//         this.heidth = h;

//     } 
//     area(){
//         return this.width * this.heidth ;
//     }
// }
// const shapes = [new Circle(2),new Rectangle(10,5)];
// shapes.forEach(item => console.log(item.area()));
////////////////////////////////////////task*//////////////////////////
//////////////////////////////////user Class//////////////////

class user{
    constructor(username,bio){
        this.username  =username;
        this.bio  =bio;
        this.posts = [];
        this.followers = [];

    };
    createPost(content) {
        const newPost = new Post(content);
        this.posts.push(newPost);
        return newPost;
    }
    follow(user) {
        this.followers.push(user);
    
}
    likePost(post) {
        post.addLike(this);
    }

    commentOnPost(post, comment) {
        post.addComment(this, comment);
    }

}
//////////////////////////////////post Class//////////////////

class Post {
    constructor(content) {
        this.content = content;
        this.likes = [];
        this.comments = [];
    };
 addLike(user) {
            this.likes.push(user);
    }

    addComment(user, comment) {
        const newComment = {
            user: user,
            comment: comment
        };

    }
}
//////////////////////////////////Comment Class//////////////////

class Comment {
    constructor(author, text) {
        this.author = author;
        this.text = text;
    }
}





