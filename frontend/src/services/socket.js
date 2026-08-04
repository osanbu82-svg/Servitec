import { io } from 'socket.io-client';

// Reemplaza esta URL con la que te de Render al desplegar tu backend
export const socket = io('https://tu-backend-en-render.onrender.com', {
  transports: ['websocket']
});
