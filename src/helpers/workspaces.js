import { workspaces } from '../data/data.js'
import { channels } from '../data/data.js'
export const getWorkspaces = () => {
    const workspaces_saved = localStorage.getItem('workspaces')
        if (workspaces_saved){
                return JSON.parse(workspaces_saved)   
       }
 }

 export const getWorkspacesChannelForId = (id) => {
  return channels.filter(channel => Number(channel.workspaceId) === Number(id));
};

