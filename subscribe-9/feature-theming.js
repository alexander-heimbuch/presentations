/* globals Event, Reveal */
import nsfw from './fixtures/nsfw.js'

// Responsive
const playerNode = document.getElementById('player-theming')

// Reveal.addEventListener('slidechanged', (event) => {
//   if (event.currentSlide.id !== 'slide-theming') {
//     return
//   }

nsfw.tabs = {
  audio: true
}

window.podlovePlayer(playerNode, nsfw).then(store => {
  let color
  store.subscribe(() => {
    const { type, payload } = store.getState().lastAction

    if (type !== 'SET_VOLUME') {
      return
    }


  })
})
// })
