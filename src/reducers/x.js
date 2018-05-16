export const SET = 'z/SET';

const initialState = {
  value: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET:
      return { value: action.value };
    default:
      return state;
  }
}

const getRandomNumber = () => Math.floor(Math.random() * 10);

export const set = () => ({ type: SET, value: getRandomNumber() });
