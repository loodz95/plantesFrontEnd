import axios, { AxiosResponse } from "axios";
import { Plants } from "./ListePlantes";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../index.css";

const ParId = () => {
  const [allPlants, setAllPlants] = useState<Plants>();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/plants/${id}`)
      .then((response: AxiosResponse<{ data: Plants[] }>) => {
        let myPlants = response.data.data[0];
        console.log("tout le tableau", response);
        console.log("tableauplantes", myPlants);
        setAllPlants(myPlants);
      });
  }, [id]);

  console.log("les datas", allPlants);
  return (
    <div>
      <p className="choice">Tu as choisi :</p>
      <li className="bordure">{allPlants?.name}</li>
    </div>
  );
};

export default ParId;
