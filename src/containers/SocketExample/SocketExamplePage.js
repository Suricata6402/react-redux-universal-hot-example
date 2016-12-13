import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {SocketConnectionLog} from 'components';
import {SocketMessageLog} from 'components';
import * as socketExampleActions from 'redux/modules/socketexamplemodule';

@connect(
  state => ({
    loaded: state.socketexample.loaded,
    message: state.socketexample.message,
    connected: state.socketexample.connected,
    history: state.socketexample.history
  }),
  socketExampleActions)

export default class SocketExamplePage extends Component {
  static propTypes = {
    loaded: PropTypes.bool,
    message: PropTypes.string,
    connected: PropTypes.bool,
    history: PropTypes.array,
    socketsConnecting: PropTypes.func,
    socketsDisconnecting: PropTypes.func,
    socketsConnect: PropTypes.func,
    socketsDisconnect: PropTypes.func
  }
  render() {
    const {loaded, message, connected, socketsConnecting, socketsDisconnecting, history, socketsConnect, socketsDisconnect} = this.props;
    return (
      <div className="container">
        <h1>Socket Exapmle Page</h1>
        <Helmet title="Socket Exapmle Page"/>
        <SocketConnectionLog
          loaded={loaded}
          message={message}
          connected={connected}
          connectAction={socketsConnecting}
          disconnectAction={socketsDisconnecting}
          history={history}
          connectAction={socketsConnect}
          disconnectAction={socketsDisconnect}
          />
        <SocketMessageLog/>
      </div>
    );
  }
}
