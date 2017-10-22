/* globals Event */
import fokusEuropa from './fixtures/fokus-europa.js'

// Responsive
const playerNode = document.getElementById('player-orientierung')

fokusEuropa.tabs = {
  chapters: true
}

window.podlovePlayer(playerNode, fokusEuropa).then(store => {
  store.dispatch({
    type: 'UI_PLAY'
  })

  store.dispatch({
    type: 'UI_PAUSE'
  })

  store.dispatch({
    type: 'LOAD_QUANTILES',
    payload: [
      [0, 1000]
    ]
  })

  setTimeout(() => window.dispatchEvent(new Event('resize')), 500)
})
