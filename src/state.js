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
                <form></form>
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
        this.addSiteButton = this.card.getElementsByTagName('button')[0]
        this.form = this.card.getElementsByTagName('form')[0]
        return this.card
    }

    static renderCards() {
        return State.all.forEach(function(state) {
            return state.renderCard()
        })
    }

    static createListeners() {
        return State.all.forEach(function(state) {
            state.addSiteButton.addEventListener('click', state.toggleNewSiteForm.bind(state))
            state.form.addEventListener('submit', NewsSite.submitNewSiteForm)
        })
    }

    toggleNewSiteForm(e) {
        let showingForm = e.target.attributes[0].value
        // debugger
        if ( showingForm === "true" ) {
            e.target.attributes[0].value = "false"
            this.form.innerHTML = ""
        } else {
            e.target.attributes[0].value = "true"
            this.form.innerHTML = `
                    <input type="hidden" id="state_abbreviation" value=${this.abbreviation}>
                    <label for="locality">Locality:</label>
                    <input type="text" id="locality" name="locality">   
                    <label for="name">Site Name:</label>
                    <input type="text" id="name" name="name">
                    <label for="url">Site URL:</label>
                    <input type="text" id="url" name="url">
                    <label for="news_outlet">News Outlet:</label>
                    <input type="text" id="news_outlet" name="news_outlet">
                    <input type="submit" value="Submit">
                    </br>
                `
        }
    }

}