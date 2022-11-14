import axios from "axios";
import React, { useState } from "react";

const Cree = () => {
  const [newPlantName, setNewPlantName] = useState("");
  const [newPlantPrice, setNewPlantPrice] = useState("");
  const [newPlantQuantity, setNewPlantQuantity] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [message, setMessage] = useState("");

  const nameFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPlantName(e.currentTarget.value);
  };
  const priceFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPlantPrice(e.currentTarget.value);
  };
  const quantityFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPlantQuantity(e.currentTarget.value);
  };
  const categoryFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/plants/", {
        name: `${newPlantName}`,
        unitprice_ati: `${newPlantPrice}`,
        quantity: `${newPlantQuantity}`,
        category: `${newCategory}`,
      })
      .then((res) => {
        console.log(res.data);
        setMessage("Nouvelle Plante !");
      })
      .catch((error) => {
        console.error("something went wrong", error);
        setMessage("Oups !! Tu as oublié de remplir un des champs");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" name="name" onChange={nameFunction} />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" name="price" onChange={priceFunction} />
        </div>
        <div>
          <label htmlFor="quantity">Quantity :</label>
          <input type="text" id="quantity" name="quantity" onChange={quantityFunction} />
          <div>
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              onChange={categoryFunction}
            />
          </div>
        </div>
        <input type="submit" />
        <h2>{message}</h2>
      </form>
    </div>
  );
};

export default Cree;
