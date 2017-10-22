/* globals Event */
import forschergeist from './fixtures/forschergeist.js'

// Responsive
const playerNode = document.getElementById('player-sharing')

forschergeist.tabs = {
  share: true
}

window.podlovePlayer(playerNode, forschergeist).then(store => {
  store.dispatch({
    type: 'UI_PLAY'
  })

  store.dispatch({
    type: 'UI_PAUSE'
  })

  store.dispatch({
    type: 'UPDATE_PLAYTIME',
    payload: 600
  })

  setTimeout(() => window.dispatchEvent(new Event('resize')), 500)
})
