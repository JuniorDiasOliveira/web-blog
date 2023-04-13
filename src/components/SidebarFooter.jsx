import React from "react";
import styled from "styled-components";
import { PanelContext } from "../context/PanelContext";
import separator from "../images/separator.jpg";

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

const eventTexts = {
  cv: "My CV :) ",
  copyEmail: "Email copied to clipboard",
  email: "Click to copy the email",
  github: "Github",
  linkedin: "LinkedIn",
};

const SidebarFooter = () => {
  const { setTextPanel } = React.useContext(PanelContext);

  const onMouseEnter = (text) => {
    if (text) {
      setTextPanel(eventTexts[text]);
      return;
    }
    setTextPanel("");
  };

  const copyEmail = () => {
    const email = "juniordiasoli@gmail.com";
    navigator.clipboard.writeText(email);
    setTextPanel(eventTexts.copyEmail);
    setTimeout(() => {
      setTextPanel("");
    }, 1000);
  };

  return (
    <Container>
      <p>Find more about me:</p>
      <Links>
        <a
          href="https://github.com/wangonya"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => onMouseEnter("github")}
          onMouseLeave={() => onMouseEnter("")}
        >
          <i className="fab fa-github" />
        </a>
        <a
          href="https://linkedin.com/in/wangonya"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => onMouseEnter("linkedin")}
          onMouseLeave={() => onMouseEnter("")}
        >
          <i className="fab fa-linkedin" />
        </a>
        <Envelope
          onClick={() => copyEmail()}
          onMouseEnter={() => onMouseEnter("email")}
          onMouseLeave={() => onMouseEnter("")}
        >
          <i className="fas fa-envelope" />
        </Envelope>
        <a
          href="https://linkedin.com/in/wangonya"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => onMouseEnter("cv")}
          onMouseLeave={() => onMouseEnter("")}
        >
          <i className="fas fa-file-alt" />
        </a>
      </Links>
      <SmallSeparator src={separator} />
      <Copyright>2023 © Junior Oliveira</Copyright>
    </Container>
  );
};
export default SidebarFooter;
