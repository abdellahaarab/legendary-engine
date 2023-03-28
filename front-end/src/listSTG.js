import React from 'react'
import { useLocation } from 'react-router-dom'

function ListSTG(props) {
  const uselocation = useLocation()
  const {data} = uselocation.state
  return (
    <div>
        <h3>List STG</h3>
        {
            data.map((stg,i)=><p key={i}>Nom : { stg.nom } | Prenom : {stg.prenom}</p>)
        }
    </div>
  )
}

export default ListSTG