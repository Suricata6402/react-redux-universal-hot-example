import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class SocketExamplePage extends Component {
  render() {
    return (
      <div className="container">

        <h1>Socket Exapmle Page</h1>
        <Helmet title="Socket Exapmle Page"/>
        <p>Sockets not connected</p>

        <h3>Socket connection log</h3>
        <textarea
          className="form-control"
          rows="1"
          readOnly
          placeholder="Waiting ..."
          value="
            index = 2, loaded = true, message = Connected, connected = true
            index = 1, loaded = false, message = Connecting..., connected = false"/>
        <button className="btn btn-primary btn-sm">
          <i className="fa fa-sign-in"/> Connect
        </button>
        <button className="btn btn-danger btn-sm">
          <i className="fa fa-sign-out"/> Disconnect
        </button>
        <h3>Message log</h3>
        <ul>
            <li key="1" className="unstyled">
              <span className="glyphicon glyphicon-arrow-right"></span>
              Socket string
            </li>
            <li key="2" className="unstyled">
              <span className="glyphicon glyphicon-arrow-left"></span>
              [ECHO] Socket string
            </li>
        </ul>
        <form className="form-inline">
          <p></p>
          <div className="form-group">
            <input
            className="form-control input-sm"
            type="text"
            ref="message_text"></input>
          </div>
          <button className="btn btn-primary btn-sm">
            <i className="fa fa-sign-in"/> Send
          </button>
        </form>
      </div>

    );
  }
}
