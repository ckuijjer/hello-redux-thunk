import { set as setX } from './x';
import { set as setY } from './y';

export const GENERATING = 'sum/GENERATING';
export const GENERATED = 'sum/GENERATED';

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

export const set = () => (dispatch, getState) => {
  dispatch({ type: GENERATING });

  Promise.all([dispatch(setX()), dispatch(setY())]).then(() => {
    const { x, y } = getState();

    dispatch({ type: GENERATED, value: x.value + y.value });
  });
};
