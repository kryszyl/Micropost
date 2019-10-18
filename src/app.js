import { http } from './http';
import { ui } from './ui';  
//Get posts on load
document.addEventListener('DOMContentLoaded', getPosts);
document.querySelector('.post-submit').addEventListener('click', submitPost);

function getPosts() {
    http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

function submitPost(e) {
    
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    
    const data = {
        title,
        body
    }

    http.post('http://localhost:3000/posts', data)
    .then(getPosts())
    .catch(err => console.log(err))
    e.preventDefault();
}