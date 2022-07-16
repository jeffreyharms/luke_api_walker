import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const JediApplication = () => {
  const options = [ 'people', 'planets' ]
  const [ category, setCategory ] = useState(options[0])
  const [ id, setId ] = useState("")
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/${category}/${id}`)
  }

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <label for="search">Search For: </label>
        <select name="search" value={category} onChange={e=>setCategory(e.target.value)}>
          {
            options.map((categories, idx) => <option key={idx} value={categories} >{categories}</option>)
          }
        </select>
        <label className="idSearch">ID:</label>
        <input type="number" value={id} onChange={e => setId(e.target.value)} />
        <button type="submit">Search the Archives</button>
      </form>
    </div>
  )
}

export default JediApplication