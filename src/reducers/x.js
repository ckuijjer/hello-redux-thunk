import getRandomNumber from '../getRandomNumber'

export const SET = 'x/SET'

const initialState = {
  value: null,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET:
      return { value: action.value }
    default:
      return state
  }
}

export const set = () => ({ type: SET, value: getRandomNumber() })
