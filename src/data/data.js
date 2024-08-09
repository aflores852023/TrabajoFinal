
/*  Datos de prueba */


export const users = [ 
    { id: 1, username: 'alice', avatar: '/img/picture2.jpg', status: 'online' },
    { id: 2, username: 'bob', avatar: '/img/picture1.jpg', status: 'offline' },
    { id: 3, username: 'charlie', avatar: '/img/picture3.jpg', status: 'away' },
    { id: 4, username: 'dave', avatar: '/img/picture4.jpg', status: 'busy' },
  ];
  
  export const workspaces = [
    { id: 1, name: 'Workspace 1', members: [1, 2, 3], imageUrl: '/img/logoworkspace.jpg' },
    { id: 2, name: 'Workspace 2', members: [2, 3, 4], imageUrl: '/img/logoworkspace.jpg' },
    { id: 3, name: 'Workspace 3', members: [2, 3, 4] ,imageUrl: '/img/logoworkspace.jpg' },
  ];
  
  export const channels = [
    { id: 1, name: 'General', workspaceId: 1 },
    { id: 2, name: 'Random', workspaceId: 1 },
    { id: 3, name: 'Development', workspaceId: 2 },
    { id: 4, name: 'Design', workspaceId: 2 },
    { id: 5, name: 'Marketing', workspaceId: 3 },
    { id: 6, name: 'Marketing Outsider', workspaceId: 3  }
  ];
  
  export const messages = [
    { id: 1, text: 'Hello, everyone!', senderId: 1, channelId: 1, timestamp: new Date(), imageUrl: '/img/picture2.jpg', status: 'sent' },
    { id: 2, text: 'Hi Alice!', senderId: 2, channelId: 1, timestamp: new Date(), imageUrl: '/img/picture1.jpg', status: 'sent' },
    { id: 3, text: 'How is the project going?', senderId: 3, channelId: 3, timestamp: new Date(), imageUrl: '/img/picture2.jpg', status: 'sent' },
    { id: 4, text: 'We need to finish the design by Friday.', senderId: 4, channelId: 4, timestamp: new Date(), imageUrl: '/img/picture1.jpg', status: 'sent' },
    { id: 5, text: 'I am working on the backend now.', senderId: 1, channelId: 5, timestamp: new Date(), imageUrl: '/img/picture2.jpg', status: 'sent' },
    { id: 6, text: 'I am working on the backend now.', senderId: 1, channelId: 2, timestamp: new Date(), imageUrl: '/img/picture3.jpg', status: 'sent' },
    { id: 7, text: 'ok.', senderId: 1, channelId: 2, timestamp: new Date(), imageUrl: '/img/picture4.jpg', status: 'sent' },
  ];
  
  
  export const directMessages = [
    { id: 1, text: 'Hello, everyone!', senderId: 1, channelId: 1, timestamp: new Date() },
    { id: 2, text: 'Hi Alice!', senderId: 2, channelId: 1, timestamp: new Date() },
    { id: 3, text: 'How is the project going?', senderId: 3, channelId: 3, timestamp: new Date() },
    { id: 4, text: 'We need to finish the design by Friday.', senderId: 4, channelId: 4, timestamp: new Date() },
    { id: 5, text: 'I am working on the backend now.', senderId: 1, channelId: 5, timestamp: new Date() },
  ];
  

