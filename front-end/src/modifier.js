import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

function Modifier() {
    // const [id,setId] = useState("")
    const [nom,setNom] = useState("")
    const [code,setCode] = useState("")
    const [capacite,setCapacite] = useState("")
    const uselocation = useLocation()
    const {id} = uselocation.state
  
      // fonction por Recherche un Groupe
      function RechercheGroupe(e){
        e.preventDefault()
        axios.get(`http://localhost:3001/api/${id}`)
       .then(data=>{
                setNom(data.data[0].nom)
                setCode(data.data[0].code)
                setCapacite(data.data[0].capacite)
       })
       .catch(err=>console.log(err))
    }
    // RechercheGroupe()
  
    function modifierGroupe(e){
           axios.put(`http://localhost:3001/api/${id}`,{
                  code: nom,
                  nom:code,
                  capacite:capacite,
           })
          .then(data=>data)
          .catch(err=>console.log(err))
    }
  
  // const ajouterStagiaires =()=>null
  
    return (
      <div>
        <a href="/">Go Index</a>
        <h1>Recherche un groupe</h1>
        <div>
        {/* <input type="text" placeholder='Tper un Nom' value={id} onChange={e=>setId(e.target.value)}/><br></br>
        */}
        <button onClick={RechercheGroupe} >Recherche</button> 

        </div>

          <h1>Modifier un groupe</h1>
          <input type="text" placeholder='Nom' value={nom} onChange={e=>setNom(e.target.value)}/><br></br>
          <input type="text" placeholder='Code' value={code} onChange={e=>setCode(e.target.value)}/><br></br>
          <input type="text" placeholder='capacite' value={capacite} onChange={e=>setCapacite(e.target.value)}/><br></br>
          <button onClick={modifierGroupe} >Modifier Groupe</button>
      </div>
    )
}


export default Modifier