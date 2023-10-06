const form = document.querySelector('#post-form');
const input = document.querySelector('#post-input');
const postsContainer = document.querySelector('#posts-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const postContent = input.value;

  if (postContent.trim() !== '') {
    createPost(postContent);
    input.value = '';
  }
});

function createPost(content) {
  const post = {
    content: content,
    timestamp: new Date().toLocaleString()
  };

  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push(post);
  localStorage.setItem('posts', JSON.stringify(posts));

  updatePosts();
}

function updatePosts() {
  postsContainer.innerHTML = '';

  let posts = JSON.parse(localStorage.getItem('posts')) || [];

  posts.forEach((post) => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
          <p>${post.content}</p>
          <small>${post.timestamp}</small>
        `;

    postsContainer.appendChild(postElement);
  });
}

updatePosts();