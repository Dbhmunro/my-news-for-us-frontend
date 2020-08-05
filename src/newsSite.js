class NewsSite {
    static all = []

    constructor({state_abbreviation, name, locality, news_outlet, url, broken_link}) {
        this.state_abbreviation = state_abbreviation
        this.name = name
        this.locality = locality
        this.newsOutlet = news_outlet
        this.url = url
        this.brokenLink = broken_link

        NewsSite.all.push(this)
    }

    renderEntry() {
        const ul = document.getElementById(`${this.state_abbreviation}`).getElementsByTagName('ul')[0]
        return ul.innerHTML += `
            <li><spread class='locality'>${this.locality}</spread> - <spread class='name'><a href=${this.url}>${this.name}</a></spread> - <spread class='newsOutlet'>${this.newsOutlet}</spread></li>
        `
    }

    static renderNewsSites() {
        return NewsSite.all.forEach(function(newsSite) {
            return newsSite.renderEntry()
        })
    }
}