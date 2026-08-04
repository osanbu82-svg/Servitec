const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

// Base de datos en memoria para el prototipo
let technicians = [];
let activeRequests = [];

io.on('connection', (socket) => {
  console.log('Usuario conectado:', socket.id);

  // Registrar técnico o cliente
  socket.on('register_tech', (data) => {
    technicians.push({ id: socket.id, ...data, debt: 0, status: 'available' });
    io.emit('tech_list_updated', technicians);
  });

  // Cliente solicita servicio
  socket.on('request_service', (serviceData) => {
    const request = { id: Date.now(), ...serviceData, status: 'pending' };
    activeRequests.push(request);
    // Enviar alerta alos técnicos disponibles
    io.emit('new_service_request', request);
  });

  // Técnico acepta servicio
  socket.on('accept_service', ({ requestId, techId }) => {
    const request = activeRequests.find(r => r.id === requestId);
    if (request) {
      request.status = 'accepted';
      request.techId = techId;
      io.emit(`service_accepted_${requestId}`, request);
    }
  });

  // Actualizar estado del servicio (En camino, Llegué, Finalizado)
  socket.on('update_status', ({ requestId, status }) => {
    io.emit(`status_updated_${requestId}`, { status });
  });

  socket.on('disconnect', () => {
    technicians = technicians.filter(t => t.id !== socket.id);
    console.log('Usuario desconectado:', socket.id);
  });
});

server.listen(3000, () => {
  console.log('Servidor TecniPro corriendo en puerto 3000');
});
