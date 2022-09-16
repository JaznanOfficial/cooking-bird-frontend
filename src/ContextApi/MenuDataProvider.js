import React from 'react';
import { createContext } from 'react';
import MenuPage from '../Pages/MenuPage/MenuPage';




export const MenuDataContext = createContext()
const MenuDataProvider = ({ children }) => {
    const menuContext = <MenuPage/>
    return (
        <MenuDataContext.Provider value={menuContext}>
            {children}
        </MenuDataContext.Provider>
    );
};

export default MenuDataProvider;