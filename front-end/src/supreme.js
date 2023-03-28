import axios from 'axios'
import React, { useState } from 'react'

function Supreme() {
  const [id,setId] = useState("")

  // fonction por supreme un Groupe
  function DeletGroupe(e){
    axios.delete(`http://localhost:3001/api/${id}`)
   .then(data=>data)
   .catch(err=>console.log(err))
}


  return (
    <div>
        <a href="/">Go Index</a>

        <h1>supreme un groupe</h1>
        <input type="text" placeholder='donner un Nom' value={id} onChange={e=>setId(e.target.value)}/><br></br>
        <button onClick={DeletGroupe} >Supreme</button>
    </div>
  )
}

export default Supreme