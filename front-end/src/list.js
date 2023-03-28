import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// const da = [ {
//   "_id": {
//     "$oid": "641c2007c3b8d0c24ebe4ffa"
//   },
//   "code": "djfoisp",
//   "nom": "jfkpsj",
//   "capacite": 555,
//   "listDesStagiaires": [
//     {
//       "iodufois": "klsufdoisu"
//     }
//   ]
// },
// {
//   "_id": {
//     "$oid": "641c2007c3b8d0c24ebe4ffa"
//   },
//   "code": "djfoisp",
//   "nom": "jfkpsj",
//   "capacite": 555,
//   "listDesStagiaires": [
//     {
//       "iodufois": "klsufdoisu"
//     }
//   ]
// }
// ]

function List() {
  const [data,setData] = useState([])
  useEffect(()=>{
       axios.get("http://localhost:3001/api")
          // .then(data=>console.log(data.data))
          .then(data=>setData(data.data))
          .catch(err=>console.log(err))
  },[data])

  return (
    <div>
                     
          <h1><a href="/ajouter">Ajouter Groupe</a></h1>
          <h1>list des groupes </h1>
        <table>
          <thead>
             <tr>
              <th>Code</th>
              <th>Nom</th>
              <th>Capacite</th>
              <th></th>
              <th>Stagiaires</th>
             </tr>
          </thead>
          <tbody>
            {
              data.map((groupe,index)=>{
                 return  <tr key={index}>
                      <td>{groupe.code}</td>
                      <td>{groupe.nom}</td>
                      <td>{groupe.capacite}</td>
                      <td>
                          <Link to={'/supreme'} state={{ id:groupe._id}}>Supreme Groupe</Link> |
                          <Link to={'/modifier'} state={{ id:groupe._id}}>Modifier Groupe</Link></td>
                      <td><Link to={'liststg'} state={{ data:groupe.listDesStagiaires}}>Lest des Stagiaires</Link></td>
                      {/* <td><Link to={'liststg'} data={groupe.listDesStagiaires}>Lest des Stagiaires</Link></td> */}
                </tr>
              })
            }

          </tbody>
        </table>
    </div>
  )
}

export default List