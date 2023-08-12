const summarizeBtn = document.getElementById('summarizeBtn');
const videoUrlInput = document.getElementById('videoUrl');
const summaryDiv = document.getElementById('summary');

summarizeBtn.addEventListener('click', () => {
    const videoUrl = videoUrlInput.value;
    // Implement logic to fetch YouTube comments using APIs (similar to previous example).

    // Implement comment processing and summarization logic.
    let summarizedComments = []; // Store summarized comments here.
    let error = false;

    // ... Implement comment summarization ...

    // Display summarized comments or error message.
    if (!error) {
        summaryDiv.innerHTML = '';
        summarizedComments.forEach(comment => {
            const commentElement = document.createElement('p');
            commentElement.textContent = comment;
            summaryDiv.appendChild(commentElement);
        });
    } else {
        summaryDiv.innerHTML = '<p>Error: Could not summarize comments at the moment. Please try again later.</p>';
    }
});
