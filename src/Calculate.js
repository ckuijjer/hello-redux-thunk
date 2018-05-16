import React from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';

import Element from './Element';
import Button from './Button';

import { set } from './reducers/sum';

const Container = styled('div')({});

const Centered = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const Calculate = ({ x, y, z, sum, calculate }) => (
  <Container>
    <Centered>
      <Element loading={x.loading}>{x.value}</Element>
      <Element>+</Element>
      <Element loading={y.loading}>{y.value}</Element>
      <Element>+</Element>
      <Element loading={z.loading}>{z.value}</Element>
      <Element>=</Element>
      <Element loading={sum.loading}>{sum.value}</Element>
    </Centered>
    <Centered>
      <Button onClick={() => calculate()}>Calculate</Button>
    </Centered>
  </Container>
);

const mapStateToProps = ({ x, y, z, sum }) => ({
  x,
  y,
  z,
  sum,
});

const mapDispatchToProps = dispatch => ({
  calculate: () => dispatch(set()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculate);
