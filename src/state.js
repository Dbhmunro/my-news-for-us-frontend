class State {
    static all = []

    constructor({abbreviation, name}) {
        this.abbreviation = abbreviation
        this.name = name

        State.all.push(this)
    }

    renderCard() {
        const cardContainer = document.querySelector('div.results')
        return cardContainer.innerHTML += `
            <div class='card' id=${this.abbreviation}>
                <h3>${this.name}</h3>
                <ul></ul>
                <p>Don't see your local site? <button>Add one for ${this.abbreviation}</button></p>
            </div>
        `
    }

    static renderCards() {
        return State.all.forEach(function(state) {
            return state.renderCard()
        })
    }
}