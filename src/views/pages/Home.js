import React, { Component } from 'react';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';

class Home extends Component {
  render() {
    return (
      [
        <Header key="header" />,
        <Contents key="contens" />,
        <Footer key="footer" />
      ]
    );
  }
}

export default Home;
