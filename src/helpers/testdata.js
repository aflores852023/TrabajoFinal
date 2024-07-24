import data from '../data/data';

const toJSON = (data) => JSON.stringify(data);
/**
 * Guarda los datos de prueba en el almacenamiento local.
 *
 * @param {Object} data - El objeto de datos de prueba que contiene usuarios, espacios de trabajo, canales y mensajes.
 * @return {void} Esta función no devuelve nada.
 */
export const saveTestData = () => {
    const users = toJSON(data.users);
    const workspaces = toJSON(data.workspaces);
    const channels = toJSON(data.channels);
    const messages = toJSON(data.messages);

    localStorage.setItem('users', users);
    localStorage.setItem('workspaces', workspaces);
    localStorage.setItem('channels', channels);
    localStorage.setItem('messages', messages);
    
    console.log('test data saved');
};
export default saveTestData