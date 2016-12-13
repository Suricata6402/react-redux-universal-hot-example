import * as socketExampleActions from 'redux/modules/socketexamplemodule';

export default function createSocketExampleMiddleware() {
  let socketExample = null;

  const onOpen = (token) => evt => {
    console.log('WS is onOpen');
    console.log('token ' + token);
    console.log('evt ' + evt.data);
  };
  const onClose = (store) => evt => {
    console.log('WS is onClose');
    console.log('evt ' + evt.data);
    store.dispatch(socketExampleActions.socketsDisconnect());
  };
  return store => next => action => {
    switch (action.type) {
      case 'SOCKETS_CONNECT':
        if (socketExample !== null) {
          console.log('SOCKETS_DISCONNECTING');
          store.dispatch(socketExampleActions.socketsDisconnecting());
          socket.close();
        }
        console.log('SOCKETS_CONNECTING');
        socketExample = new WebSocket('ws://echo.websocket.org123/');
        store.dispatch(socketExampleActions.socketsConnecting());
        socketExample.onclose = onClose(store);
        socketExample.onopen = onOpen(action.token);
        break;
      case 'SOCKETS_DISCONNECT':
        if (socketExample !== null) {
          console.log('SOCKETS_DISCONNECTING');
          store.dispatch(socketExampleActions.socketsDisconnecting());
          socketExample.close();
        }
        socketExample = null;
        break;
      default:
        return next(action);
    }
  };
}
