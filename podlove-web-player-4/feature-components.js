/* globals Event */
import newzOfTheWorld from './fixtures/newz-of-the-world.js'

// Responsive
const playerNode = document.getElementById('player-components')
const visibleComponents = document.querySelectorAll('[data-visible-component]')

const getVisibleComponents = (inputs) => {
  const components = []

  inputs.forEach(input => {
    if (!input.checked) {
      return
    }

    components.push(input.dataset.visibleComponent)
  })

  return components
}

newzOfTheWorld.visibleComponents = []

window.podlovePlayer(playerNode, newzOfTheWorld).then(store => {
  store.dispatch({
    type: 'UI_PLAY'
  })

  store.dispatch({
    type: 'UI_PAUSE'
  })

  visibleComponents.forEach((component) => {
    component.addEventListener('click', () => {
      newzOfTheWorld.visibleComponents = getVisibleComponents(visibleComponents)
      store.dispatch({
        type: 'INIT',
        payload: newzOfTheWorld
      })
    })
  })
})
