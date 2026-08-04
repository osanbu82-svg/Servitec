import { io } from 'socket.io-client';

// Cambia la IP por la de tu servidor local o dominio
export const socket = io('http://localhost:3000');
