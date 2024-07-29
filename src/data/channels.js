import { channels } from "./data";
export const getChannelsDetailsForId = (id) => {
    return channels.filter(channel => Number(channel.id) === Number(id));
}