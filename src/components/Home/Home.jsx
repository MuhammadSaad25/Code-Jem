import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Link to={"/baryani"}>
                baryani
            </Link>
            <Link to={"/burger"}>
                baryani
            </Link>
            <Link to={"/pizza"}>
                baryani
            </Link>
        </div>
    )
}

export default Home