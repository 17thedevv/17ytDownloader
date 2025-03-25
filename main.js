document.getElementById('convert-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = document.getElementById('youtube-url').value;

    // Gửi yêu cầu tới API xử lý video
    try {
        const response = await fetch('https://your-api-endpoint.com/convert', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
        });
        const data = await response.json();
        alert('Download MP3: ' + data.downloadLink);
    } catch (error) {
        console.error('Error:', error);
    }
});