import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

      const[categories, setCategories] = useState(['One Punch']);
      
      const onAddCategory = (  newCategory ) => {
            if (newCategory.trim().length <= 2 ) return;
            let pos = categories.indexOf( newCategory);
            if ( pos === -1 ) {
                  setCategories( categories => [ newCategory, ...categories  ]);
            } ;            
            //  setCategories( [  newCategory, ...categories] )
      };

      return(
            <>
                  <h1>Gift Expert App</h1>

                  <AddCategory  onNewCategory={ onAddCategory }
                  />

                  { 
                        categories.map( category => {
                              return( <GifGrid key={ category } 
                                               category={ category } 
                                      />
                              )})  
                  }

            </>
      );
};