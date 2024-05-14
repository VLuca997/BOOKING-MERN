import React from 'react'
import useFetch from '../../hooks/useFetch'

export const PropertyList = () => {

    const {data,loading,error} = useFetch("/hotels/countByType");
    const images = [
        "https://www.pexels.com/photo/porter-leaning-on-a-trolley-5371575/",
        "https://www.pexels.com/photo/black-and-grey-bedspread-on-bed-and-pillow-164595/",
        "https://www.pexels.com/photo/bedroom-interior-setup-271624/",
        "https://www.pexels.com/photo/view-of-tourist-resort-338504/",
        "https://static.printler.com/media/photo/166534.jpg",
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
                <img src={img}

                />
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
