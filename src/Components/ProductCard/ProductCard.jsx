import React from "react";

const ProductCard = ({ title, price = 0, isRed, inicoCuenta }) => {
  const saludar = () => {
    console.log("Hola desde Saludar ");
  };

  const saludar2 = (nombre) => {
    console.log("Hola desde Saludar 2 " + nombre);
  };

  return (
    <div>
      <h1 className={isRed ? "red" : "blue"}>{title}</h1>
      <h2>{price}</h2>
      <button onClick={saludar}>Saludar</button>
      <button onClick={() => saludar2("Mayre")}>Saludar 2</button>
      <button onClick={inicoCuenta}>Ingresar</button>
    </div>
  );
};

export default ProductCard;
