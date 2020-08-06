class NewsSite {
    static all = []

    constructor({state_abbreviation, name, locality, news_outlet, url, broken_link}) {
        this.state = State.all.find( state => state.abbreviation === state_abbreviation )
        this.name = name
        this.locality = locality
        this.newsOutlet = news_outlet
        this.url = url
        this.brokenLink = broken_link

        NewsSite.all.push(this)
        this.state.newsSites.push(this)
    }

    renderEntry() {
        this.entry = document.createElement('li')
        this.entry.innerHTML = `
            <spread class='locality'>${this.locality}</spread> - <spread class='name'><a target="_blank" href=${this.url}>${this.name}</a></spread> - <spread class='newsOutlet'>${this.newsOutlet}</spread>
        `
        this.state.siteList.appendChild(this.entry)
        return this.entry
    }

    static renderNewsSites() {
        return NewsSite.all.forEach(function(newsSite) {
            return newsSite.renderEntry()
        })
    }

    static submitNewSiteForm(e) {
        e.preventDefault()
        // debugger
        let site = {
            "state_abbreviation": this.elements.state_abbreviation.value,
            "locality": this.elements.locality.value,
            "name": this.elements.name.value,
            "url": this.elements.url.value,
            "news_outlet": this.elements.news_outlet.value
        }
        NewsSiteAdapter.createNewsSite(site)
        this.reset()
        this.parentElement.getElementsByTagName('button')[0].click()
        return site
    }
}