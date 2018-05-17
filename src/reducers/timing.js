export const PAUSE = 'timing/PAUSE'
export const RESUME = 'timing/RESUME'

const initialState = {
  paused: false,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case PAUSE:
      return { ...state, paused: true }

    case RESUME:
      return { ...state, paused: false }

    default:
      return state
  }
}

export const pause = () => ({ type: PAUSE })

export const resume = () => ({ type: RESUME })
