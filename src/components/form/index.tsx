import React from 'react';

import './form.scss';


function Form({handleApiCall}:any){
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const formData = {
      method:'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    return handleApiCall(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>Enter URL: </span>
          <input name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span id="get">GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
      </form>
    </>
  );
}


export default Form;
