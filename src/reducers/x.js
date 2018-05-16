export const GENERATING = 'x/GENERATING';
export const GENERATED = 'x/GENERATED';

const DURATION = 4000;

const initialState = {
  value: null,
  loading: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GENERATING:
      return { value: null, loading: true };
    case GENERATED:
      return { value: action.value, loading: false };
    default:
      return state;
  }
}

const getRandomNumber = () => Math.floor(Math.random() * 10);

export const set = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch({ type: GENERATING });

    window.setTimeout(() => {
      dispatch({ type: GENERATED, value: getRandomNumber() }), resolve();
    }, DURATION);
  });
