/* globals Event, Reveal */
import nsfw from './fixtures/nsfw.js'

// Responsive
const playerNode = document.getElementById('player-theming')

Reveal.addEventListener('slidechanged', (event) => {
  if (event.currentSlide.id !== 'slide-theming') {
    return
  }

  nsfw.tabs = {
    audio: true
  }

  const themes = [
    '#FF00FF', '#6666FF', '#FF9966', '#3333FF', '#0099FF', '#33CCCC', '#009966', '#336633', '#0000CC', '#003399', '#9933FF', '#CCFF33', '#3399CC', '#66CC99', '#000066', '#33FF33',
    '#33FF33', '#CCFF66', '#3300FF', '#333333', '#CC99FF', '#666600', '#66CC66', '#33FF33', '#FF99CC', '#66FF66', '#33CC66', '#33CCFF', '#0066FF', '#FF0066', '#660099', '#FFFFCC'
  ]

  window.podlovePlayer(playerNode, nsfw).then(store => {
    let red = '00'
    let blue = '00'
    let theme = nsfw.theme

    const validTypes = ['SET_RATE', 'SET_VOLUME', 'SET_THEME', 'UPDATE_CHAPTER']


    store.subscribe(() => {
      const { type, payload } = store.getState().lastAction

      if (!~validTypes.indexOf(type)) {
        return
      }

      if (type === 'SET_THEME') {
        main = payload.main || null
        return
      }

      if (type === 'UPDATE_CHAPTER') {
        store.getState().chapters.map((chapter, index) => {
          if (chapter.active) {
            theme.main = themes[index]
          }
        })
      }

      if (type === 'SET_VOLUME') {
        red = parseInt(parseFloat(payload, 10) * 100).toString(16)
        theme.highlight = `#${red}00${blue}`
      }

      if (type === 'SET_RATE') {
        blue = parseInt((parseFloat(payload, 10) * 100) /4 ).toString(16)
        theme.highlight = `#${red}00${blue}`
      }

      store.dispatch({
        type: 'SET_THEME',
        payload: theme
      })
    })
  })
})
