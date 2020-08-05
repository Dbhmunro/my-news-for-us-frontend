class StateAdapter {
    static statesPath = "http://localhost:3000/states"

    static fetchStates() {
        return fetch(StateAdapter.statesPath)
            .then( response => response.json() )
            .then(function(stateCollection) {
                return stateCollection.forEach(function(state) {
                    return new State(state)
                });
            })
    }
}