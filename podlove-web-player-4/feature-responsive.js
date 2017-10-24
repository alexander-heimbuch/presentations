/* globals Event, Reveal */
import logbuchNetzpolitik from './fixtures/logbuch-netzpolitik.js'

// Responsive
const playerNode = document.getElementById('player-responsive')
const infoNode = document.getElementById('player-responsive-info')

const dimensions = [{
  size: 'xl',
  width: '768px'
}, {
  size: 'l',
  width: '590px'
}, {
  size: 'm',
  width: '375px'
}, {
  size: 's',
  width: '320px'
}, {
  size: 'xs',
  width: '250px'
}]

playerNode.style.width = dimensions[0].width
infoNode.textContent = dimensions[0].size + ` (${dimensions[0].width})`

logbuchNetzpolitik.tabs = {
  chapters: true
}

window.podlovePlayer(playerNode, logbuchNetzpolitik).then(store => {
  let counter = 1

  setTimeout(() => window.dispatchEvent(new Event('resize')), 500)

  setInterval(() => {
    playerNode.style.width = dimensions[counter].width
    infoNode.textContent = dimensions[counter].size + ` (${dimensions[counter].width})`
    counter += 1

    if (counter > dimensions.length - 1) {
      counter = 0
    }

    window.dispatchEvent(new Event('resize'))
  }, 3000)
})
