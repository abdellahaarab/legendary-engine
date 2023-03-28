import axios from 'axios'
import React, { useState } from 'react'

function Ajouter() {
  const [nom,setNom] = useState("")
  const [code,setCode] = useState("")
  const [capacite,setCapacite] = useState("")
  const [nom_de_stg,setNom_de_stg] = useState("")
  const [prenom_de_stg,setPrenom_de_stg] = useState("")


  function ajouterGroupe(e){
         axios.post("http://localhost:3001/api",{
                code: nom,
                nom:code,
                capacite:capacite,
                listDesStagiaires:[
                    {
                        nom_de_stg: nom_de_stg,
                        prenom_de_stg:  prenom_de_stg,
                    }
                ]
         })
        .then(data=>data)
        .catch(err=>console.log(err))
  }

const ajouterStagiaires =()=>null

  return (
    <div>
        <a href="/">Go Index</a>

        <h1>Ajouter un groupe</h1>
        <input type="text" placeholder='Nom' value={nom} onChange={e=>setNom(e.target.value)}/><br></br>
        <input type="text" placeholder='Code' value={code} onChange={e=>setCode(e.target.value)}/><br></br>
        <input type="text" placeholder='capacite' value={capacite} onChange={e=>setCapacite(e.target.value)}/><br></br>
        <div>
              <p>Add Stagiaires <a href="#">+</a></p>
            <input type="text" placeholder='nom de stg' value={nom_de_stg} onChange={e=>setNom_de_stg(e.target.value)}/><br></br>
            <input type="text" placeholder='prenom de stg' value={prenom_de_stg} onChange={e=>setPrenom_de_stg(e.target.value)}/><br></br>
           <button onClick={ajouterStagiaires} >Ajouter Stagiaires</button>     
        </div>
        <button onClick={ajouterGroupe} >Ajouter Groupe</button>
    </div>
  )
}

export default Ajouter