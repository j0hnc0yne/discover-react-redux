import React, { Component } from 'react';
import {company} from './resources/app-config';
import Footer from './FooterClass';

import 'bootstrap/dist/css/bootstrap.css';
import DemosManager from './demos/DemosManager';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Discover Fake Banking Services</h1>
          <small>Serving Chicagoland since Tuesday morning</small>
          <hr/>
        </header>

        <div className="row">
          <div className="col">
            <DemosManager />
          </div>
        </div>

        {/* <Footer company="Some Company"/> */}
        <Footer company={company.name}/>
      </div>
    );
  }
}

export default App;
