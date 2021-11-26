import React from 'react';
import styled from 'styled-components';
import me from '../images/me.png';
import SidebarFooter from './SidebarFooter';
import separator from '../images/separator.jpg';
import InteractivePanel from './InteractivePanel';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #eaeaea;
  width: 240px;
  height: 100vh;
`;

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
  width: 100%;
  margin: 10px 0;
`;

const Description = styled.p`
  line-height: 1.5;
  font-size: 0.9rem;
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

const Sidebar = () => (
  <Container>
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
  </Container>
);
export default Sidebar;
