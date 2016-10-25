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
      default:
        return next(action);
    }
  };
}
