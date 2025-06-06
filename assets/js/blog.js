document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('medium-posts');
    const feedURL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@vkamma';
    fetch(feedURL)
        .then(response => response.json())
        .then(data => {
            data.items.filter(item => item.categories.length > 0).forEach(item => {
                const div = document.createElement('div');
                div.className = 'mb-4';
                div.innerHTML = `<h4><a href="${item.link}" target="_blank">${item.title}</a></h4>` +
                    `<p class="text-muted">${new Date(item.pubDate).toLocaleDateString()}</p>`;
                container.appendChild(div);
            });
        })
        .catch(error => {
            container.innerHTML = '<p>Unable to load articles at this time.</p>';
        });
});
