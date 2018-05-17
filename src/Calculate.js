import React from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';

import Element from './Element';
import Button from './Button';

import { set } from './reducers/sum';
import { pause, resume } from './reducers/timing';

const Container = styled('div')({});

const Centered = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const Calculate = ({ x, y, z, sum, calculate, paused, toggle }) => (
  <Container>
    <Centered>
      <Element>{x.value}</Element>
      <Element>+</Element>
      <Element loading={y.loading}>{y.value}</Element>
      <Element>+</Element>
      <Element loading={z.loading}>{z.value}</Element>
      <Element>=</Element>
      <Element loading={sum.loading}>{sum.value}</Element>
    </Centered>
    <Centered>
      <Button onClick={() => calculate()}>Calculate</Button>
      <Button onClick={() => toggle()}>{paused ? '▶️' : '⏸'} </Button>
    </Centered>
  </Container>
);

const mapStateToProps = ({ x, y, z, sum, timing }) => ({
  x,
  y,
  z,
  sum,
  paused: timing.paused,
});

const mapDispatchToProps = dispatch => ({
  calculate: () => dispatch(set()),
  dispatch,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { paused } = stateProps;
  const action = paused ? resume : pause;

  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    toggle: () => dispatch(action()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
  Calculate
);
