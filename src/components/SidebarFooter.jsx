import React from 'react';
import styled from 'styled-components';
import { PanelContext } from '../context/PanelContext';
import separator from '../images/separator.jpg';

const Container = styled.div`
  font-size: 0.9rem;
  text-decoration: none;
  color: #000;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    font-weight: bold;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
  & i {
    color: #6f6b6b;
    &:hover {
      transform: scale(1.2);
      color: #6969d4;
    }
  }
`;

const Copyright = styled.div`
  font-size: 0.7rem;
  font-weight: normal;
  margin-bottom: 10px;
`;

const SmallSeparator = styled.img`
  margin: 10px;
  font-weight: normal;
  width: 50%;
  height: auto;
`;

const Envelope = styled.div`
  cursor: pointer;
`;

const copyEmail = (setTextPanel) => {
  const email = 'juniordiasoli@gmail.com';
  navigator.clipboard.writeText(email);
  setTextPanel('Email copied to clipboard');
};

const SidebarFooter = () => {
  const { setTextPanel } = React.useContext(PanelContext);
  return (
    <Container>
      <p>Contact ways</p>
      <Links>
        <a href="https://github.com/wangonya" target="_blank" rel="noreferrer">
          <i className="fab fa-github" />
        </a>
        <a
          href="https://linkedin.com/in/wangonya"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin" />
        </a>
        <Envelope onClick={() => copyEmail(setTextPanel)}>
          <i className="fas fa-envelope" />
        </Envelope>
      </Links>
      <SmallSeparator src={separator} />
      <Copyright>2021 © Junior Oliveira</Copyright>
    </Container>
  );
};
export default SidebarFooter;
