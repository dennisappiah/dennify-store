import React, {useState, createContext} from 'react'


interface ISideBarContext {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    handleClose: () => void;
}
// create context
export const SideBarContext = createContext<ISideBarContext>({
    isOpen: false,
    setIsOpen: () => {},
    handleClose: () => {},
  });

type SideBarProviderProps = {
    children: React.ReactNode
  }

const SideBarProvider= ({children}: SideBarProviderProps) => {
    // SideBar State
 const [isOpen, setIsOpen] = useState(false);

 const handleClose = () => {
    setIsOpen(false);
 }

  return (
    <SideBarContext.Provider value={{isOpen, setIsOpen, handleClose}}>{children}</SideBarContext.Provider>
  )
}

export default SideBarProvider