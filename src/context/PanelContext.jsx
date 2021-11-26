import PropTypes from 'prop-types';
import React, { createContext } from 'react';

export const PanelContext = createContext();

export const PanelProvider = ({ children }) => {
  const [text, setText] = React.useState('');

  const setTextPanel = (newText) => {
    setText(newText);
  };

  const value = React.useMemo(() => ({ text, setTextPanel }));

  return (
    <PanelContext.Provider value={value}>{children}</PanelContext.Provider>
  );
};

PanelProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
