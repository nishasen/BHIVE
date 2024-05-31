import { createContext, useContext, useEffect, useState } from 'react';
import { useAxios } from '../use-axios/useAxios';

const DataContext = createContext();
const useData = () => useContext(DataContext);

const DataProvider = ({children}) => {
    const apiURL = 'https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json';
    const { response, loading, error } = useAxios(apiURL);
    const [data, setData] = useState([])

    useEffect(() => {
        setData(response || [])
    }, [response])
    
    return (
        <DataContext.Provider value={{data, loading, error}}>
            {children}
        </DataContext.Provider>

    );
}

export { useData, DataProvider };