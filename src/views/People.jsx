import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const People = () => {
    const [ person, setPerson ] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => { setPerson(res.data) })
            .catch(() => navigate('/Error'))
    },[id])


    return (
    <div className='people'>
        {
            person&&
            <div>
                <h1>{person.name}</h1>
                <p>Height: {person.height}cm</p>
                <p>Mass: {person.mass}kg</p>
                <p>Birth Year: {person.birth_year}</p>
                <p>Hair Color:{person.hair_color}</p>
            </div>
        }
    </div>
    )
}

export default People