import React, {createContext, useState, useEffect} from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => { 
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data) {
      setUser(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user])
  
  return (  
    <UserContext.Provider value={{user, setUser}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;
