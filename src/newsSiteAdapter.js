class NewsSiteAdapter {
    static newsSitesPath = "http://localhost:3000/news_sites"
    static newsSitePath = (id) => newsSitesPath + `${id}`

    static fetchNewsSites() {
        return fetch(NewsSiteAdapter.newsSitesPath)
            .then( response => response.json())
            .then(function(newsSiteCollection) {
                return newsSiteCollection.forEach(function(newsSite) {
                    return new NewsSite(newsSite)
                });
            })
    }
}