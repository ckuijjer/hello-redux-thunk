import getRandomNumber from '../getRandomNumber'
import wait from '../wait'

export const GENERATING = 'z/GENERATING'
export const GENERATED = 'z/GENERATED'

const DURATION = 2000

const initialState = {
  value: null,
  loading: false,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GENERATING:
      return { value: null, loading: true }
    case GENERATED:
      return { value: action.value, loading: false }
    default:
      return state
  }
}

export const set = () => async dispatch => {
  dispatch({ type: GENERATING })

  await wait(DURATION)

  dispatch({ type: GENERATED, value: getRandomNumber() })
}
