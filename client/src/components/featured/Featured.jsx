import React from 'react'
import useFetch from '../../hooks/useFetch'

export const Featured = () => {

    const { data, loading, error} = useFetch("/hotels/countByCity?cities=Rome,London,Paris");
    console.log(data)
  return <>
  
  
  {loading ? "please wait" :(<div> 
    <p>ROMA</p>
    <p>Proprietà {data[0]}</p>
    <p>Madrid</p>
    <p>Proprietà {data[1]}</p>
    <p>Paris</p>
    <p>Proprietà {data[2]}</p>

  </div>)}
  
  </>
  
}
