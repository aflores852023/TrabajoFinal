

// Función para obtener los usuarios desde el localStorage
export const getUsersFromLocalStorage = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    return storedUsers;
  };
  
  // Función para añadir un nuevo usuario al localStorage
  export const addUserToLocalStorage = (newUser) => {
    const storedUsers = getUsersFromLocalStorage();
    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    return updatedUsers;
  };
  