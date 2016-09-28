import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {SocketConnectionLog} from 'components';
import {SocketMessageLog} from 'components';

export default class SocketExamplePage extends Component {
  render() {
    return (
      <div className="container">
        <h1>Socket Example Page</h1>
        <Helmet title="Socket Exapmle Page"/>
        <p>Sockets not connected</p>
        <SocketConnectionLog />
        <SocketMessageLog />
      </div>
    );
  }
}
