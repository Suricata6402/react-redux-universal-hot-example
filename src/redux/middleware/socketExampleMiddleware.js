import * as socketExampleActions from 'redux/modules/socketexamplemodule';

export default function createSocketExampleMiddleware() {
  let socketExample = null;
  socketExample = true;
  socketExampleActions();

  return store => next => action => {
    switch (action.type) {
      default:
        console.log(store, socketExample, action);
        return next(action);
    }
  };
}
