import React from 'react';
import styled from 'styled-components';
import { PanelContext } from '../context/PanelContext';

const Panel = styled.p`
  font-size: 1.5rem;
  text-align: center;
  opacity: ${({ showText }) => (showText ? 1 : 0)};
  transition: opacity 1.5s;
`;

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const InteractivePanel = () => {
  const { text, setTextPanel } = React.useContext(PanelContext);
  const [showText, setShowText] = React.useState(false);

  React.useEffect(() => {
    if (text) {
      setShowText(true);
      wait(3000)
        .then(() => setShowText(false))
        .then(() => wait(1500))
        .then(() => setTextPanel(''));
    }
  }, [text]);

  return <Panel showText={showText}>{text}</Panel>;
};

export default InteractivePanel;
