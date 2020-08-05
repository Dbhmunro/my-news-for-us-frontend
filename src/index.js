StateAdapter.fetchStates()
    .then(State.renderCards)
    .then(NewsSiteAdapter.fetchNewsSites)
    .then(NewsSite.renderNewsSites)