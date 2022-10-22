import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const useFetch = () => {
    const [data, setData] = useState([])
    const [dataLoading,setDataLoading] = useState(true)
    
    const getData = async (url) => {
        console.log(url)
        axios.get(url)
            .then(res => {
                console.log(res)
                setDataLoading(false)
                return setData(res.data)
            })
            .catch(err => {
            console.log(err)
        })
    }
    const postData = async(url,data) => {
        axios.post(url, data)
            .then(res => {
            console.log(res);
            })
            .catch(err => {
            console.log(err);
        })
    }








    return {
        data,
        setData,
        getData,
        postData,
        loading: dataLoading,
    };
};

export default useFetch;