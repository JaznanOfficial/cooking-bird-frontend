import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const useFetch = () => {
    const [data, setData] = useState([])
    
    const getData = async(url) => {
        try {
            const res = await axios.get(url);
            setData(res.data);
        }
        catch (error){
            console.log(error);
        }
    }








    return {
        data,
        setData,
        getData,
    };
};

export default useFetch;