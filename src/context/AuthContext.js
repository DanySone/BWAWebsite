import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [myValue, setMyValue] = useState('Hello, world!');

  return (
    <AuthContext.Provider value={{ myValue, setMyValue }}>
      {children}
    </AuthContext.Provider>
  );
};

