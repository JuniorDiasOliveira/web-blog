import React from 'react';
import { Helmet } from 'react-helmet';
import { PanelProvider } from '../context/PanelContext';
import Sidebar from '../components/Sidebar';
import '../styles/reset.css';
import '../styles/normalize.css';
import '../styles/base.css';

const Index = () => (
  <>
    <Helmet>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
        crossOrigin="anonymous"
      />
    </Helmet>
    <PanelProvider>
      <Sidebar />
    </PanelProvider>
  </>
);

export default Index;
