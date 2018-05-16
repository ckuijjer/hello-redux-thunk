import styled, { keyframes } from 'react-emotion';

const pulsate = keyframes`
  0% {
    background-color: #fbfbfb;
  }
  50% {
    background-color: #ddd;
  }
  100 {
    background-color: #fbfbfb;
  }
`;

const Element = styled('div')`
  color: #666;
  background-color: #fbfbfb;
  font-size: 48px;
  border: 1px solid #999;
  border-radius: 4px;
  padding: 24px;
  margin: 24px;
  min-width: 40px;
  text-align: center;
  animation: ${props => (props.loading ? pulsate : 'none')} 2s infinite;
`;

export default Element;
