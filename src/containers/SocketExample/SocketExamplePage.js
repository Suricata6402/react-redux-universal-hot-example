import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {SocketConnectionLog} from 'components';
import {SocketMessageLog} from 'components';
import {connect} from 'react-redux';
import * as socketExampleActions from 'redux/modules/socketexamplemodule';

@connect(
  state => ({
    loaded: state.socketexample.loaded,
    message: state.socketexample.message,
    connected: state.socketexample.connected}),
  socketExampleActions)

export default class SocketExamplePage extends Component {
  static propTypes = {
    loaded: PropTypes.bool,
    message: PropTypes.string,
    connected: PropTypes.bool
  }
  render() {
    const {loaded, message, connected} = this.props;
    return (
      <div className="container">
        <h1>Socket Exapmle Page</h1>
        <Helmet title="Socket Exapmle Page"/>
        <SocketConnectionLog loaded={loaded} message={message} connected={connected} />
        <SocketMessageLog/>
      </div>
    );
  }
}
