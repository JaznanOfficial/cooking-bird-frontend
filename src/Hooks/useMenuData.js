import React, { useContext } from 'react';
import { MenuDataContext } from '../ContextApi/MenuDataProvider';

const useMenuData = () => {
    return (
        useContext(MenuDataContext)
    );
};

export default useMenuData;