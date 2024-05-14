import React from 'react'
import useFetch from '../../hooks/useFetch';

export const FeatureProperties = () => {
    const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

    return (
        <div className='d-flex justify-content-evenly border border-3 py-2 '>
            {loading ? "Loading FeatureProperties...." :
                <>
                    <div>
                    {data.map(item => (<>
                        <div key={item._id}>
                            <div><img src={item.photos[0]} alt="photos" /></div>
                            <span>NOME: {item.name}</span>
                            <span>CITTA: {item.city}</span>
                            <span>PREZZO: {item.cheapestPrice}</span>
                            <span>{item.rating &&
                                <div>
                                    <button>RATING: {item.rating} </button>
                                    <span>EXCELENT</span>
                                </div>}</span>
                                    </div>
                        </>
                    ))}
                    </div>


                </>
            }
        </div>
    )
}
