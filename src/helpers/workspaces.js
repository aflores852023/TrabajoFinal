
export const getWorkspaces = () => {
    const workspaces_saved = localStorage.getItem('workspaces')
        if (workspaces_saved){
                return JSON.parse(workspaces_saved)   
       }
 }

 export const getChannelsToWorkspaces = () => {
    const channels_saved = localStorage.getItem('channels')
        if (channels_saved){
                return JSON.parse(channels_saved)   
       }
 }

 export const getWorkspacesChannelForId = (id) => {
    const channels = getChannelsToWorkspaces(); 
  return channels.filter(channel => Number(channel.workspaceId) === Number(id));
};

