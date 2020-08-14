class NewsSiteAdapter {
    static newsSitesPath = "http://localhost:3000/news_sites"
    static newsSitePath = (id) => NewsSiteAdapter.newsSitesPath + `/${id}`

    static fetchNewsSites() {
        return fetch(NewsSiteAdapter.newsSitesPath)
            .then( response => response.json())
            .then(function(newsSiteCollection) {
                return newsSiteCollection.forEach(function(newsSite) {
                    return new NewsSite(newsSite)
                });
            })
    }

    static createNewsSite({state_abbreviation, locality, name, url, news_outlet}) {
        return fetch(NewsSiteAdapter.newsSitesPath, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                news_site: {
                    state_abbreviation,
                    locality,
                    name,
                    url,
                    news_outlet
                }
            })
        })
        .then(function (responseObject) {
            return responseObject.json()
        })
        .then(function(newsSite) {
            return new NewsSite(newsSite)
        })
        .then(function(site) {
            return site.renderEntry()
        })
    }

    static deleteNewsSite(id) {
        return fetch(NewsSiteAdapter.newsSitePath(id), {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
    }
}