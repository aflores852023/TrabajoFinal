import data from '../data/data';
/**
 * Valida y Guarda los datos de prueba en el almacenamiento local, 
 * incluyendo usuarios, espacios de trabajo, canales y mensajes.
 * en caso que alguno de estos datos no este cargado, realiza la carga individual
 * 
 *
 * @return {void} 
 */
export const saveTestData = (data) => {
    const users = JSON.stringify(data.users)
    const workspaces = JSON.stringify(data.workspaces)
    const channels = JSON.stringify(data.channels)
    const messages = JSON.stringify(data.messages)
        const data_users_save = localStorage.getItem('users')
        const data_workspaces_save = localStorage.getItem('workspaces')
        const data_channels_save = localStorage.getItem('channels')
        const data_messages_save = localStorage.getItem('messages') 

        if (data_users_save == null) {
            localStorage.setItem('users', users);    
        }    
        if (data_workspaces_save == null) {
            localStorage.setItem('workspaces', workspaces);
        }
        if (data_channels_save == null) {
            localStorage.setItem('channels', channels);
        }
        if (data_messages_save == null) {
            localStorage.setItem('messages', messages);
        }
}
/* Este código exporta una función llamada newUser que toma un parámetro new_user. 
Dentro de la función, se obtiene la lista de usuarios utilizando la función GetUsers(). 
Luego, se agrega el nuevo usuario a la lista utilizando el método push(). 
Después, se guarda la nueva lista de usuarios utilizando la función saveTestData() pasando un objeto con 
la propiedad users establecida en la lista actualizada */
export const newUser = (new_user) => {
    const listUser = GetUsers()
    listUser.push(new_user)
    saveTestData( {users:listUser}) //Guarda el nuevo usuario
    }





/**
 * Obtiene los usuarios desde el almacenamiento local y los parsea como JSON.
 *
 * @return {Object|null} Los datos de usuarios parseados o null si no existen en el almacenamiento local.
 */
export const GetUsers = () => {
    const GetUsers_save = localStorage.getItem('users')
        return JSON.parse(GetUsers_save) 
}

export const GetWorkspaces = () => {
    const GetWorkspaces_save = localStorage.getItem('workspaces')
        return JSON.parse(GetWorkspaces_save) 
}

export const GetChannels = () => {
    const GetChannels_save = localStorage.getItem('channels')
        return JSON.parse(GetChannels_save) 
}

export const GetMessages = () => {
    const GetMessages_save = localStorage.getItem('messages')
        return JSON.parse(GetMessages_save) 
}

