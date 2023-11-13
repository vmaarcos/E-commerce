import React, { useState, createContext } from 'react';

export const SidebarFinishContext = createContext();

const SidebarFinishProvider = ({children}) => {
  const [isOpenFinish, setIsOpenFinish] = useState(false);
  const handleCloseFinish = ()=>{
    setIsOpenFinish(false);
  };

  return <SidebarFinishContext.Provider value={{isOpenFinish, setIsOpenFinish, handleCloseFinish}}>{children}</SidebarFinishContext.Provider>
};

export default SidebarFinishProvider;
