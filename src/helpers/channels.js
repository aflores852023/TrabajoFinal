import { channels } from "../data/data";
export const getChannelsDetailsForId = (id) => {
    return channels.filter(channel => Number(channel.id) === Number(id));
}


export const addChannel = (channel) => {
    const channels = JSON.parse(localStorage.getItem('channels')) || [];
    channels.push(channel);
    localStorage.setItem('channels', JSON.stringify(channels));
  };