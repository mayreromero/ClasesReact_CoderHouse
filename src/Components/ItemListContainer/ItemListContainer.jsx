import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  /* const [nombre, setNombre] = useState("Kimi");
  const [contador, setContador] = useState(0);

  const [userName, setUserName] = useState("Alejandro");

  const cambiarContador = () => {
    setContador(contador + 1);
  };

  const cambiarNombreJuliana = () => {
    setNombre("Juliana");
  };
  const cambiarNombreJuan = () => {
    setNombre("Juan");
  }; */

  const [items, setItems] = useState([]);

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(products);
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(items);

  /*  useEffect(() => {
    setNombre("Mayre");
    console.log("me ejecute una vez en el effect"); // LLamada a un backend (Pesado)
  }, []); //Arreglo de depencencias vacio

  //useEffect(() => {
  //  console.log("me ejecuto cada vez que cambia algo"); // LLamada a un backend (Pesado)
  // }, [contador]); // Areglo de dependencias a la escucha de una variable

  //console.log("me ejecute fuera del effect");

  //No debe ir aqui esta promesa es del backend

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve("Angel");
      //reject("Salio todo mal");
    });

    productList
      .then((res) => {
        setUserName(res);
      })
      .catch((error) => {
        console.log("Estoy en el catch, " + error);
      });
  }, []);

  console.log(userName); */

  //.then es para (Lo que pase aqui adentro se va a resolver mientras la promesa salga bien, es decir un resolve)
  //.catch es para(Cuando la promesa se resuelva mal, es decir reject)
  return (
    <div>
      {/* <h1>Hola {nombre} como estas hoy? </h1>
      <button onClick={cambiarNombreJuliana}>Cambiar a Juliana</button>
      <button onClick={cambiarNombreJuan}>Cambiar a Juan</button>
      <button onClick={cambiarContador}>Cambiar Contador</button> */}

      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
