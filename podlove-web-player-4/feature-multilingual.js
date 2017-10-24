/* globals Event */
import raumzeit from './fixtures/raumzeit.js'

// Responsive
const playerNode = document.getElementById('player-multilingual')

raumzeit.tabs = {
  info: true
}

const languages = ['de', 'en', 'eo']

raumzeit.runtime = {
  language: languages[0]
}

window.podlovePlayer(playerNode, raumzeit).then(store => {
  let counter = 1

  setTimeout(() => window.dispatchEvent(new Event('resize')), 500)

  setInterval(() => {
    raumzeit.runtime.language = languages[counter]

    store.dispatch({
      type: 'INIT',
      payload: raumzeit
    })

    counter += 1

    if (counter > languages.length - 1) {
      counter = 0
    }
  }, 3000)
})
