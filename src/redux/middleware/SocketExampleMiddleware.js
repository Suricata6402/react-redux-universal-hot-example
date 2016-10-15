import * as SocketExampleActions from 'redux/modules/socketexamplemodule';

export default function createSocketExampleMiddleware() {
  let socketExample = null;
  socketExample = true;

  return store => next => action => {
    switch (action.type) {
      default:
        console.log(store, socketExample, SocketExampleActions);
        return next(action);
    }
  };
}
