import React from 'react';
import styled from 'styled-components';
import me from '../images/me.png';
import SidebarFooter from './SidebarFooter';
import separator from '../images/separator.jpg';
import InteractivePanel from './InteractivePanel';

const Me = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const Name = styled.h1`
  font: 400 18px roboto, sans-serif;
  font-size: 1.4rem;
  line-height: 0;
`;

const Separator = styled.img`
  width: 90%;
  margin: 10px 0;
`;

const Description = styled.p`
  line-height: 1.5;
  font-size: 0.8rem;
  text-align: center;
  padding: 0 5px 0 5px;
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const FixedContent = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  border: 1px solid #eaeaea;
  background-color: white;
  width: 240px;
`;

const Container = styled.div`
  width: 240px;
  grid-column: 1/1;
  background-color: white;
  z-index: 1;
`;

const Sidebar = () => (
  <Container>
    <FixedContent>
      <AboutMe>
        <Me src={me} />
        <Name>Junior Oliveira</Name>
        <Separator src={separator} />
        <Description>
          A front-end developer focused on best practices and always trying to
          learn something new
        </Description>
      </AboutMe>
      <InteractivePanel />
      <SidebarFooter />
    </FixedContent>
  </Container>
);
export default Sidebar;
