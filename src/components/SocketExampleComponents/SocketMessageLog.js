import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as socketExampleActions from 'redux/modules/socketexamplemodule';


@connect(
  state => ({
    loaded: state.socketexample.loaded,
    message: state.socketexample.message,
    connected: state.socketexample.connected}),
  socketExampleActions)
export default class SocketMessageLog extends Component {
  static propTypes = {
    loaded: PropTypes.bool,
    message: PropTypes.string,
    connected: PropTypes.bool
  }
  render() {
    const {loaded, message, connected} = this.props;
    return (
      <div>
        <h3>Message log</h3>
        <ul>
            <li key="1" className="unstyled">
              <span className="glyphicon glyphicon-arrow-right"> </span>
              {message}
            </li>
            <li key="2" className="unstyled">
              <span className="glyphicon glyphicon-arrow-left"> </span>
              [ECHO] {message}
            </li>
        </ul>
        <form className="form-inline">
          <p></p>
          <div className="form-group">
            <input
            className="form-control input-sm"
            type="text"
            ref="message_text" readOnly = {(loaded === true) ? false : true}></input>
          </div>
          <button
            className="btn btn-primary btn-sm"
            disabled = {(connected === true) ? false : true}>
            <i className="fa fa-sign-in"/> Send
          </button>
        </form>
      </div>
    );
  }
}
