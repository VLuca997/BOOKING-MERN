import React from 'react'
import useFetch from '../../hooks/useFetch'

export const PropertyList = () => {

    const {data,loading,error} = useFetch("/hotels/countByType");
    const images = [
        
    ]
  return <>
        <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div  key={i}>
                

               
                <div>
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
    </>
}
