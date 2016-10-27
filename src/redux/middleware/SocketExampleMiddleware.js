import * as SocketExampleActions from 'redux/modules/socketexamplemodule';

export default function createSocketExampleMiddleware() {
  let socketExample = null;

  const onOpen = (token) => evt => {
    console.log('WS is onOpen');
    console.log('token ' + token);
    console.log('evt ' + evt.data);
  };

  const onClose = (store) => evt => {
    console.log('WebSocket is onClose');
    console.log('evt ' + evt.data);
    store.dispatch(SocketExampleActions.socketsDisconnect());
  };

  const onMessage = (ws, store) => evt => {
    // Parse the JSON message received on the websocket
    const msg = evt.data;
    store.dispatch(SocketExampleActions.socketsMessageReceiving(msg));
  };

  return store => next => action => {
    switch (action.type) {
      case 'SOCKETS_CONNECT':
        if (socketExample !== null) {
          console.log('SOCKETS_DISCONNECTING');
          store.dispatch(SocketExampleActions.socketsDisconnecting());
          socket.close();
        }
        console.log('SOCKETS_CONNECTING');
        socketExample = new WebSocket('wss://echo.websocket.org/');
        store.dispatch(SocketExampleActions.socketsConnecting());
        socketExample.onmessage = onMessage(socketExample, store);
        socketExample.onclose = onClose(store);
        socketExample.onopen = onOpen(action.token);
        break;
      case 'SOCKETS_DISCONNECT':
        if (socketExample !== null) {
          console.log('SOCKETS_DISCONNECTING');
          store.dispatch(SocketExampleActions.socketsDisconnecting());
          socketExample.close();
        }
        socketExample = null;
        break;
      case 'SOCKETS_MESSAGE_SEND':
        console.log('action');
        console.log(action);
        socketExample.send(action.message_send);
        store.dispatch(SocketExampleActions.socketsMessageSending(action.message_send));
        break;
      default:
        return next(action);
    }
  };
}
