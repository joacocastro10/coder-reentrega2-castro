import React from "react";
import ItemList from "./ItemList";
import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState } from "react"; 

const ItemListContainer = () => {
  const {categoria} = useParams()
console.log(categoria)
const {filterProduct, setFilterProduct} = useState([]);



  const productos = [
    {
      id: 1,
      categoria: "shorts",
      nombre: "short titular",
      marca: "boca juniors",
      color: "azul y oro",
      precio: 14000,
      imagen: "../public/images/shortpng.png",
      descripcion: "short original, fabricado en argentina",
      cantidad: 1,
    },
    {
      id: 2,
      categoria: "camisetas",
      nombre: "Camiseta titular",
      marca: "boca juniors",
      color: "azul clasico",
      precio: 24000,
      imagen: "../public/images/titular.png",
      descripcion: "Camiseta titular cavani ultima edicion",
      cantidad: 4,
    },
    {
      id: 3,
      categoria: "camisetas",
      nombre: "Camiseta suplente",
      marca: "boca juniors",
      color: "blanco",
      precio: 17000,
      imagen: "../public/images/camisetasuplente.png",
      descripcion: "Camiseta suplente 2022 ultimas unidades",
      cantidad: 15,
    },
    {
      id: 4,
      categoria: "buzos",
      nombre: "buzo entrenamiento boca jrs",
      marca: "adidas",
      color: "azul",
      precio: 14000,
      imagen: "../public/images/buzoentrenamiento.png",
      descripcion: " buzo de entrenamiento de fútbol adidas en tejido absorbente está basado en el que usan los jugadores de Boca Juniors mientras se preparan para enfrentar a sus rivales",
      cantidad: 5,
    },
    {
      id: 5,
      categoria: "buzos",
      nombre: "buzo boca jrs 2023",
      marca: "adidas",
      color: "azul",
      precio: 12000,
      imagen: "../public/images/buzoazul.png",
      descripcion: "buzo de boca juniors temporada 2023",
      cantidad: 7,
    },
  ];
  
  const obtenerProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject("No se encontraron productos");
    }
  });

  obtenerProductos
    .then((resultado) => {
    })
    .catch((error) => {
      console.log(error);
    });
    
   
  const filteredProduct = productos.filter((producto) => producto.categoria == categoria);
    
    
  return (
    <>
      <Center className= "itemListContainer" p = "1rem">
      {categoria ? <ItemList productos={filteredProduct} /> : <ItemList productos={productos} />}
      </Center>
    </>
  );
};

export default ItemListContainer;
