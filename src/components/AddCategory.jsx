import { useState } from 'react';

export const AddCategory = ({ onNewCategory , categories }  ) => {
      const [inputValue, setInputValue] = useState('');
      const onChanceCategory = ( { target }) =>{
            setInputValue(  target.value );
      }

      const onSubmit = ( event ) => {
            event.preventDefault();
            onNewCategory( inputValue.trim() );
            setInputValue('');  
      };
      
      return( 
            // <form onSubmit={ (event) => onSubmit(event)}>
            <form onSubmit={ onSubmit }>
                  <input 
                        type="text"
                        placeholder= "Buscar Gifts"
                        value={ inputValue }
                        // onChange={ (event) => onChanceCategory(event) }
                        onChange={ onChanceCategory }
                  />
            </form>
       );
};