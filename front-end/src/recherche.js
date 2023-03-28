import axios from 'axios'
import React, { useState } from 'react'

function Recherche() {

    const [id,setId] = useState("")
  const [data,setData] = useState({})

    // fonction por Recherche un Groupe
    function RechercheGroupe(e){
      axios.get(`http://localhost:3001/api/${id}`)
     .then(data=>setData(data.data))
     .catch(err=>console.log(err))
  }

  return (
    <div>
        <a href="/">Go Index</a>
        <h1>
                Recherche un groupe
        </h1>
        <div>
        <input type="text" placeholder='Tper un Nom' value={id} onChange={e=>setId(e.target.value)}/><br></br>
        <button onClick={RechercheGroupe} >Supreme</button>

        {
            data ? <p>Nom : {data.nom} , Code : {data.code} , Capacite : {data.capacite} </p> :<p>groupe Recherche n existe pas !!</p>
        }
        </div>
    </div>
  )
}

export default Recherche