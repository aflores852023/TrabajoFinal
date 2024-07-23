const users = [
    { id: 1, username: 'alice', avatar: 'https://example.com/avatar1.png', status: 'online' },
    { id: 2, username: 'bob', avatar: 'https://example.com/avatar2.png', status: 'offline' },
    { id: 3, username: 'charlie', avatar: 'https://example.com/avatar3.png', status: 'away' },
    { id: 4, username: 'dave', avatar: 'https://example.com/avatar4.png', status: 'busy' },
  ];
  
  const workspaces = [
    { id: 1, name: 'Workspace One', members: [1, 2, 3] },
    { id: 2, name: 'Workspace Two', members: [2, 3, 4] },
  ];
  
  const channels = [
    { id: 1, name: 'general', workspaceId: 1 },
    { id: 2, name: 'random', workspaceId: 1 },
    { id: 3, name: 'development', workspaceId: 2 },
    { id: 4, name: 'design', workspaceId: 2 },
  ];
  
  const messages = [
    { id: 1, text: 'Hello, everyone!', senderId: 1, channelId: 1, timestamp: new Date() },
    { id: 2, text: 'Hi Alice!', senderId: 2, channelId: 1, timestamp: new Date() },
    { id: 3, text: 'How is the project going?', senderId: 3, channelId: 3, timestamp: new Date() },
    { id: 4, text: 'We need to finish the design by Friday.', senderId: 4, channelId: 4, timestamp: new Date() },
    { id: 5, text: 'I am working on the backend now.', senderId: 1, channelId: 3, timestamp: new Date() },
  ];
  
  export { users, workspaces, channels, messages };
  

  /* 
Se cargan cuando inicia la pagina y permanecen durante toda la sesión.
Usuarios (users): Cada usuario tiene un id, username, avatar (una URL a su imagen de perfil) y un status (estado del usuario).
Workspaces (workspaces): Cada workspace tiene un id, un name y una lista de members que son los id de los usuarios que pertenecen a ese workspace.
Canales (channels): Cada canal tiene un id, un name y un workspaceId que indica a qué workspace pertenece.
Mensajes (messages): Cada mensaje tiene un id, text (el contenido del mensaje), senderId (el id del usuario que envió el mensaje), 
channelId (el id del canal donde se envió el mensaje) y un timestamp (la fecha y hora en que se envió el mensaje). */