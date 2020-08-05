class State {
    static all = []

    constructor({abbreviation, name}) {
        this.abbreviation = abbreviation
        this.name = name
        this.newsSites = []

        State.all.push(this)
    }

    renderCard() {
        const cardContainer = document.querySelector('div.results')
        this.card = document.createElement('div')
        this.card.id = this.abbreviation
        this.card.className = 'card'
        this.card.innerHTML = `
                <h3>${this.name}</h3>
                <ul></ul>
                <p>Don't see your local site? <button showingForm=false>Add one for ${this.abbreviation}</button></p>
            `
        // cardContainer.innerHTML += `
        //     <div class='card' id=${this.abbreviation}>
        //         <h3>${this.name}</h3>
        //         <ul></ul>
        //         <p>Don't see your local site? <button showingForm=false>Add one for ${this.abbreviation}</button></p>
        //     </div>
        // `
        cardContainer.appendChild(this.card)
        // this.card = document.getElementById(this.abbreviation) //this.card needs to be set to the creation of the element (document.createElement('div'))
        this.siteList = this.card.getElementsByTagName('ul')[0]
        return this.card
    }

    static renderCards() {
        return State.all.forEach(function(state) {
            return state.renderCard()
        })
    }

    static createListeners() {
        return State.all.forEach(function(state) {
            debugger
        })
    }
}