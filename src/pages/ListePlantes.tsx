import axios from 'axios';
import {useState, useEffect} from "react";
import "./ListePlantes.css";
import { NavLink } from "react-router-dom";


export interface Plants {
  id: number;
  name: string;
  unitprice_ati: number;
  quantity: number;
  category: string;
  rating: number;
  url_picture: number;
}

const ListePlantes =()=>{
     const [message, setMessage] = useState("");
  const[myPlants, setMyPlants] = useState<Plants[]>([])
  const[searchValue, setSearchValue] = useState("")
  useEffect(()=>{
 axios.get("http://localhost:8080/api/plants/")
 .then((res)=>{
  console.log("mes plantes",res.data.data)
  const plants = res.data.data 
  setMyPlants(plants)
 }); 
},[])

  const deleteFunction = ( e: React.FormEvent<HTMLButtonElement>, id: number) => {
    console.log(id);

    axios
      .delete(`http://localhost:8080/api/plants/${id}`)
      .then((res) => {
        console.log(res.data.data);
        alert("Plante supprimée");
        window.location.reload();
      })
      .catch((error) => {
        setMessage("Impossible d'effacer ce héros");
      });
  };


    
  return (
    <div className="d-flex align-items-stretch perso">
      {myPlants.map((plant: Plants, index) => (
        <div className='"container-fluid custom-main"'>
          <ul className="marge ">
            <li key={index} className="card d-flex" style={{ width: 250 }}>
              {plant.name} <br /> 💵{plant.unitprice_ati}$ ⭐{plant.rating}
              <NavLink to={`/all/${plant.id}`}>
                <button>Zoom</button>
              </NavLink>
              <NavLink className="linkStyle" to={`/update/${plant.id}`}>
                <button>Modifie</button>
              </NavLink>
              <button onClick={(e) => deleteFunction(e, plant.id)}>
                Supprime
              </button>
            </li>
          </ul>
        </div>
      ))}
      <h2>{message}</h2>
    </div>
  );
    
}

export default ListePlantes;