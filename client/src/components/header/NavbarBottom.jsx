import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'
import '../../style/MediaQuery/Header.css'

export default function NavbarBottom() {
  return (
    <div className='bgColorHeader'>

            <Container className='headerBottom'>

        
                <div className="row justify-content-center flex-row  py-3">

                    <div className="col-sm-4 col-8 col-md-6 col-lg-2 py-0 m-0 px-2">

                        <Link className=' px-2'>
                            <div className=" rounded-4 bg-light p-1 px-3">Camere</div>
                        </Link>  
                    </div>
                    <div className="col-sm-4 col-8 col-md-6 col-lg-2 py-0 m-0 px-2">

                        <Link className=' px-2'>
                            <div className=" rounded-4 bg-light p-1 px-3">Voli</div>
                        </Link>  
                    </div>
                    <div className="col-sm-4 col-8 col-md-6 col-lg-2 py-0 m-0 px-2">

                        <Link className=' px-2'>
                            <div className=" rounded-4 bg-light p-1 px-3">Parcheggio</div>
                        </Link>  
                    </div>
                    <div className="col-sm-4 col-8 col-md-6 col-lg-2 py-0 m-0 px-2">

                        <Link className=' px-2'>
                            <div className=" rounded-4 bg-light p-1 px-3">Attrazioni</div>
                        </Link>  
                    </div>
                    <div className="col-sm-4 col-8 col-md-6 col-lg-2 py-0 m-0 px-2">

                        <Link className=' px-2'>
                            <div className=" rounded-4 bg-light p-1 px-3">Taxi e Trasporti</div>
                        </Link>  
                    </div>
                      
                </div>
                <div className="row py-3 container-fluid">
                    <div className="col px-2 jumbotron text-light">
                        <h3>TEXT PRIMARY</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste autem dolorem facere exercitationem? Similique modi deserunt distinctio totam.</p>
                        <button className='btn btn-primary personalButton text-light '>Sign in / Register</button>
                    </div>
                </div>


        
            </Container>
        </div>
  )
}
