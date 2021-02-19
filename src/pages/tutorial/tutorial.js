import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Api from '../../services/api';
import { Link } from "react-router-dom";

import './styles.scss';

export default class Ranking extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}
