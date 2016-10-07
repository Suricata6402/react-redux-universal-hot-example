export const SOCKETS_CONNECTING = 'SOCKETS_CONNECTING';
export const SOCKETS_DISCONNECTING = 'SOCKETS_DISCONNECTING';
export const SOCKETS_MESSAGE_SENDING = 'SOCKETS_MESSAGE_SENDING';
export const SOCKETS_MESSAGE_RECEIVING = 'SOCKETS_MESSAGE_RECEIVING';

const initialState = {
  loaded: false,
  message: 'Just created',
  connected: false,
  history: [],
  message_history: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SOCKETS_CONNECTING:
      return Object.assign({}, state, {
        loaded: true,
        message: 'Connecting...',
        connected: true,
        history: [
          ...state.history,
          {
            loaded: true,
            message: 'Connecting...',
            connected: true
          }
        ]
      });
    case SOCKETS_DISCONNECTING:
      return Object.assign({}, state, {
        loaded: true,
        message: 'Disconnecting...',
        connected: false,
        history: [
          ...state.history,
          {
            loaded: true,
            message: 'Disconnecting...',
            connected: false
          }
        ]
      });
    case SOCKETS_MESSAGE_SENDING:
      return Object.assign({}, state, {
        loaded: true,
        message: 'Send message',
        connected: true,
        message_history: [
          ...state.message_history,
          {
            direction: '->',
            message: action.message_send
          }
        ]
      });
    case SOCKETS_MESSAGE_RECEIVING:
      return Object.assign({}, state, {
        loaded: true,
        message: 'Message receive',
        connected: true,
        message_history: [
          ...state.message_history,
          {
            direction: '<-',
            message: action.message_receive
          }
        ]
      });
    default:
      return state;
  }
}

export function socketsConnecting() {
  return {type: SOCKETS_CONNECTING};
}
export function socketsDisconnecting() {
  return {type: SOCKETS_DISCONNECTING};
}
export function socketsMessageSending(sendMessage) {
  return {type: SOCKETS_MESSAGE_SENDING, message_send: sendMessage};
}
export function socketsMessageReceiving(receiveMessage) {
  return {type: SOCKETS_MESSAGE_RECEIVING, message_receive: receiveMessage};
}
