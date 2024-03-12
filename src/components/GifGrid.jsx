import { useEffect, useState } from "react";
//import { getGifs } from "../helpers/getGifs";
import { GifCard } from "./GifCard";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import Button from 'react-bootstrap/Button';

export const GifGrid = ({ category }) => {

      const{ imagenes, isLoading } = useFetchGifs( category );

      // console.log({ isLoading });

      return (
            <>
                  <h3>{category}</h3>
                  {
                        isLoading
                        ? ( <h2> Cargando ... </h2> )
                        : ( <h2> Cargado </h2> )
                  }
                 

                  <div className="card-grid">
                        {
                              imagenes.map((imagenes) => (

                                    <GifCard key={imagenes.id} title={imagenes.title} url={imagenes.url} />

                              ))

                        }
                  </div>
            </>
      );
};