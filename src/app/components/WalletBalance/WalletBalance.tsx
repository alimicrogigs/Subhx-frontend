import WebSocket from 'ws';

const socketUrl = 'ws://stream.bit24hr.in:8765/get_user_balance';
const token = '161|$2y$10$a640/iN/UHCfu.BSvt59J.piV1SS5KSvtqjSfTn8jMIjgnQ55sfH6ddeb8d08';
const connectWebSocket = (token:any) => {
  const ws = new WebSocket(socketUrl, {
    headers: {
      'x-auth-token': token,
    },
  });

  ws.on('open', () => {
    console.log('WebSocket connection opened');
  });

  ws.on('message', (data) => {
    console.log('Received:', data);
    // Handle incoming data as needed
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error.message);
  });

  return ws;
};

export default connectWebSocket;