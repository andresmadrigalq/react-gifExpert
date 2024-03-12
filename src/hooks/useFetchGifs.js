import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = ( category ) => {

      const [imagenes, setImagenes] = useState([]);
      const [isLoading, setIsLoading] = useState( true );

      const getImages = async () => {
            const newImagenes = await getGifs( category );
            setImagenes(newImagenes);
            setIsLoading( false );
      };

      //    Sirve para disparar efectos secundarios, cuandol algo cambie
      //    es una funcion, 2 argumentos 1) Funcion Callback (flecha) 2) Lista de dependencias
      useEffect(() => {
            getImages();
      }, []) // [] -> Arreglo de dpendencias vacias. significa que solo se va a disparar la primera vez que ejecuta el componente


      return {
            imagenes,
            isLoading
      }
}