import { http } from './http';
import { ui } from './ui';  
//Get posts on load
document.addEventListener('DOMContentLoaded', getPosts);
document.querySelector('.post-submit').addEventListener('click', submitPost);

document.querySelector('.posts').addEventListener('click', deletePost)

function getPosts() {
    http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

function submitPost() {
    
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;
    
    const data = {
        title,
        body
    }

    http.post('http://localhost:3000/posts', data)
    .then(() => {
        ui.showAlert('Post added', 'alert alert-success');
        getPosts()
    })
    .catch(err => console.log(err))
}

function deletePost(e) {
    if (e.target.parentElement.classList.contains('delete')) {
        const id = e.target.parentElement.dataset.id;
        if (confirm('Are you sure?')) {
            http.delete(`http://localhost:3000/posts/${id}`)
            .then(() => {
                ui.showAlert('Post removed', 'alert alert-success');
                getPosts();
            })
            .catch(err => console.log(err))
        }
    }
    e.preventDefault();
}