// @ts-nocheck
import React from "react"
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import Intro from '../components/Intro/intro';
import Intro2 from '../components/Intro2/intro2';
import Intro3 from '../components/Intro3/intro3';
import MainPanel from '../components/Main/Main';
import GlobalStyle from '../assets/styles/globalStyles';
import { Container, Header, Header2, Header3 } from './index-css';

const MainLayout = ({ children }) => (
  <Container>
    <GlobalStyle />
    <Header>
      <Intro />
      <Navigation />
    </Header>
    <Header2>
      <Intro2 />
      <Navigation />
    </Header2>
    <Header3>
      <Intro3 />
      <Navigation />
    </Header3>
    <MainPanel>
      {children}
    </MainPanel>
    <Footer />
  </Container>
)

export default MainLayout;