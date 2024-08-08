import { channels } from "../data/data";
export const getChannelsDetailsForId = (id) => {
    return channels.filter(channel => Number(channel.id) === Number(id));
}


// Función para obtener los canales de un workspace específico
export const getChannelsForWorkspace = (workspaceId) => {
    const channels = JSON.parse(localStorage.getItem('channels')) || [];
    return channels.filter(channel => channel.workspaceId === workspaceId);
  };
  

export const addChannel = (channel) => {
    const channels = JSON.parse(localStorage.getItem('channels')) || [];
    channels.push(channel);
    localStorage.setItem('channels', JSON.stringify(channels));
  };