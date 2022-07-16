import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Planets = () => {
    const [ planet, setPlanet ] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(res => { setPlanet(res.data) })
            .catch(() => navigate('/Error'))
    },[id])


    return (
    <div className='planets'>
        {
            planet&&
            <div>
                <h1>{planet.name}</h1>
                <p>Diameter: {planet.diameter}km</p>
                <p>Rotation Period: {planet.rotation_period}hours</p>
                <p>Gravity: {planet.gravity}G</p>
                <p>Climate: {planet.climate}</p>
                <p>Population: {planet.population}</p>
                <p>Terrain: {planet.terrain}</p>
            </div>
        }
    </div>
    )
}

export default Planets