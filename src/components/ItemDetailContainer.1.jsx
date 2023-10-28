import React from "react";
import ItemDetail from "./ItemDetail";
import { Center } from "@chakra-ui/react";

export const ItemDetailContainer = () => {
  const productos = [
    {
      id: 1,
      categoria: "accesorios",
      nombre: "Buff 9z",
      marca: "9z",
      color: "violeta / negro",
      precio: 7000,
      imagen: "../public/images/camisetat.jpg",
      descripcion: "Buff original de 9z",
      cantidad: 1,
    },
    {
      id: 2,
      categoria: "camisetas",
      nombre: "Camiseta v1",
      marca: "9z",
      color: "dorado",
      precio: 10000,
      imagen: "../public/images/9z camiseta dorado.png",
      descripcion: "Camiseta edicion limitada v1",
      cantidad: 4,
    },
    {
      id: 3,
      categoria: "camisetas",
      nombre: "Camiseta v2",
      marca: "9z",
      color: "blanco",
      precio: 10000,
      imagen: "../public/images/9z camiseta blanca.png",
      descripcion: "Camiseta edicion limitada v2",
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
      console.log(resultado);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <Center p="1rem">
        <ItemDetail productos={productos} />
      </Center>
    </>
  );
};
