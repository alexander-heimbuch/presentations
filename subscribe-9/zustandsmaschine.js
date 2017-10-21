import playerConfig from './fixtures/freakshow.js'

const tree = window['d3-state-visualizer'].default.tree

// Slide 2
const playerTreeNode = document.getElementById('zustandsmaschine-tree')
const stateTreeNode = document.getElementById('zustandsmaschine-state-tree')

const stateVisualizer = tree(stateTreeNode, {
    state: undefined,
    isSorted: true,
    heightBetweenNodesCoeff: 3,
    widthBetweenNodesCoeff: 3,
    tooltipOptions: {
        disabled: true
    },
    style: {
        left: '50%',
        top: '50%',
        width: '100%',
        height: '100%',
        node: {
            colors: {
                default: '#A1C659',
                collapsed: '#A1C659',
                parent: '#D381C3'
            },
            radius: 7
        },
        text: {
            colors: {
                'default': '#6FB3D2',
                hover: '#000'
            }
        }
    },
    rootKeyName: 'player',
    transitionDuration: 700,
    initialZoom: 0.3
})

const animationSteps = (state) => {
    let animateState = {}
    const animationSteps = []

    Object.keys(state).forEach((key) => {
        animateState = Object.assign({}, animateState, { [key]: state[key] })
        animationSteps.push(animateState)
    })

    return animationSteps
}

const animateTree = (steps) => {
    if (steps.length === 0) {
        return
    }

    stateVisualizer(steps.shift())

    setTimeout(() => {
        animateTree(steps)
    }, 700)
}

window.podlovePlayer(playerTreeNode, playerConfig).then((store) => {
    const unsubscribe = store.subscribe(() => {
        if (store.getState().playstate === 'playing') {
            animateTree(animationSteps(store.getState()))
            playerTreeNode.className += ' hide'
            unsubscribe()
            store.dispatch({ type: 'UI_PAUSE' })
        }
    })
})

// Slide 3
const playerActionNode = document.getElementById('zustandsmaschine-action');
