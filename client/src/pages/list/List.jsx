import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import SearchItem from '../../components/searchItem/SearchItem';

export default function List() {
    const location = useLocation();
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState([]);
    const { data, loading, error, reFetch } = useFetch(`/hotels?city=${destination}`);

    useEffect(() => {
        if (location.state) {
            setDestination(location.state.destination);
            setDate(location.state.date);
            setOptions(location.state.options);
        }
    }, [location.state]);

    useEffect(() => {
        reFetch(); // Richiama il fetch ogni volta che la destinazione cambia
    }, [destination]);

    return (
        <div>
            {loading ? (
                "loadingList"
            ) : (
                <div>
                    {data.map(item => (
                        <SearchItem item={item} key={item._id} />
                    ))}
                </div>
            )}

            <div className="lsItem">
                <label>Destination</label>
                <input placeholder={destination} type="text" />
            </div>
        </div>
    );
}
    