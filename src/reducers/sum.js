import { set as setX } from './x';
import { set as setY } from './y';
import { set as setZ } from './z';
import wait from '../wait';

const DURATION = 3000;

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

export const set = () => async (dispatch, getState) => {
  dispatch({ type: GENERATING });

  await wait(DURATION);

  await Promise.all([dispatch(setX()), dispatch(setY()), dispatch(setZ())]);

  const { x, y, z } = getState();

  dispatch({ type: GENERATED, value: x.value + y.value + z.value });
};
