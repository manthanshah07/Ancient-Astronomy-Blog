// Like button functionality
let likeCount = 0;
function toggleLike() {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
}

// Comment functionality
function submitComment() {
    const commentText = document.getElementById('comment-input').value;
    if (commentText.trim()) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<p><strong>User:</strong> ${commentText}</p>`;
        document.getElementById('comments-list').appendChild(commentElement);
        document.getElementById('comment-input').value = ''; // Clear the input
    }
}
