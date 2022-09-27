// @ts-nocheck
import React from "react"
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Intro from '../components/Intro/intro';
import MainPanel from '../components/Main/Main';
import GlobalStyle from '../assets/styles/globalStyles';
import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  height: 100vh - 50px;
  margin: 0 auto;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
`;


const MainLayout = ({ children }) => (
  <Container>
    <GlobalStyle />
    <Header>
      <Intro />
      <Navigation />
    </Header>
    <MainPanel>
      {children}
    </MainPanel>
    <Footer />
  </Container>
)

export default MainLayout;