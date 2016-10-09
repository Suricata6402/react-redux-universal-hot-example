import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as socketExampleActions from 'redux/modules/socketexamplemodule';


@connect(
  state => ({
    loaded: state.socketexample.loaded,
    message: state.socketexample.message,
    connected: state.socketexample.connected,
    message_history: state.socketexample.message_history
  }),
  socketExampleActions)
export default class SocketMessageLog extends Component {
  static propTypes = {
    loaded: PropTypes.bool,
    message: PropTypes.string,
    connected: PropTypes.bool,
    message_history: PropTypes.array,
    socketsMessageSending: PropTypes.func,
    socketsMessageReceiving: PropTypes.func
  }

  handleSendButton = (event) => {
    event.preventDefault();
    this.props.socketsMessageSending(this.refs.message_text.value);
    this.props.socketsMessageReceiving(this.refs.message_text.value);
    this.refs.message_text.value = '';
  }

  render() {
    const {loaded, connected, message_history} = this.props;
    return (
      <div>
        <h3>Message log</h3>
        <ul>
          {
            message_history.map((messageHistoryElement, index) =>
            <li key={index} className={'unstyled'}>
              <span className={(messageHistoryElement.direction === '->') ? 'glyphicon glyphicon-arrow-right' : 'glyphicon glyphicon-arrow-left'}></span>
            {messageHistoryElement.message}</li>
          )}
        </ul>
        <form
          className="form-inline"
          onSubmit={this.handleSendButton}>
          <p></p>
          <div className="form-group">
            <input
            className="form-control input-sm"
            type="text"
            ref="message_text" readOnly = {(loaded && connected === true) ? false : true}></input>
          </div>
          <button
            className="btn btn-primary btn-sm"
            onClick={this.handleSendButton}
            disabled = {(connected === true) ? false : true}>
            <i className="fa fa-sign-in"/> Send
          </button>
        </form>
      </div>
    );
  }
}
