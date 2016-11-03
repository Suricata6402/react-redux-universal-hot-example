import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class SocketExamplePage extends Component {
  render() {
    return (
      <div className="container">
        <h1>Socket Exapmle Page</h1>
        <Helmet title="Socket Exapmle Page"/>
        <p>Sockets not connected</p>
      </div>
    );
  }
}
