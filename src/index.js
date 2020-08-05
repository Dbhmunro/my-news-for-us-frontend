StateAdapter.fetchStates()
    .then(State.renderCards)
    .then(State.createListeners)
    .then(NewsSiteAdapter.fetchNewsSites)
    .then(NewsSite.renderNewsSites)