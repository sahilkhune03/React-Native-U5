import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const LaptopContext = createContext();

export const LaptopProvider = ({ children }) => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/Nishantth1/FakeAPI/laptops')
            .then((res) => {
                setCars(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setLoading(false);
            });
    }, []);

    return (
        <LaptopContext.Provider value={{ cars, loading }}>
            {children}
        </LaptopContext.Provider>
    );
};