import React from 'react';
import styled from 'styled-components';
import { PanelContext } from '../context/PanelContext';

const Panel = styled.p`
  font-size: 1.5rem;
  text-align: center;
  opacity: ${({ showText }) => (showText ? 1 : 0)};
  padding-right: 10px;
  padding-left: 10px;
`;

const InteractivePanel = () => {
  const { text, setTextPanel } = React.useContext(PanelContext);
  const [showText, setShowText] = React.useState(false);

  React.useEffect(() => {
    setShowText(!!text);
    setTextPanel(text);
  }, [text]);

  return <Panel showText={showText}>{text}</Panel>;
};

export default InteractivePanel;
