/* global Reveal */
const slide = document.getElementById('basis-konzept')

const beschreibung = document.getElementById('player-konzept-beschreibung')
const controls = document.getElementById('player-konzept-controls')
const track = document.getElementById('player-konzept-track')
const tabs = document.getElementById('player-konzept-tabs')

let STATE = 'INIT'

function slideAnimation () {
  switch (STATE) {
    case 'INIT':
      beschreibung.className += ' split'
      STATE = 'BESCHREIBUNG'
      break
    case 'BESCHREIBUNG':
      controls.className += ' split'
      STATE = 'CONTROLS'
      break
    case 'CONTROLS':
      track.className += ' split'
      STATE = 'TRACK'
      break
    case 'TRACK':
      tabs.className += ' split'
      STATE = 'TABS'
      break
  }
}

slide.addEventListener('click', slideAnimation)
