function getArticleGenerator(articles) {
    let nextArticle = articles;

    const resultDIv = document.getElementById('content');

    return () => {
        if (nextArticle.length > 0) {
            const article = document.createElement('article');
            article.textContent = nextArticle.shift();
            resultDIv.appendChild(article);
        }
    }
}
